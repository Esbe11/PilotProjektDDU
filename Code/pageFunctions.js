//Road boundaries (Y)
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

//Quest Interaction
function npcTextbox(miniChoiceVarName, choiceVarName) {
  let pageMiniChoice = window[miniChoiceVarName];
  let pageChoice = window[choiceVarName];

  if (dist(playerX, playerY, questX+25, questY+25) < 50) {
    if (!buttonVisible && pageMiniChoice === "") {
      buttonOptionA = createButton('Sure, I can help you');
      buttonOptionA.position(width/2-160, 500);
      buttonOptionA.mousePressed(() => { window[miniChoiceVarName] = true; });
      buttonOptionB = createButton('No thanks, Mister');
      buttonOptionB.position(width/2+40, 500);
      buttonOptionB.mousePressed(() => { window[miniChoiceVarName] = false; });
      buttonVisible = true;
    }
    if(pageMiniChoice !== ""){
      buttonOptionA.remove();
      buttonOptionB.remove();
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
    if(pageMiniChoice === false){
      textBox2();
      window[choiceVarName] = "bad";
    }
    if(pageMiniChoice === true){
      textBox3();
    }
    if(pageMiniChoice === "complete"){
      textBox4();
      window[choiceVarName] = "good";
    }
  } else {
    if (buttonVisible) {
      buttonOptionA.remove();
      buttonOptionB.remove();
      buttonVisible = false;
    }
  }
}






