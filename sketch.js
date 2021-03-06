const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    g = new Ground();
    p = new Paper();

    b = createSprite(964,520,20,20);
    b.addImage(binImg);
    b.scale = 0.45;

    b1 = new Dustbin(902,505,10,120);
    b2 = new Dustbin(962,565,130,10);
    b3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background(0);
    Engine.update(engine);

    

    
    g.display();
    p.display();
    b1.display();
    b2.display();
    b3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(p.body,p.body.position,{x:74,y:-75});
    }
}
