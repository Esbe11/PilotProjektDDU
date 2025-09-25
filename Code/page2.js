function setup() {
  createCanvas(1600, 800);
}

questX = 850
questY = 350

questItemX = 135
questItemY = 125

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
questItem = loadImage('Images/Cat.png');
questItem2 = loadImage('Images/CatFalling.png');
questGiver = loadImage('Images/Grandma.png');
questGiverHappy = loadImage('Images/GrandmaCat.png');
player = loadImage('Images/Player.png');
playerUp = loadImage('Images/PlayerUp.png');
playerLeft = loadImage('Images/PlayerLeft.png');
}

function textBox1(){
  text("Hello there, my child.", 405, 230);
  text("My cat ran away from me.", 405, 270);
  text("She is just a little kitten.", 405, 310);
  text("She can't live by herself in the wild..", 405, 350);
  text("Would you please help me get her home, my dear child?", 405, 390);
}
function textBox2(){
  text("Well I guess you are just a busy little person.", 405, 230);
  text("I hope she can find her way home anyway...", 405, 270);
  text("Goodbye, little one.", 405, 310);
}
function textBox3(){
  text("Thank you my child, you are very kind.", 405, 230);
  text("I believe she might have climbed up that tall tree to the west.", 405, 270);
  text("Good luck finding her.", 405, 310);
  text("Thank you again, little one.", 405, 350);
}
function textBox4(){
  text("You found her! Thank you so, so much!", 405, 230);
  text("Now I can get her fed when we get back inside.", 405, 270);
  text("You are my little hero.", 405, 310);
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
  if (window.page2MiniChoice === "complete" && window.page2Choice === "good") {
    image(questGiverHappy, questX-4, questY, 75, 124.5);
  }
  else{
    image(questGiver, questX-4, questY, 75, 124.5);
  }
  

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

  // Quest Item (Cat)
  if (window.page2MiniChoice === "true" && questItemY < 130) {
    image(questItem, questItemX, questItemY, 48, 37.5);
  }
  if (window.page2MiniChoice === "true" && questItemY > 130) {
    image(questItem2, questItemX, questItemY, 42, 55.5);
  }

  if (window.page2MiniChoice === "true" && playerX - questItemX <75){
    questItemY += 7.5
    if(questItemY > 700){
      questItemY = 700
    }
  }

  if(dist(questItemX+24, questItemY+18.75, playerX+25, playerY+40.5) < 50){
      setMiniChoice('page2MiniChoice', "complete");
  } 

  //Player and Movement
  playerMovement();

  //Quest Interaction
  npcTextbox('page2MiniChoice', 'page2Choice');

  //Win Check
  winCheck();
}