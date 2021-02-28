var level1, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, backgroundIMG
var player, playerIMG, fire, fireIMG, gameState, firegroup
var level2, obstacle6, obstacle7, obstacle8, obstacleIMG;
var trap, trap2, trap3, trap4, trap5, trapIMG;
var badguy, badguyIMG, badguy2, badguy2IMG;
var youLose, youLoseIMG,youWin, youWinIMG;
var lava1, lava2, lavaIMG;
function preload(){
  backgroundIMG = loadImage("images/bg.jpg");
  playerIMG = loadAnimation("images/anim1.png","images/anim2.png","images/anim3.png","images/anim4.png","images/anim5.png","images/anim6.png","images/anim7.png","images/anim8.png" );
  fireIMG = loadAnimation("images/fire1.png", "images/fire2.png", "images/fire3.png");
  obstacleIMG = loadImage("images/obstacle.png");
  trapIMG = loadImage("images/spike.png");
  badguyIMG = loadImage("images/badguy3.png");
  badguy2IMG = loadImage("images/badguy2.png");
  badguy3IMG = loadImage("images/badguy4.png");
  badguy4IMG = loadImage("images/badguy1.png");
  youLoseIMG = loadImage("images/losegame.png");
  lavaIMG = loadImage("images/lava.png")
}

function setup() {
  createCanvas(1200,800);
  gameState = "start"
  level1 = createSprite(400, 200, 1200, 20);
  
  firegroup = new Group();
  for(var i=255; i<800; i+=50){
    fire = createSprite(i, 172);
  fire.addAnimation("label", fireIMG);
  fire.scale = 0.25;
  fire.setCollider("circle", 0, 0, 50);
  //for(var i = 0; i<11; i++){
    firegroup.add(fire);
  //}
  }
 
  
  
  obstacle1 = createSprite(200, 175, 50, 50);
  //obstacle1.addImage(obstacleIMG);
  //obstacle1.scale = 0.25;
  
  obstacle2 = createSprite(350, 150, 50, 100);
  obstacle3 = createSprite(500, 165, 50, 75);
  obstacle4 = createSprite(650, 145, 50, 125);
  obstacle5 = createSprite(800, 175, 50, 50);
  level2 = createSprite(700, 400, 1000, 20);
  obstacle6 = createSprite(800, 375, 50, 50);
  obstacle7 = createSprite(650, 375, 50, 50);
  obstacle8 = createSprite(500, 375, 50, 50);
  level3 = createSprite(400, 600, 1200, 20);
  level4 = createSprite(700, 790, 1500, 20);
  player = createSprite(50,125);
  player.addAnimation("running", playerIMG);
  player.scale = 0.35;
  player.setCollider("rectangle", 0, 0, 50, 170);
  trap = createSprite(875,385)
  trap.addImage(trapIMG);
  trap.scale = 0.16;
  edges = createEdgeSprites();
  trap.velocityX = random(-5, 5);
  trap2 = createSprite(550,385)
  trap2.addImage(trapIMG);
  trap2.scale = 0.16;
  trap2.velocityX = random(-6, 6);
  trap3 = createSprite(250, 385);
  trap3.addImage(trapIMG);
  trap3.scale = 0.16;
  trap4 = createSprite(50, 585);
  trap4.addImage(trapIMG);
  trap4.scale = 0.16;
  trap5 = createSprite(870, 585);
  trap5.addImage(trapIMG);
  trap5.scale = 0.16;
  trap5.velocityX = random(-3,3);
  
  badguy = createSprite(730, 345);
  badguy.addImage(badguyIMG);
  badguy.scale = 0.38;

  badguy2 = createSprite(400, 355);
  badguy2.addImage(badguy2IMG);
  badguy2.scale = 0.56;
  badguy2.mirrorX(-1);
  badguy2.velocityY = 2;
  //badguy2.debug = true;
  badguy2.setCollider("rectangle", 0, 0, 50, 120);

  badguy3 = createSprite(500, 545);
  badguy3.addImage(badguy3IMG);
  badguy3.scale = 0.30;
  badguy3.velocityY = -2;

  lava1 = createSprite(300,570);
  lava1.addImage(lavaIMG);
  lava1.scale = 0.3;

  lava2 = createSprite(675,570);
  lava2.addImage(lavaIMG);
  lava2.scale = 0.3;

}

function draw() {
  background(backgroundIMG);  
  
  if(gameState === "start"){
    player.debug = true;
    fire.debug = true;
  if(keyIsDown(UP_ARROW)){
    player.velocityY = -8.75;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.x +=5;
    player.mirrorX(1);
  }
  if(keyIsDown(LEFT_ARROW)){
    player.x += -5;
    player.mirrorX(-1);
  }
  if(firegroup.isTouching(player)){
    gameState = "over";
    console.log(gameState);
  }
  if(trap.isTouching(player)){
    gameState = "over";
    trap.velocityX = 0;
  }
  
  if(trap2.isTouching(player)){
    gameState = "over";
    trap2.velocityX = 0;
  }

  if(trap3.isTouching(player)){
    gameState = "over";
    
  }

  if(trap4.isTouching(player)){
    gameState = "over";
    
  }

  if(trap5.isTouching(player)){
    gameState = "over";
    trap5.velocityX = 0;
    
  }

  if(badguy.isTouching(player)){
    gameState = "over";
    
  }

  if(badguy2.isTouching(player)){
    gameState = "over";
    badguy2.velocityY = 0;
  }

  if(badguy3.isTouching(player)){
    gameState = "over";
    badguy3.velocityY = 0;
  }

  player.velocityY += 0.8;
  }

  if(gameState === "over"){
    youLose = createSprite(550,390)
    youLose.addImage(youLoseIMG);
    youLose.scale = 4;
    
  }
  
  
  player.collide(level1);
  player.collide(level2);
  player.collide(level3);
  player.collide(level4);
  player.collide(obstacle1);
  player.collide(obstacle2);
  player.collide(obstacle3);
  player.collide(obstacle4);
  player.collide(obstacle5);
  player.collide(obstacle6);
  player.collide(obstacle7);
  player.collide(obstacle8);
  player.collide(edges);
  trap.bounceOff(edges);
  trap.bounceOff(obstacle6);
  trap2.bounceOff(edges);
  trap2.bounceOff(obstacle7);
  trap2.bounceOff(obstacle8);
  trap5.bounceOff(lava2);
  trap5.bounceOff(edges);
  badguy2.bounceOff(level1);
  badguy2.bounceOff(level2);
  badguy3.bounceOff(level2);
  badguy3.bounceOff(level3);

 

  drawSprites();
  imageMode(CENTER);
  image(obstacleIMG, 200, 175, 50, 50);
  image(obstacleIMG, 350, 150, 50, 100);
  image(obstacleIMG, 500, 160, 50, 70);
  image(obstacleIMG, 650, 145, 50, 125);
  image(obstacleIMG, 800, 175, 50, 50);
  image(obstacleIMG, 400, 200, 1200, 20);
  image(obstacleIMG, 700, 400, 1000, 20);
  image(obstacleIMG, 400, 600, 1200, 20);
  image(obstacleIMG, 700, 790, 1500, 20);
  image(obstacleIMG, 800, 375, 50, 50);
  image(obstacleIMG, 650, 375, 50, 50);
  image(obstacleIMG, 500, 375, 50, 50);

  fill("red");
  text(mouseX+"  "+mouseY, 50, 700);
}