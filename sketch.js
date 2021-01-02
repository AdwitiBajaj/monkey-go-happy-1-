var ground;
var monkey , monkey_running;
var score;
var survivaltime = 0;
var ObstaclesGroup;
var foodGroup;
var obstacles,obstaclesImage;
var bannana;
var Play,END;
var food;
var obstacles;
var obstaclesGroup;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bannanaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  
  
  
 
}



function setup() {
  
  gameState = Play;
  END = 0;
  
  obstaclesGroup = new Group();
  foodGroup = new Group();
  
  createCanvas(600,500,20,10);
  
  monkey = createSprite(70,500,50,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(250,500,1000,20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  obstaclesGroup = new Group();
  
  
  
}


function draw() {

  background("white");
  
  if(gameState===Play){
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")) {
monkey.velocityY = -10;    
  }
  monkey.velocityY = monkey.velocityY  + 0.8;
  monkey.collide(ground);
  
  score= Math.round(frameCount/3);
  survivalTime = Math.ceil(frameRate);
  ground.velocityX = - (5+2+score/100);
  
  
  if(monkey.isTouching(foodGroup)){
foodGroup.destroyEach();
  }

if(monkey.isTouching(obstaclesGroup)){
  gameState = END;
}
  }
    else if(gameState===END){
ground.velocityX = 0;
obstaclesGroup.setLifeTimeEach(-1);
      
// monkey.changeAnimation("monkey_running",end);
    }
  function food(){
if(frameCount%50===0){
      banana = createSprite(200,500,20,20);
  banana.addImage(bannanaImage);
  banana.scale = 0.1;
  banana.velocityX = -(5+2+ score/100);
  banana.y = Math.round(random(120,200));
  foodGroup.add(banana);
 
  
 }
      }

function Obstacles(){
if(frameCount%200===0){
obstacles = createSprite(250,450,20,20);
  obstacles.addImage(obstacleImage);
  obstacles.scale = 0.2;
  obstaclesGroup.add(obstacles);
  obstacles.velocityX = -10;
 // obstacles.debug = true;
  
  
}
}


stroke("white");
  textSize(20);
  fill("white");
  text("score:  "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  food();
  Obstacles();
    
  drawSprites();


  }
  
      