var ballX = 0;
var ballSpeed = 10;

var ballX2 = 0;
var ballSpeed2 = 10;

var ballX3 = 0;
var ballSpeed3 = 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  ellipse(ballX, 100, 50);
  ellipse(ballX2, 200, 50);
  ellipse(ballX3, 300, 50);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
  ballX3 = ballX3 + ballSpeed3;
  
  if (ballX > width) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballX == 0) {
    ballSpeed = -ballSpeed;
  }
 
  if (ballX2 > width) {
    ballSpeed2 = -ballSpeed2;
  }
  
  if (ballX2 == 0) {
    ballSpeed2 = -ballSpeed2;
  }
  
  if (ballX3 > width) {
    ballSpeed3 = -ballSpeed3;
  }
  
  if (ballX3 == 0) {
    ballSpeed3 = -ballSpeed3;
  }
}
