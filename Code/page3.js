function setup() {
  createCanvas(1600, 800);
}

playerX = 800
playerY = 620

questX = 600
questY = 400

let buttonOptionA;
let buttonOptionB;
let buttonVisible = false; 

page3MiniChoice = ""
page3Choice = 0

function preload() {
background3 = loadImage('Images/backgroundPage3.png');
}

function draw() {
  background(200);
  image(background3, 0, 0, 1600, 800);

  fill(255);
  circle(playerX, playerY, 50);

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

  square(questX, questY, 50);

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
    text("Hey you. I need your help!", 405, 230);
    text("I lost my blanket somewhere around here.", 405, 270);
    text("Could you help me find it?", 405, 310);
    text("If I don't find it soon, I won't be able to sleep tonight...", 405, 350);
    text("Please help me, dear stranger.", 405, 390);
  } else {
    if (buttonVisible) {
      buttonOptionA.remove();
      buttonOptionB.remove();
      buttonVisible = false;
    }
  }
}