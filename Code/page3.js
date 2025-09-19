function setup() {
  createCanvas(1600, 800);
}

playerX = 800
playerY = 620

questX = 600
questY = 400

questItemX = 1550
questItemY = 500

questBarrelX = 1550
questBarrelY = 460

let buttonOptionA;
let buttonOptionB;
let buttonVisible = false; 

page3MiniChoice = ""
page3Choice = 0

function preload() {
background3 = loadImage('Images/backgroundPage3.png');
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
  text("I believe it was somewhere around the tall building to the east.", 405, 270);
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

  //Player Movement
  if (keyIsDown(87) === true){
    playerY -= 5
  }
  if (keyIsDown(83) === true){
    playerY += 5
  }
  if (keyIsDown(65) === true){
    playerX -= 5
  }
  if (keyIsDown(68) === true){
    playerX += 5
  }

  //Road Boundaries
  if (playerY > height){
    playerY = 800;
  }
  if(playerY < 456){
    playerY = 456;
  }

  //Page Transition
  if (playerX > width){
    window.location.href = "page1.html"
  }
  if (playerX < 0){
    window.location.href = "page2.html"
  }

  //Quest Giver
  fill(255)
  square(questX, questY, 50);

  //Quest Item
  

  //Quest Item (Blanket)
  if (page3MiniChoice === true){
    fill(255, 0, 0);
  triangle(questItemX, questItemY, questItemX+30, questItemY, questItemX+15, questItemY-30);
  }
  if (page3MiniChoice === true && dist(playerX, playerY, questItemX+15, questItemY-15) < 35){
    page3MiniChoice = "complete"
  }
  
  //Quest Hider (Barrel)
  fill(0)
  rect(questBarrelX, questBarrelY, 30, 50);

  if (page3MiniChoice === true && dist(playerX, playerY, questItemX+15, questItemY-15) < 150){
    questBarrelX -= 1
    if (questBarrelX < 1500){
      questBarrelX = 1500
    }
  }

  fill(255);
  circle(playerX, playerY, 50);

  //Quest Interaction
   if (dist(playerX, playerY, questX+25, questY+25) < 50){
    if (!buttonVisible && page3MiniChoice === "") {
      buttonOptionA = createButton('Sure, I can help you');
      buttonOptionA.position(width/2-100, 500);
      buttonOptionA.mousePressed(() => page3MiniChoice = true);
      buttonOptionB = createButton('No thanks, Mister');
      buttonOptionB.position(width/2+100, 500);
      buttonOptionB.mousePressed(() => page3MiniChoice = false);
      buttonVisible = true;
    }
    if(page3MiniChoice !== ""){
      buttonOptionA.remove();
      buttonOptionB.remove();
      buttonVisible = false;
    }

    fill(255, 255, 255, 240)
    rect(400, 200, 800, 400);
    textSize(25)
    fill(0)
    if(page3MiniChoice === ""){
      textBox1();
    }
    if(page3MiniChoice === false){
      textBox2();
      page3Choice = "bad"
    }
    if(page3MiniChoice === true){
      textBox3();
    }
    if(page3MiniChoice === "complete"){
      textBox4();
      page3Choice = "good"
    }
  
  }
  else {
    if (buttonVisible) {
      buttonOptionA.remove();
      buttonOptionB.remove();
      buttonVisible = false;
    }
  }
}