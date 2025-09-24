//Road boundaries (Y)
playerX = 800
playerY = 620

function roadBoundaries(){
  if (playerY > height){
    playerY = 800;
  }
  if(playerY < 456){
    playerY = 456;
  }
}

//Player and Movement
function playerMovement(){
    fill(255);
    circle(playerX, playerY, 50);

    if (keyIsDown(87) === true || keyIsDown(38) === true){
    playerY -= 5
    }
    if (keyIsDown(83) === true || keyIsDown(40) === true){
    playerY += 5
    }
    if (keyIsDown(65) === true || keyIsDown(37) === true){
    playerX -= 5
    }
    if (keyIsDown(68) === true || keyIsDown(39) === true){
    playerX += 5
    }
}

function setMiniChoice(miniChoiceVarName, val) {
  window[miniChoiceVarName] = String(val);
  localStorage.setItem(miniChoiceVarName, String(val));
}

function setChoice(choiceVarName, val) {
  window[choiceVarName] = val;
  localStorage.setItem(choiceVarName, val);
}

function getMiniChoice(miniChoiceVarName) {
  const val = localStorage.getItem(miniChoiceVarName);
  return val !== null ? val : "";
}

function getChoice(choiceVarName) {
  return localStorage.getItem(choiceVarName) || 0;
}

//Quest Interaction
function npcTextbox(miniChoiceVarName, choiceVarName) {
  let pageMiniChoice = window[miniChoiceVarName];
  let pageChoice = window[choiceVarName];

  if (dist(playerX, playerY, questX+25, questY+25) < 100) {
    if (!buttonVisible && (pageMiniChoice === "" || pageMiniChoice === undefined)) {
      buttonOptionA = createButton('Sure, I can help you');
      buttonOptionA.position(width/2-160, 500);
      buttonOptionA.mousePressed(() => { setMiniChoice(miniChoiceVarName, "true"); });
      buttonOptionB = createButton('No thanks, Mister');
      buttonOptionB.position(width/2+40, 500);
      buttonOptionB.mousePressed(() => { setMiniChoice(miniChoiceVarName, "false"); });
      buttonVisible = true;
    }
    if(pageMiniChoice !== ""){
      if (buttonOptionA) buttonOptionA.remove();
      if (buttonOptionB) buttonOptionB.remove();
      buttonVisible = false;
    }

    fill(255, 255, 255, 240)
    rect(400, 200, 800, 400);
    textSize(25)
    fill(0)

    fill(0, 0, 0, 150)
    textSize(20)
    strokeWeight(0)
    text("Move away from this npc to close the menu.", 580, 590);

    fill(0, 0, 0, 255)
    textSize(25)
    strokeWeight(1)
    if(pageMiniChoice === ""){
      textBox1();
    }
    if(pageMiniChoice === "false"){
      textBox2();
      setChoice(choiceVarName, "bad");
    }
    if(pageMiniChoice === "true"){
      textBox3();
    }
    if(pageMiniChoice === "complete"){
      textBox4();
      setChoice(choiceVarName, "good");
    }
  } else {
    if (buttonVisible) {
      if (buttonOptionA) buttonOptionA.remove();
      if (buttonOptionB) buttonOptionB.remove();
      buttonVisible = false;
    }
  }
}

function winCheck() {
  let page1Choice = getChoice('page1Choice');
  let page2Choice = getChoice('page2Choice');
  let page3Choice = getChoice('page3Choice');
  if ((page1Choice === "good" || page1Choice === "bad") && (page2Choice === "good" || page2Choice === "bad") && (page3Choice === "good" || page3Choice === "bad")) {
    fill(0, 255, 0,)
    strokeWeight(3)
    rect(width/2-25, height/2+195, 50, 50);
    if (dist(playerX, playerY, width/2, height/2+220) < 50) {
      window.location.href = "endScreen.html";
    }
  }
}