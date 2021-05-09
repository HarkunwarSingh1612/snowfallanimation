
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
var backgroundImg;
var snow1= [];
var engine, world;
var boy,  boy1, snowMusic, edges ;
function preload() {
  backgroundImg = loadImage("snow2.jpg");
  boy= loadImage("boy1.png");
  snowMusic=loadSound("JoyMusic.mp3");
}
function setup() {
  createCanvas(800,400);
  snowMusic.loop();
  engine = Engine.create();
  world = engine.world;
  edges=createEdgeSprites();
  
  boy1=createSprite(400, 360);
  boy1.addImage(boy);
  boy1.scale=0.2;
 
}

function draw() {
  background(backgroundImg);  
  boy1.collide(edges);
  boy1.y+=5;
  drawSprites();
  Engine.update(engine);
  if(frameCount%20===0){
  snow1.push(new Snow(random(100, 800), 10, 10));
  }
  for (var j=0; j<snow1.length; j++){
     
     snow1[j].display();
   
     }
 
  
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    boy1.y-=40;
  }
  if(keyCode === LEFT_ARROW){
    boy1.x-=40;
  }
  if(keyCode === RIGHT_ARROW){
    boy1.x+=40;
  }
}