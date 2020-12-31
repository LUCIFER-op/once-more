var thickness, wall;
var bullet, speed, weight;


function setup ()
{
  createCanvas(1600, 400);
speed=random (223,321);
weight=random(30, 52);
thickness=random(22,83);

bullet = createSprite(50, 200, 50, 5)
bullet .velocityX= speed;
bullet.shapeColor = (255);


wall = createSprite(1200, 200, thickness, height/2)
wall.shapeColor = color(80, 80, 80);

}

function draw()
{
background("white");

if(wall.x- bullet.x<(bullet.width+wall.width)/2)
{
car.velocityX=0;
var deformation =0.5*weight * speed * speed/22509;
}

if (deformation>180)
{
car.shapeColor = (255, 0, 0)
}

if(deformation<180 && deformation>100)
{
car.shapeColor=color(230, 230, 0)
}

if (deformation<100)
{
car.shapeColor=color(0, 255, 0)
}
if (hasCollided(bullet, wall)) 
{
   bullet.velocityX=0; 
}
drawSprites();
}

function hasCollided(lbullet, lwall)
{
bulletRightEdge = lbullet.x + lbullet.width
wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false 

if (hasCollided(bullet, wall))
{
bullet.velocityX=0;
var damage=0.5*weight*spee*speed/(thickness*thickness*thickness);
}

if(damge>10)
{
wall.shapeColor = (255, 0, 0);
}

if(damage<10)
{
  wall.shapeColor = (0, 255, 0);
}

}
