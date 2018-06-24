var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);

}

function draw() {
  background(0);
  pointLight(0,0,150,200,0,0);
  pointLight(0,200,0,0,200,0);
  rectMode(CENTER);
  
  rotateY(angle);
  angle += 0.01
  ambientMaterial(250);
  
  box(400,80,120);
  
  push();
  
  translate(0,-30,62);
  specularMaterial(250);
  box(400,20,5);
  pop();
  
  push();
  translate(0,-30,-62);
  box(400,20,5);
  pop();
  
  push();
  translate(0,-42,-60);
  box(400,5,10);
  pop();
  
  
  
  
  
  
  
  
}