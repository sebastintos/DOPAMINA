var angle = 0;

var vid;
var playing = false;
var dopa;

var button;

function preload() {
  dopa = loadImage(' assets/dopaminico.jpg');
  
}

function setup() {
  createCanvas (600,600,WEBGL);
  
  vid = createVideo('assets/demovid.mov')
  vid.hide();
  vid.size(100,100);
  
   button = createButton('play');
   button.mousePressed(toggleVid); // attach button listener
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    vid.pause();
    button.html('play');
  } else {
    vid.loop();
    button.html('pause');
  }
  playing = !playing;
  
  

}

function draw() {
  
  
  
  
  ambientLight(255);

  rectMode(CENTER);
  push();
  translate(100,0,70);
  rotateY(angle);
  rotateX(angle);
  //ambientMaterial(20,150,200);
  texture(vid);
  
  box(150);
  pop();
  texture(dopa);
  plane(600,600);
  angle += 0.01
  
}