playerX = 800
playerY = 620

overallChoice = ""

page1MiniChoice = ""
page1Choice = 0

page2MiniChoice = ""
page2Choice = 0

page3MiniChoice = ""
page3Choice = 0

if(page1Choice === "good" && page2Choice === "good" && page3Choice === "good"){
  overallChoice = "good"
}

if(page1Choice === "bad" && page2Choice === "bad" && page3Choice === "bad"){
  overallChoice = "bad"
}