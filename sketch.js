//lets
let bckgrd;
let base;
let faceTrigger = false;

function preload() {
//Msc Images//
bckgrd = loadImage("Msc_assets/background.PNG");

//bases

base1 = loadImages("base/base1.PNG")
base2 = loadImages("base/base2.PNG")
base3 = loadImages("base/base3.PNG")
base4 = loadImages("base/base4.PNG")
base5 = loadImages("base/base5.PNG")
base6 = loadImages("base/base6.PNG")

}
//test
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220)
  image (bckgrd, 0,0, width, height, 0,0, bckgrd.width, bckgrd.height,CONTAIN);
  
}

//button shit
function mousePressed() {
  if(mouseX > 300 && mouseX < 350) {
    if(mouseY > 50 && mouseY < 100) {
      faceTrigger = true;
      // add switch statement or if for each design
    }
  }
}