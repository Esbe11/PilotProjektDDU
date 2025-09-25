function setup() {
  createCanvas(1600, 800);
  let buttonm = createButton('Try again? (Menu)');
  buttonm.position(width/2-50, height/2+100);
  buttonm.mousePressed(changePageTom);

  let page1Choice = localStorage.getItem('page1Choice');
  let page2Choice = localStorage.getItem('page2Choice');
  let page3Choice = localStorage.getItem('page3Choice');

  if(page1Choice === "good"){
    choiceScore = choiceScore + 1
  }
  if(page2Choice === "good"){
    choiceScore = choiceScore + 1
  }
  if(page3Choice === "good"){
    choiceScore = choiceScore + 1
  }
}

function changePageTom(){
  window.location.href = "menu.html";
}

choiceScore = 0
overallChoice = ""

function draw() {
  background(200);
  

  if(choiceScore === 0){
    background(255, 0, 0);
    overallChoice = "You are a terrible person..."
  }
  if(choiceScore === 1){
    background(255, 165, 0);
    overallChoice = "You are a bad person.."
  }
  if(choiceScore === 2){
    background(255, 255, 0);
    overallChoice = "You are a decent person."
  }
  if(choiceScore === 3){
    background(0, 255, 0);
    overallChoice = "You are a great person!"
  }

  textSize(50)
  textAlign(CENTER);
  text("Summary", width/2, height/2-300);
  
  textSize(35)
  text("Your results:", width/2, height/2-100);
  text(overallChoice, width/2, height/2);
}