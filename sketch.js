const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,320,70,70);
    box6 = new Box(700,249.5,70,70);
    box7 = new Box(920,249.5,70,70);
    box8 = new Box(700,169.5,70,70);
    box9 = new Box(920,169.5,70,70);
    box10 = new Box(810,249.5,70,70);

    ball = new Ball(200,200,80,80);

    slingshot = new SlingShot(ball.body,{x:500, y:50});
}

function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();



    ground.display();

    ball.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


/*function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}*/