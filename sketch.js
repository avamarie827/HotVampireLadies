//Variables//
let bckgrd;

function preload() {

//Msc Images//
bckgrd = loadImage("/Msc_assets/background.PNG");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  bckgrd(10,10,10,10);

}