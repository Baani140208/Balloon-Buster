var bg,bg1
var bow,bowImage
var rb,gb,bb,pb,rb1,gb1,bb1,pb1,rbg,gbg,bbg,pbg
var arrow,arrowImage
var score=0;

function preload(){
bg1=
  loadImage("background0.png")
bowImage=
  loadImage("bow0.png")
rb1=
  loadImage("red_balloon0.png")
gb1=
  loadImage("green_balloon0.png")
bb1=
  loadImage("blue_balloon0.png")  
pb1=
  loadImage("pink_balloon0.png") 
arrowImage=
  loadImage("arrow0.png")
}


function setup(){
createCanvas(600,600)
  bg=createSprite(0,0,600,600)
  bg.x=bg.width/2
  bg.addImage(bg1)
  bg.scale=3;
  
  bow=createSprite(480,220,20,50)
  bow.addImage(bowImage)
  
  arrow=createSprite(360,100,5,10)
  arrow.x=bow.x
  arrow.y=bow.y
  arrow.addImage(arrowImage)
  arrow.scale=0.3;
  arrow.visible=false
  
  rbg=new Group()
  bbg=new Group()
  gbg=new Group()
  pbg=new Group()
}


function draw(){
  bg.velocityX=-3;
  if(bg.x<0){
  bg.x=bg.width/2
  }
  bow.y=World.mouseY
  if(keyDown("space")){
  arrow.velocityX=-3;
  arrow.x=bow.x
  arrow.y=bow.y
  arrow.addImage(arrowImage)
  arrow.visible=true 
  }
  
  var z=Math.round(random(1,4))
  switch(z){
    case 1:RB()
    break
    case 2:GB()
    break
    case 3:BB()
    break
    case 4:PB()
    break
    default:break
  }
  
  if(arrow.isTouching(rbg)){
  rbg.destroyEach() 
  score=score+2
  }
  if(arrow.isTouching(gbg)){
  gbg.destroyEach() 
  score=score+4
  }
  if(arrow.isTouching(bbg)){
  bbg.destroyEach() 
  score=score+6
  }
  if(arrow.isTouching(pbg)){
  pbg.destroyEach() 
  score=score+8
  }
  drawSprites()
  text("score:"+score,100,50 )
}

function RB(){
if(frameCount%80===0)  {
rb=createSprite (0,200,10,10)
rb.y=random(60,350)
rb.velocityX=4;
rb.lifetime=300;
rb.addImage(rb1)
rb.scale=0.1;
rbg.add(rb)
}

}

function GB(){
if(frameCount%80===0)  {
gb=createSprite (0,200,10,10)
gb.y=random(60,350)
gb.velocityX=4;
gb.lifetime=300;
gb.addImage(gb1)
gb.scale=0.1;
gbg.add(gb)  
}

}

function BB(){
if(frameCount%80===0)  {
bb=createSprite (0,200,10,10)
bb.y=random(60,350)
bb.velocityX=4;
bb.lifetime=300;
bb.addImage(bb1)
bb.scale=0.1;
bbg.add(bb)  
}

}

function PB(){
if(frameCount%80===0)  {
pb=createSprite (0,200,10,10)
pb.y=random(60,350)
pb.velocityX=4;
pb.lifetime=300;
pb.addImage(pb1)
pb.scale=1.1;
pbg.add(pb)  
}

}

