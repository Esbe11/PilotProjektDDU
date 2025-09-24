function setup() {
  createCanvas(1600, 800);
  background(200);
  let buttonm = createButton('Try again? (Menu)');
  buttonm.position(width/2-40, height/2-100);
  buttonm.mousePressed(changePageTom);
}

function changePageTom(){
  window.location.href = "menu.html";
}

overallChoice = ""

function draw() {
  text("endScreen", width/2, height/2);

let page1Choice = localStorage.getItem('page1Choice');
let page2Choice = localStorage.getItem('page2Choice');
let page3Choice = localStorage.getItem('page3Choice');

if(page1Choice === "good" && page2Choice === "good" && page3Choice === "good"){
  overallChoice = "good"
}

if(page1Choice === "bad" && page2Choice === "bad" && page3Choice === "bad"){
  overallChoice = "bad"
}

  text(overallChoice, width/2, height/2+50);
}