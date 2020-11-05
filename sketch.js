var ball,ground;
var box1,box2,box3;
var paper1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	var canvas=createCanvas(1200,800);
	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,790,1200,20);
	paper1 = new Paper(100,650,40);
	box1=new dustbin (650,775,100,15)
	box2=new dustbin (600,750,15,100)
	box3=new dustbin (700,750,15,100)
	
  
}


function draw() {
  background(0);
  Engine.update(engine);

  
 paper1.display();
 box1.display();
 box2.display();
 box3.display();
 ground1.display();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }
}








