let bckgrd;
let base;
function preload() {
//Msc Images//
bckgrd = loadImage("Msc_assets/background.PNG");


}
//test
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220)
  image (bckgrd, 0,0, width, height, 0,0, bckgrd.width, bckgrd.height,CONTAIN);
  
}