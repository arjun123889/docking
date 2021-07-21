var iss,spacecraft,bg;
var issImg, spacecraftImg1, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var hasDocked = false;

function preload(){
  bg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  spacecraftImg1 = loadImage("spacecraft1.png");
  spacecraftImg2 = loadImage("spacecraft2.png");
  spacecraftImg3 = loadImage("spacecraft3.png");
  spacecraftImg4 = loadImage("spacecraft4.png");

}


function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285, 240, 50, 50);
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale = 0.15;
  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.5

}


function draw() {
  background(bg);  
  if(!hasDocked) {
    spacecraft.x += random(-1,1)

  }
  if(keyDown("UP_ARROW")){
    spacecraft.y -= 2;
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.x -= 2;
    spacecraft.addImage(spacecraftImg4);
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.x += 2;
    spacecraft.addImage(spacecraftImg3);
  }
  if(keyDown("DOWN_ARROW")){
    //spacecraft.y += 2;
    spacecraft.addImage(spacecraftImg2);
  }
  if(spacecraft.y <= (iss.y + 70) && spacecraft.x <= (iss.x - 10)){
    hasDocked = true;
    textSize(20);
    fill("green");
    text("Docking Successful!", 200,300);
  }
  drawSprites();
}