function setup() {
  createCanvas(1600, 800);
}

questX = 600
questY = 360

questItemX = 1530
questItemY = 440

questBarrelX = 1520
questBarrelY = 435

buttonOptionA = undefined;
buttonOptionB = undefined;
buttonVisible = false;

if (window.page3MiniChoice === undefined) {
  window.page3MiniChoice = getMiniChoice('page3MiniChoice');
}
if (window.page3Choice === undefined) {
  window.page3Choice = getChoice('page3Choice');
}

function preload() {
background3 = loadImage('Images/backgroundPage3.png');
minimap3 = loadImage('Images/minimapPage3.png');
questBarrel = loadImage('Images/Trashcan.png');
questItem = loadImage('Images/Blanket.png');
questGiver = loadImage('Images/HomelessMan.png');
questGiverHappy = loadImage('Images/HomelessManBlanket.png');
player = loadImage('Images/Player.png');
playerUp = loadImage('Images/PlayerUp.png');
playerLeft = loadImage('Images/PlayerLeft.png');
}

function textBox1(){
  text("Hey you. I need your help!", 405, 230);
  text("I lost my blanket somewhere around here.", 405, 270);
  text("Could you help me find it?", 405, 310);
  text("If I don't find it soon, I won't be able to sleep tonight...", 405, 350);
  text("Please help me, dear stranger.", 405, 390);
}
function textBox2(){
  text("Well now I am gonna be cold at night...", 405, 230);
  text("I guess you are just a selfish person.", 405, 270);
  text("Goodbye.", 405, 310);
}
function textBox3(){
  text("Thank you so much! You're very kind.", 405, 230);
  text("I believe it was somewhere around the tall gray building to the east.", 405, 270);
  text("Good luck finding it!", 405, 310);
  text("Thank you again, kind stranger!", 405, 350);
}
function textBox4(){
  text("You found it! Thank you so much!", 405, 230);
  text("Now I can finally sleep well tonight.", 405, 270);
  text("You are a true hero!", 405, 310);
}

function draw() {
  background(200);
  image(background3, 0, 0, 1600, 800);

  image(minimap3, 1135, 5, 306*1.5, 54*1.5);

  fill(255, 0, 0);
  triangle(1365, 50, 1380, 35, 1350, 35)

  //Road Boundaries (Y)
  roadBoundaries();

  //Page Transition
  if (playerX > width){
    window.location.href = "page1.html"
  }
  if (playerX < 0){
    window.location.href = "page2.html"
  }

  //Quest Giver
  if (window.page3MiniChoice === "complete" && window.page3Choice === "good") {
    image(questGiverHappy, questX-4, questY, 57*1.3, 81*1.3);
  }
  else{
    image(questGiver, questX-4, questY, 57*1.3, 81*1.3);
  }

  //Quest Emotion:

  //Question Mark
  if (window.page3MiniChoice === "") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    textSize(30)
    text("?", questX+23.5, questY-10);
  }

  // Dot, dot, dot
  if (window.page3MiniChoice === "true" && window.page3Choice === "0") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    textSize(30)
    text("...", questX+19.5, questY-10);
  }

  // Exclamation Mark
  if (window.page3MiniChoice === "complete" && window.page3Choice === "0") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    textSize(30)
    text("!", questX+27.5, questY-10);
  }

  //Happy Face
  if (window.page3Choice === "good") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    circle(questX+22.5, questY-25, 10);
    circle(questX+42.5, questY-25, 10);
    noFill()
    arc(questX+32.5, questY-15, 30, 15, 0, PI);
  }

  //Sad Face
  if (window.page3Choice === "bad") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    circle(questX+22.5, questY-25, 10);
    circle(questX+42.5, questY-25, 10);
    noFill()
    arc(questX+32.5, questY-5, 30, 15, PI, 0);
  }

  strokeWeight(1)

  // Quest Item (Blanket)
  if (window.page3MiniChoice === "true") {
    image(questItem, questItemX, questItemY, 54, 83);
  }
  if (window.page3MiniChoice === "true" && dist(playerX, playerY, questItemX+27, questItemY+41.5) < 40) {
    setMiniChoice('page3MiniChoice', "complete");
  }
  
  //Quest Hider (Barrel)
  image(questBarrel, questBarrelX, questBarrelY, 68, 90);

  if (window.page3MiniChoice === "true" && dist(playerX, playerY, questItemX+34, questItemY+45) < 150) {
    questBarrelX -= 1.5
    if (questBarrelX < 1450){
      questBarrelX = 1450
    }
  }

  //Player and Movement
  playerMovement();

  //Quest Interaction
  npcTextbox('page3MiniChoice', 'page3Choice');

  //Win Check
  winCheck();
}