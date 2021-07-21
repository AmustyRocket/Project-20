var background,bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var astro;
var shower
function preload()
{
  bg = loadImage("iss.png");
  sleep  = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym  = loadAnimation("gym1.png","gym2.png",);
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");  
  shower = loadAnimation("bath1.png","bath2.png");
}
function setup() {
  createCanvas(800,800);
  background = createSprite(400,200);
  background.addImage(bg)
  astro = createSprite(300, 230);
  astro.addAnimation("sleeping", sleep);
  astro.scale = 0.1;
}

function draw() {
 
  textSize(20);
  text("Instructions:",600,300);
  text("Up Arrow = brushing",600,240);
  text("Down Arrow = Gym time",600,180);
  text("Left Arrow = eating",600,120);
  text("Right Arrow = Shower", 600,60);
  text("spacebar = Moving",600,20);
  if(keyDown("UP_ARROW"))
  {
    astro.addAnimation("brushing",brush);
    astro.changeAnimation("brushing");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;

  }
  if(keyDown("DOWN_ARROW"))
  {
  astro.addAnimation("gym",gym);
  astro.changeAnimation("gym");
  astro.y = 350;
  astro.velocityX = 0;
  astro.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW"))
  {
    astro.addAnimation("eating",eat);
    astro.changeAnimation("eating");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW"))
  {
    astro.addAnimation("showering",shower);
    astro.changeAnimation("showering");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  if(keyDown("space"))
  {
    astro.addAnimation("moving",move);
    astro.changeAnimation("moving");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  drawSprites();
}