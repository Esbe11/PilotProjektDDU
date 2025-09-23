function setup() {
  createCanvas(1600, 800);
  background(200);
  let buttonA = createButton('Start Game');
    buttonA.position(width/2-35, height/2-20);
    buttonA.mousePressed(changePageToA);

    let buttonB = createButton('Tutorial');
    buttonB.position(width/2-25, height/2+20);
    buttonB.mousePressed(changePageToB);
}

function changePageToA(){
  localStorage.setItem('page1MiniChoice', "");
  localStorage.setItem('page1Choice', 0);
  localStorage.setItem('page2MiniChoice', "");
  localStorage.setItem('page2Choice', 0);
  localStorage.setItem('page3MiniChoice', "");
  localStorage.setItem('page3Choice', 0);

  window.location.href = "page1.html";
}

function changePageToB(){
  window.location.href = "tutorial.html";
}

function draw() {
  textSize(50)
  text("Walk The Choice", width/2-190, height/2-250);
  text("Main Menu", width/2-120, height/2-150);
  textSize(20)
  text("A Casper and Esben Production", width/2-140, height/2+350);

  //Center point
  circle(width/2, height/2, 10);
}