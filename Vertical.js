var BallY = 0;
var ballSpeed = 10;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  ellipse(50, BallY, 30);

  BallY = BallY + ballSpeed;
  
  if (BallY > height) {
    ballSpeed = -ballSpeed;
  }
  
  if (BallY < 0) {
    ballSpeed = -ballSpeed;
  }
}
