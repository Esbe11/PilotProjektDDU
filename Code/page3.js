function setup() {
  createCanvas(1600, 800);
}

playerX = 800
playerY = 572

function preload() {
background3 = loadImage('Images/backgroundPage3.png');
}

function draw() {
  background(200);
  image(background3, 0, 0, 1600, 800);

  text("Page 3", width/2, height/2);

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
}