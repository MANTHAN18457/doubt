var bg1,bg2,bg3,scene
var snow1,snow2,snow 
var boy1
var footstep1

function preload() {
  bg1=loadImage("snow1.jpg")
  bg2=loadImage("snow2.jpg")
  bg3=loadImage("snow3.jpg")
  snow1=loadImage("snow4.webp")
  snow2=loadImage("snow5.webp")
  boy1=loadImage("boy.png")
  song=loadSound("Winter-Forest-Sounds.wav")

}

function setup() {
  createCanvas(1366,625);
  
  
 
}

function draw() {

//-------------------------::

  background(0);

//-------------------------::
                           
  image(bg3,0,0,1366,625)
  

  image(boy1,500,300,300,300)

  image(snow1,random(0,1366),0,50,50)
  
  
 //------------------------:: 

song.play()

//-------------------------::

  

   getTime()

   
  drawSprites();
}

async function getTime(){ 

  var response  =  await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  
  hour = datetime.slice(11,13);
  min = datetime.slice(14,16)

}