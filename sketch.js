const Engine=Matter.Engine;
const World=Matter.World; 
const Bodies=Matter.Bodies;
var engine,world;
var ground,ball; 
function setup() { 
  createCanvas(400,400); 
  engine=Engine.create(); 
  world=engine.world; 
  var option={
    isStatic:true 
  } 
  ground=Bodies.rectangle(200,390,200,20,option);
  World.add(world,ground);
  var balloptions={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,balloptions);
  
  World.add(world,ball); 
  
} 
function draw() { 
  background(0); 
  rectMode(CENTER); 
  Engine.update(engine); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20); 
  //rect(200,200,50,50);
    drawSprites(); 
}