var form,formimg
var input,button,start
var bgimage,bg
var gamestate="start"


function preload(){
formimg=loadImage("images/form.png")
bgimage=loadImage("images/story.png")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  form=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  form.addImage(formimg)
  
  form.scale=5
  input=createInput("NAME")
  button=createButton('start')
}

function draw() {
  background(255,255,255);  
    start=input.value()
    input.position(650,250)
    button.position(800,250)
    
    button.mousePressed(()=>{
      gamestate="play"
      form.visible=false
      input.hide()
      button.hide()
      bg=createSprite(500,200)
      bg.addImage(bgimage)
      bg.scale=5
     
    })





  drawSprites();
  if(gamestate=="start"){
    textSize(30)
    stroke("red")
    fill("red")
    text("WELCOME TO VILLAGE BATTLE GROUND ",500,200)
    
  }
 if(gamestate=="play"){
      
  text(" THIS IS A STORY OF A MAN WHO HAS BEEN KIDNAPPED AND HAS BEEN THOWN OUT IN A VILLAGE WITH NOTHING IN HIS HANDS.",650,250)
  text("THEN RAN INTO A HOUSE AND HE DEVOLOPED HIM AND AN ISLAND AND ALSO BECAME THE KING.",800,300)
  text("[THE KEYS WILL BE DISPLAYING AT THAT MOMENT IT'S NEED]",800,400)
 }
}