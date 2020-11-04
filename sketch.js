
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,30)
	//Create the Bodies Here.
    tree = new Tree(650,320)
mango1 = new Mango(790,596,20,20)
mango2 = new Mango(730,522,20,20)
mango3 = new Mango(933,532,20,20)
mango4 = new Mango(1065,575,20,20)
mango5 = new Mango(930,426,20,20)
mango6= new Mango(1083,476,20,20)
mango7= new Mango(678,618,20,20)
mango8= new Mango(822,472,20,20)
mango9= new Mango(1028,444,20,20)
boy = new Boy(204,755)
stone = new Stone(215,810)
//rope = new Rope (stone.body,{x:235,y:420})
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  
 
 
 
 
 
  ground.display()
 tree.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 mango8.display()
 mango9.display()
 
 boy.display()
 stone.display()
//rope.display()
 text(mouseX+","+mouseY,mouseX,mouseY)
}
function detectollision(Lstone,Lmango){
mangoPosition =lmango.body.position
stoneposition =lstone.body.position

var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false)
}






}

