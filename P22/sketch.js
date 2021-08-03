const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1,rope2,rope3,rope4,rope5;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4,ball5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball1 = new Ball(320,380,20);
	ball2 = new Ball(360,380,20);
	ball3 = new Ball(400,380,20);
	ball4 = new Ball(440,380,20);
	ball5 = new Ball(480,380,20);
 
	rope1 = new rope(ball1,roof,-80,0);
	rope2 = new rope(ball2,roof,-40,0);
	rope3 = new rope(ball3,roof,0,0);
	rope4 = new rope(ball4,roof,40,0);
	rope5 = new rope(ball5,roof,80,0);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  
  
  //create ellipse shape for multiple bobs here
  ball1.show();
  ball2.show();
  ball3.show();
  ball4.show();
  ball5.show();

  //call display() to show ropes here
 rope1.show();
 rope2.show();
 rope3.show();
 rope4.show();
 rope5.show();
 
	
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball1,ball1.position,{x:-50,y:-45})
}

}