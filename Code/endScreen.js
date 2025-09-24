function setup() {
  createCanvas(1600, 800);
  background(200);
}

overallChoice = ""

function draw() {
  text("endScreen", width/2, height/2);

if(page1Choice === "good" && page2Choice === "good" && page3Choice === "good"){
  overallChoice = "good"
}

if(page1Choice === "bad" && page2Choice === "bad" && page3Choice === "bad"){
  overallChoice = "bad"
}
}