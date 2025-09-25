function setup() {
  createCanvas(1600, 800);
}

questX = 985
questY = 380

questItemX = 100
questItemY = 410

questBoulderX = 80
questBoulderY = 390

buttonOptionA = undefined;
buttonOptionB = undefined;
buttonVisible = false;

if (window.page1MiniChoice === undefined) {
  window.page1MiniChoice = getMiniChoice('page1MiniChoice');
}
if (window.page1Choice === undefined) {
  window.page1Choice = getChoice('page1Choice');
}

function preload() {
background1 = loadImage('Images/backgroundpage1.png');
minimap1 = loadImage('Images/minimappage1.png');
questBoulder = loadImage('Images/Boulder.png');
questItem = loadImage('Images/Backpack.png');
questGiver = loadImage('Images/SchoolKid.png');
questGiverHappy = loadImage('Images/SchoolKidBackpack.png');
player = loadImage('Images/Player.png');
playerUp = loadImage('Images/PlayerUp.png');
playerLeft = loadImage('Images/PlayerLeft.png');
}

function textBox1(){
  text("Hey...", 405, 230);
  text("Some bully took my backpack.", 405, 270);
  text("I don't think I can get it back by myself.", 405, 310);
  text("My mom is gonna be very mad at me if I get home without it.", 405, 350);
  text("You can help me, since you are older than me.", 405, 390);
}
function textBox2(){
  text("Well, I hope my mom doesn't hit me when I get home...", 405, 230);
  text("I guess you have something important to tend to.", 405, 270);
  text("Bye...", 405, 310);
}
function textBox3(){
  text("Wow, really? You want to help me?", 405, 230);
  text("My bully usually hides it somewhere around the school.", 405, 270);
  text("I hope you find it.", 405, 310);
  text("Thanks a lot.", 405, 350);
}
function textBox4(){
  text("You really found it! Thanks!", 405, 230);
  text("Now I can get home without worry.", 405, 270);
  text("You are my hero!", 405, 310);
}

function draw() {
  background(200);
  image(background1, 0, 0, 1600, 800);

  image(minimap1, 1135, 5, 306*1.5, 54*1.5);

  fill(255, 0, 0);
  triangle(1365, 50, 1380, 35, 1350, 35)

  //Road Boundaries (Y)
  roadBoundaries();

  //Page Transition
  if (playerX > width){
    window.location.href = "page2.html"
  }
  if (playerX < 0){
    window.location.href = "page3.html"
  }

  //Quest Giver
  if(window.page1MiniChoice === "complete" && window.page1Choice === "good") {
    image(questGiverHappy, questX-4, questY, 57, 81);
  }
  else{
    image(questGiver, questX-4, questY, 57, 81);
  }
  

  //Quest Emotion:

  //Question Mark
  if (window.page1MiniChoice === "") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    textSize(30)
    text("?", questX+16, questY-10);
  }

  // Dot, dot, dot
  if (window.page1MiniChoice === "true" && window.page1Choice === "0") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    textSize(30)
    text("...", questX+12, questY-10);
  }

  // Exclamation Mark
  if (window.page1MiniChoice === "complete" && window.page1Choice === "0") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    textSize(30)
    text("!", questX+20, questY-10);
  }

  //Happy Face
  if (window.page1Choice === "good") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    circle(questX+15, questY-25, 10);
    circle(questX+35, questY-25, 10);
    noFill()
    arc(questX+25, questY-15, 30, 15, 0, PI);
  }

  //Sad Face
  if (window.page1Choice === "bad") {
    fill(255, 255, 0);
    stroke(0)
    strokeWeight(2)
    circle(questX+15, questY-25, 10);
    circle(questX+35, questY-25, 10);
    noFill()
    arc(questX+25, questY-5, 30, 15, PI, 0);
  }

  strokeWeight(1)

  // Quest Item (Backpack)
  if (window.page1MiniChoice === "true") {
    image(questItem, questItemX, questItemY, 29*1.2, 34*1.2);
  }
  if (window.page1MiniChoice === "true" && dist(playerX, playerY, questItemX+27, questItemY+41.5) < 40) {
    setMiniChoice('page1MiniChoice', "complete");
  }
  
  //Quest Hider (Boulder)
  image(questBoulder, questBoulderX, questBoulderY, 100, 90);

  if (window.page1MiniChoice === "true" && dist(playerX, playerY, questItemX+34, questItemY+45) < 150) {
    questBoulderX += 1.5
    if (questBoulderX > 180){
      questBoulderX = 180
    }
  }

  //Player and Movement
  playerMovement();

  //Quest Interaction
  npcTextbox('page1MiniChoice', 'page1Choice');

  //Win Check
  winCheck();
}