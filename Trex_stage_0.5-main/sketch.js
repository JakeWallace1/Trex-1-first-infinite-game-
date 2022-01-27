var ground,groundImage
var trex,trex_running
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage = loadImage("ground2.png")
}

function setup (){
 createCanvas(600,200)
  trex = createSprite(50,160,20,50)
trex.addAnimation("running",trex_running)
trex.scale = 0.5

ground = createSprite(200,180,400,20)
ground.addImage("ground",groundImage)
edges = createEdgeSprites()
}

function draw(){
  background("white")
  console.log(trex.y)
  ground.velocityX = -3.5
  
if(ground.x<0){
ground.x = ground.width/2
}

if(keyDown("space")){
trex.velocityY = -10
}
trex.velocityY = trex.velocityY +0.5
trex.collide(edges[3])
trex.collide(ground)
  drawSprites()
}