//lets
let bckgrd;
let baseBase;
let base1;
let base2;
let base3;
let base4;
let base5;
let base6;
let faceTrigger = false;

function preload() {
//Msc Images//
bckgrd = loadImage("Msc_assets/background.PNG");

//bases
baseBase = loadImage("base/basebase.PNG")
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
  image(bckgrd, 0,0, width, height, 0,0, bckgrd.width, bckgrd.height,CONTAIN);
  image(baseBase, 0, 130, 328, 472);
  nemoNemo();
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

//boxes
function nemoNemo() {
  stroke("#c20059");
  strokeWeight(6);
  fill("#d01f6b");
  rect(358, 458, 210, 50);
  rect(358, 148, 210, 300);
  rect(358, 88, 210, 50);
  rect(358, 28, 210, 50);
  rect(358, 518, 60, 50);
    rect(430, 518, 60, 50);

  
  
}
