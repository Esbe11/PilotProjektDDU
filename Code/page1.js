function setup() {
  createCanvas(1600, 800);
  background(200);
}

playerX = 100
playerY = 100

function draw() {
  text("Page 1", width/2, height/2);

  circle(playerX, playerY, 50);

  if (keyIsDown(keyCode(87))){
    playerY -= 5
  }
  if (keyIsDown(keyCode(83))){
    playerY += 5
  }
  if (keyIsDown(keyCode(65))){
    playerX -= 5
  }
  if (keyIsDown(keyCode(68))){
    playerX += 5
  }
}