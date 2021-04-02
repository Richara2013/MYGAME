var gunImage, Gun, backgroundImage, backSprite;
var Bullet, bulletImage;
function preload(){
  gunImage= loadImage("Images/gun.png");
  backgroundImage= loadImage("Images/Background.jpg");
  bulletImage= loadImage("Images/bullet.png");

}


function setup() {
  createCanvas(800,800);
  backSprite= createSprite(400,400);
  backSprite.addImage(backgroundImage);
  Gun= createSprite(700,400);
  Gun.addImage(gunImage);
  Gun.scale= 0.2;
  backSprite.scale= 1.7;
}

function draw() {
  background(255,255,255);  
  Gun.y= mouseY;
  backSprite.velocityX= -2;
  if (backSprite.x<0){
    backSprite.x= backSprite.width/2;
  }
  if(keyDown("space")){
    TriggerBullet();
  }
  drawSprites();

}

function TriggerBullet(){
  Bullet= createSprite(700,400);
  Bullet.addImage(bulletImage);
  Bullet.y= Gun.y;
  Bullet.velocityX= -4;
  Bullet.scale= 0.1;
}