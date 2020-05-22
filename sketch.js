var car,wall; 
var speed,weight;

function setup() {
  createCanvas(1600,400);
 car = createSprite(0, 200, 50, 50);
 wall = createSprite(1300,200,60,height/2);
 speed=random(10,50)
 weight=random(500,2000);
car.velocityX = speed;
}
function draw(){
  background("green");
drawSprites();
if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5 * weight *speed*speed/22509;
  if(deformation>180){
    car.shapeColor=color(255,0,0);

  }
  if(deformation<180 && deformation>100){
    car.shapeColor(230,230,0);
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0);
      }
 
}
  
 
}
