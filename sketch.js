
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob1 = new Bob (200,300,40)
	Bob2 = new Bob (250,300,40)
	Bob3 = new Bob (300,300,40)
	Bob4 = new Bob (350,300,40)
	Bob5 = new Bob (400,300,40)
	roof = new Roof (100,50,1000,20)
	rope1=new Rope (Bob1.body, roof.body, 0,0)
	rope2=new Rope (Bob2.body, roof.body, 0,0)
	rope3=new Rope (Bob3.body, roof.body, 0,0)
	rope4=new Rope (Bob4.body, roof.body, 0,0)
	rope5=new Rope (Bob5.body, roof.body, 0,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  Bob1.display()
  Bob2.display()
  Bob3.display()
  Bob4.display()
  Bob5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}



