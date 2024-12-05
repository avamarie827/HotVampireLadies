//Variables//
let bckgrd;
function preload() {
//Msc Images//
bckgrd = loadImage("Msc_assets/background.PNG");

function preload() {

//bases
base1 = loadImage("Msc_Assets/base/base1.PNG")
base2 = loadImage("Msc_Assets/base/base2.PNG")
base3 = loadImage("Msc_Assets/base/base3.PNG")
base4 = loadImage("Msc_Assets/base/base4.PNG")
base5 = loadImage("Msc_Assets/base/base5.PNG")
base6 = loadImage("Msc_Assets/base/base6.PNG")

//Msc Images//
bckgrd = loadImage("/Msc_assets/background.PNG");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220)
  image (bckgrd, 0,0, width, height, 0,0, bckgrd.width, bckgrd.height,CONTAIN);
}