function setup() {
  createCanvas(1600, 800);
}

function preload() {
background1 = loadImage('Images/backgroundPage1.png');
minimap1 = loadImage('Images/minimapPage1.png');
}

function draw() {
  background(200);
  image(background1, 0, 0, 1600, 800);

  image(minimap1, 1135, 5, 306*1.5, 54*1.5);

  fill(255, 0, 0);
  triangle(1365, 50, 1380, 35, 1350, 35)

  //Player and Movement
  playerMovement();

  //Road Boundaries (Y)
  roadBoundaries();

  //Page Transition
  if (playerX > width){
    window.location.href = "page2.html"
  }
  if (playerX < 0){
    window.location.href = "page3.html"
  }
}