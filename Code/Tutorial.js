function setup() {
  createCanvas(1600, 800);
  background(173, 216, 230);

  let buttonM = createButton('Back to Menu');
  buttonM.position(width/2-40, 80);
  buttonM.mousePressed(changePageToM);
}

function preload() {
  tutorialBinds = loadImage('Images/TutorialBinds.png');
}

function changePageToM(){
  window.location.href = "menu.html";
}

function draw() {
  textSize(50)
  text("Tutorial", width/2-85 , 50);
  image(tutorialBinds, width/2-400, height/2-200, 394*2, 105*2);
  textSize(25)
  text("Use W, A, S, D or Arrow Keys to move", width/2-220, height/2+150);
  text("Walk up to an NPC to interact", width/2-175, height/2+200);
  text("Complete quests to progress", width/2-165, height/2+250);
  text("Complete all quests to win", width/2-155, height/2+300);
}