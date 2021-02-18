
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){}


function setup() {
	createCanvas(800,700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new Roof(250,100,80,30)
	roof2 = new Roof(300,100,80,30)
	roof3 = new Roof(350,100,80,30)
	roof4 = new Roof(400,100,80,30)
	roof5 = new Roof(450,100,80,30)

	bob1 = new Bob(250,300)
	bob2 = new Bob(300,300)
	bob3 = new Bob(350,300)
	bob4 = new Bob(400,300)
	bob5 = new Bob(450,300)


	chain1 = new Chain(bob1.body,roof1.body,-100,0)
	chain2 = new Chain(bob2.body,roof2.body,-50,0)
	chain3 = new Chain(bob3.body,roof3.body,0,0)
	chain4 = new Chain(bob4.body,roof4.body,50,0)
	chain5 = new Chain(bob5.body,roof5.body,100,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");

roof1.display()
roof2.display()
roof3.display()
roof4.display()
roof5.display()

bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()

chain1.display()
chain2.display()
chain3.display()
chain4.display()
chain5.display()
  drawSprites();
 
}
function keyPressed() {

	if (keyCode ===RIGHT_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:600,y:500}); } 
	}



