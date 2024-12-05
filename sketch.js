//lets
let bckgrd;
let baseBase;
let base1;
let base2;
let base3;
let base4;
let base5;
let base6;
let normale;
let borede;
let winke;
let berry;
let black;
let blond;
let curlyBlack;
let drac;
let edgy;
let ginger;
let lightBrown;
let pinkBlonde;
let white;
let faceTrigger = false;
let skinC1 = 300;
let skinC2 = 300;
let objectStroke = 1;
let objectStroke2 = 1;

function preload() {
//Msc Images//
bckgrd = loadImage("Msc_assets/background.PNG");

//hair
berry = loadImage("Hair/Berry.png");
black = loadImage("Hair/Black.png");
blond = loadImage("Hair/Blond.png");
curlyBlack = loadImage("Hair/curlyBlack.png");
drac = loadImage("Hair/Drac.png");
edgy = loadImage("Hair/edgy.png");
ginger = loadImage("Hair/Ginger.png");
lightBrown = loadImage("Hair/lightBrown.png");
pinkBlonde = loadImage("Hair/pinkBlonde.png");
white = loadImage("Hair/White.png");



//expressions
normale = loadImage("expressions/normale.PNG");
borede = loadImage("expressions/borede.PNG");
normale = loadImage("expressions/normale.PNG");

//bases
baseBase = loadImage("base/basebase.PNG");
base1 = loadImage("base/base1.PNG");
base2 = loadImage("base/base2.PNG");
base3 = loadImage("base/base3.PNG");
base4 = loadImage("base/base4.PNG");
base5 = loadImage("base/base5.PNG");
base6 = loadImage("base/base6.PNG");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220)
  image(bckgrd, 0,0, width, height, 0,0, bckgrd.width, bckgrd.height,CONTAIN);
  image(baseBase, 0, 130, 328, 472);
  nemoNemo();
  highlight();
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

function keyPressed() {
  if (mouseX < 300 && mouseX > 100) {
    if (mouseY < 150 && mouseY > 100) {
      if (keyCode == LEFT_ARROW) {
        skinC1 = skinC1 - 5;
      } else if (keyCode == RIGHT_ARROW) {
        skinC1 = skinC1 + 5;
      }
    } else if (mouseY < 350 && mouseY > 300) {
      if (keyCode == LEFT_ARROW) {
        skinC2 = skinC2 - 5;
      } else if (keyCode == RIGHT_ARROW) {
        skinC2 = skinC2 + 5;
      }
    }
  }
}

function highlight() {
  if (mouseX < 300 && mouseX > 100) {
    if (mouseY < 150 && mouseY > 100) {
      objectStroke = 5;
    } else if (mouseY < 350 && mouseY > 300) {
      objectStroke2 = 5;
    } else {
      objectStroke = 1;
      objectStroke2 = 1;
    }
  } else {
    objectStroke = 1;
    objectStroke2 = 1;
  }
}
