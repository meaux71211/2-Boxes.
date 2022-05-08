var box1;
function setup() 
{
  createCanvas(400,400);
  box1 = new Box();
}

function draw() 
{
background(51);
box1.display();
box1.set_velocityX(2);
box1.set_velocityY(-2);
}

