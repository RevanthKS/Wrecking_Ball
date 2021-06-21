const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
   createCanvas(800,500);

   engine = Engine.create();
   world = engine.world;

   ground = new Ground(200,400,550,20);

   box1 = new Box(300,350,40,40);
   box2 = new Box(300,310,40,40);
   box3 = new Box(300,270,40,40);
   box4 = new Box(300,230,40,40);
   box5 = new Box(300,190,40,40);

   box6 = new Box(360,350,40,40);
   box7 = new Box(360,310,40,40);
   box8 = new Box(360,270,40,40);
   box9 = new Box(360,230,40,40);
   box10 = new Box(360,190,40,40);
   box11 = new Box(360,150,40,40);
   box12 = new Box(360,110,40,40);

   box13 = new Box(410,350,40,40);
   box14 = new Box(410,310,40,40);
   box15 = new Box(410,270,40,40);
   box16 = new Box(410,230,40,40);
   box17 = new Box(410,190,40,40);
   box18 = new Box(410,150,40,40);
   box19 = new Box(410,110,40,40);
   box20 = new Box(410,70,40,40);

   ball = new Ball(100,150,50,50);

   rope = new Rope(ball.body,{x:300,y:50});
}

function draw(){
   background("yellow");

   Engine.update(engine);

   ground.display();

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
   box11.display();
   box12.display();

   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();

   ball.display();

   rope.display();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-45});
    }
}