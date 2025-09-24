function setup() {
  createCanvas(1600, 800);
}

questX = 600
questY = 400

questItemX = 1530
questItemY = 440

questBarrelX = 1520
questBarrelY = 435

buttonOptionA = undefined;
buttonOptionB = undefined;
buttonVisible = false;

if (window.page2MiniChoice === undefined) {
  window.page2MiniChoice = getMiniChoice('page2MiniChoice');
}
if (window.page2Choice === undefined) {
  window.page2Choice = getChoice('page2Choice');
}

function preload() {
background2 = loadImage('Images/backgroundPage2.png');
minimap2 = loadImage('Images/minimapPage2.png');
questBarrel = loadImage('Images/Trashcan.png');
questItem = loadImage('Images/Cat.png');
questGiver = loadImage('Images/Grandma.png');
questGiverHappy = loadImage('Images/GrandmaCat.png');
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
  image(background2, 0, 0, 1600, 800);

  image(minimap2, 1135, 5, 306*1.5, 54*1.5);

  fill(255, 0, 0);
  triangle(1365, 50, 1380, 35, 1350, 35)

  //Road Boundaries (Y)
  roadBoundaries();

  //Page Transition
  if (playerX > width){
    window.location.href = "page3.html"
  }
  if (playerX < 0){
    window.location.href = "page1.html"
  }

  //Quest Giver
  fill(255)
  image(questGiver, questX-4, questY, 57, 81);

  //Quest Emotion:

  //Question Mark
  if (window.page2MiniChoice === "") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    textSize(30)
    text("?", questX+16, questY-10);
  }

  // Dot, dot, dot
  if (window.page2MiniChoice === "true" && window.page2Choice === "0") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    textSize(30)
    text("...", questX+12, questY-10);
  }

  // Exclamation Mark
  if (window.page2MiniChoice === "complete" && window.page2Choice === "0") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    textSize(30)
    text("!", questX+20, questY-10);
  }

  //Happy Face
  if (window.page2Choice === "good") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    circle(questX+15, questY-25, 10);
    circle(questX+35, questY-25, 10);
    noFill()
    arc(questX+25, questY-15, 30, 15, 0, PI);
  }

  //Sad Face
  if (window.page2Choice === "bad") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    circle(questX+15, questY-25, 10);
    circle(questX+35, questY-25, 10);
    noFill()
    arc(questX+25, questY-5, 30, 15, PI, 0);
  }

  strokeWeight(1)

  // Quest Item (Blanket)
  if (window.page2MiniChoice === "true") {
    fill(255, 0, 0);
    image(questItem, questItemX, questItemY, 54, 83);
  }
  if (window.page2MiniChoice === "true" && dist(playerX, playerY, questItemX+27, questItemY+41.5) < 40) {
    setMiniChoice('page2MiniChoice', "complete");
  }
  
  //Quest Hider (Barrel)
  fill(0)
  image(questBarrel, questBarrelX, questBarrelY, 68, 90);

  if (window.page2MiniChoice === "true" && dist(playerX, playerY, questItemX+34, questItemY+45) < 150) {
    questBarrelX -= 1.5
    if (questBarrelX < 1450){
      questBarrelX = 1450
    }
  }

  //Player and Movement
  playerMovement();

  //Quest Interaction
  npcTextbox('page2MiniChoice', 'page2Choice');

  //Win Check
  winCheck();
}