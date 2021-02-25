var gameState="SERVE";
var ball,paddle;
var edges;
var brick,brickGroup;
var flag=1;
function setup() {
  createCanvas(1200,600);
  edges=createEdgeSprites();
  flag=1;
  ball=createSprite(400,530,20,20);
  ball.velocityX=0;
    ball.velocityY=0;
  paddle=createSprite(400,580,100,20);
  brickGroup=new Group();

  for(i=150;i<1050;i=i+50){
   
      brick=createSprite(i,50,40,10);
    brickGroup.add(brick)
  }
  for(i=250;i<950;i=i+50){
    brick=createSprite(i,100,40,10);
    brickGroup.add(brick)
  }
  for(i=350;i<850;i=i+50){
    brick=createSprite(i,150,40,10);
    brickGroup.add(brick)
  }
  for(i=450;i<750;i=i+50){
    brick=createSprite(i,200,40,10);
    brickGroup.add(brick)
  }
  for(i=550;i<650;i=i+50){
    brick=createSprite(i,250,40,10);
    brickGroup.add(brick)
  }
  brick=createSprite(575,300,40,10);
  brickGroup.add(brick);
}
function draw() {
  background(0); 
  text(mouseX+","+mouseY,mouseX,mouseY);
   
   
  
   if(keyDown("space")){
     gameState="PLAY"
     
   }
   if(gameState==="PLAY"){
   flag=flag+1;
    paddle.x=World.mouseX;
    ball.bounceOff(edges[0]);
   ball.bounceOff(edges[1]);
   ball.bounceOff(edges[2]);
   ball.bounceOff(edges[3]);
   ball.bounceOff(paddle);
   for(var i=0;i<brickGroup.length;i++){
    if(ball.isTouching(brickGroup.get(i))){
      ball.bounceOff(brickGroup.get(i))
      brickGroup.get(i).destroy();
    }
  }
  if(flag===2){
    ball.velocityX=5;
    ball.velocityY=8;
  }
   }

  drawSprites();
}