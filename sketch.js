let bckgrd;
function preload() {
//Msc Images//
bckgrd = loadImage("Msc_assets/background.PNG");



}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220)
  image (bckgrd, 0,0, width, height, 0,0, bckgrd.width, bckgrd.height,CONTAIN);
}