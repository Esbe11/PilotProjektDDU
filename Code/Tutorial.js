function setup() {
  createCanvas(1600, 800);
  background(200);

  let buttonM = createButton('Back to Menu');
  buttonM.position(width/2-40, height/2-100);
  buttonM.mousePressed(changePageToM);
}

function changePageToM(){
  window.location.href = "menu.html";
}

function draw() {
  text("Tutorial", width/2-20, height/2+20);
  circle(width/2, height/2, 10);  
}