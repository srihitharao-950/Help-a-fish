


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	,engine;
var world;
var boy,Boy2
var boy1, Boy1
var fish1,Fish2
var bg


function preload() {
	Boy1=loadImage("boy_1.png")
	Boy2=loadImage("boy_2.png")
	bg = loadImage("Nature.PNG")
}



function setup() {
	createCanvas(1200, 500);
	boy=createSprite(200,300)
	boy.addImage(Boy2)
	boy1=createSprite(200,310)
	boy1.addImage("b2",Boy1)
	boy1.scale=0.6
	boy.scale=0.5
	boy1.visible=false;
	rectMode(CENTER);
    engine = Engine.create();
	world = engine.world;
	paperObject=new paper(100,60,45);
	groundObject=new ground(600,500);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 
  drawSprites();
  
  paperObject.display();

  groundObject.display();
  
  
 
  
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
        boy1.visible=true;
		boy.visible=false
		
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	}
}


