const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world;
var object1,object2,object3;




function setup() {
  createCanvas(1200,800);
engine=Engine.create();
world=engine.world;
var object1_options={
  isStatic:true
}
object1=Bodies.rectangle(800,550,150,80,object1_options);
World.add(world,object1);
var object2_options={
  isStatic:true
}
object2=Bodies.rectangle(600,550,150,80,object2_options);
World.add(world,object2);
var object2_options={
  isStatic:true
}
object3=Bodies.rectangle(1000,550,150,90,object2_options);
World.add(world,object3);
slingshot=Bodies.rectangle(200,50,50,50);
World.add(world,slingshot);
slingshot=loadImage('sprites/sling1.png');
 
}

function draw() {
  background(255,255,255);  
Engine.update(engine);
rect(object1.position.x,object1.position.y,80,80);
rect(object2.position.x,object2.position.y,80,80);
rect(object3.position.x,object3.position.y,90,90);
rect(slingshot.position.x,slingshot.position.y,50,50);
slingshot.display();



  drawSprites();
}