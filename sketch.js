//lets
let bckgrd;

//base//
let baseBase;
let base1;
let base2;
let base3;
let base4;
let base5;
let base6;

//expressions//
let normale;
let borede;
let winke;

//hair//
let Berry;
let berryPixel;
let Black;
let blackPixel;
let Blond;
let blondePixel;
let curlyBlack;
let curlyPixel;
let Drac;
let dracPixel;
let edgy;
let edgyPixel;
let Ginger;
let gingerPixel;
let lightBrown;
let lightBrownpixel;
let pinkBlonde;
let pinkBlondepixel;
let White;
let whitePixel;

//msc//
let faceTrigger = false;
let skinC1 = 540;
let skinC2 = 300;
let objectStroke = 1;
let objectStroke2 = 1;
let skinTone = 'skin';
let circle1;
let circle2;
let circle3;
let circle4;
let circle5;
let circle6;
let displayImg;
let empty;



function preload() {
//Msc Images//
bckgrd = loadImage("Msc_Asset/Background.PNG");
empty = loadImage("Msc_Asset/empty.png");

//hair-normal//
Berry = loadImage("hair/Berry.png");
Blond = loadImage("hair/Blond.png");
curlyBlack = loadImage("hair/curlyBlack.png");
Drac = loadImage("hair/Drac.png");
edgy = loadImage("hair/edgy.png");
Ginger = loadImage("hair/Ginger.png");
lightBrown = loadImage("hair/lightBrown.png");
pinkBlonde = loadImage("hair/pinkBlonde.png");
White = loadImage("hair/White.png");
Black = loadImage("hair/Black.png");

//hair-pixel//
berryPixel = loadImage("hair/berryPixel.png");
  blondePixel = loadImage("hair/blondePixel.png");
  curlyPixel = loadImage("hair/curlyPixel.png");
  dracPixel = loadImage("hair/dracPixel.png");
  edgyPixel = loadImage("hair/edgyPixel.png");
  gingerPixel = loadImage("hair/gingerPixel.png");
  lightBrownpixel = loadImage("hair/lightBrownpixel.png");
  pinkBlondePixel = loadImage("hair/pinkBlondePixel.png");
  whitePixel = loadImage("hair/whitePixel.png");
  blackPixel = loadImage("hair/blackPixel.png");

//expressions//
normale = loadImage("expressions/normale.PNG");
borede = loadImage("expressions/borede.PNG");

//bases//
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

  displayImg = empty;
}

function draw() {
  background(220);
  if (bckgrd) {
    image(bckgrd, 0, 0, width, height);
  }
  if (baseBase) {
    image(baseBase, 0, 130, 328, 472);
  }
  nemoNemo();
  row1();
  highlight();

 //drawing-pixel-ver hair//
 image(berryPixel, 358, 165, 45, 45);
 image(blondePixel, 398, 165, 45, 45);
 image(curlyPixel, 440, 165, 45, 45);
 image(dracPixel, 478, 165, 50, 50);
 image(edgyPixel, 520, 165, 45, 45);
 image(gingerPixel, 358, 215, 45, 45);
 image(lightBrownpixel, 398, 215, 45, 45);
 image(pinkBlondePixel, 440, 215, 45, 45);
 image(whitePixel, 478, 215, 45, 45);
 image(blackPixel, 520, 215, 45, 45);

  //hair-clicky//
image(displayImg, 70,132, 270, 400); 
}

//button shit
function mousePressed() {
  if(mouseX > 300 && mouseX < 350) {
    if(mouseY > 50 && mouseY < 100) {
      faceTrigger = true;
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

function row1() {
  row1Update();
  stroke(0);
  strokeWeight(objectStroke);
  //ellipse(circle1, 55, 30);
 // ellipse(circle2, 55, 30);
  //ellipse(circle3, 55, 30);
  // ellipse(circle4, 55, 30);
  // ellipse(circle5, 55, 30);
  // ellipse(circle6, 55, 30);

  // strokeWeight(1);

  if(circle1 >= 380 && circle1 <= 580) {
    ellipse(circle1, 55, 30);
  }
  
  if(circle2 >= 380 && circle2 <= 580) {
    ellipse(circle2, 55, 30);
  }
  
  if(circle3 >= 380 && circle3 <= 580) {
    ellipse(circle3, 55, 30);
  }
  
  if(circle4 >= 380 && circle4 <= 580) {
    ellipse(circle4, 55, 30);
  }

  if(circle5 >= 380 && circle5 <= 580) {
    ellipse(circle5, 55, 30);
  }
  
  if(circle6 >= 380 && circle6 <= 580) {
    ellipse(circle6, 55, 30);
  }
}

function row1Update(){
  circle1 = skinC1;
  circle2 = skinC1 - 50;
  circle3 = skinC1 - 100;
  circle4 = skinC1 - 150;
  circle5 = skinC1 - 200;
  circle6 = skinC1 - 250;
}

function keyPressed() {
  console.log(skinC1);
  if (mouseX < 550 && mouseX > 400) {
    if (mouseY < 70 && mouseY > 20) {
      if (keyCode == LEFT_ARROW) {
        skinC1 = skinC1 - 5;
        if(skinC1 <= 545) {
          skinC1 = 545;
        } 
        
        } else if (keyCode == RIGHT_ARROW) {
        skinC1 = skinC1 + 5;
        if(skinC1 >= 640) {
          skinC1 = 640;
        }
        
        
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
  if (mouseX < 550 && mouseX > 400) {
    if (mouseY < 70 && mouseY > 20) {
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

  function mousePressed() {
    if (mouseX >= 358 && mouseX <= 403 && mouseY >= 165 && mouseY <= 210) {
      displayImg = Berry;
    } else if (mouseX >= 398 && mouseX <= 443 && mouseY >= 165 && mouseY <= 210) {
      displayImg = Blond;
    } else if (mouseX >= 440 && mouseX <= 485 && mouseY >= 165 && mouseY <= 210) {
      displayImg = curlyBlack;
    } else if (mouseX >= 478 && mouseX <= 528 && mouseY >= 165 && mouseY <= 215) {
      displayImg = Drac;
    } else if (mouseX >= 520 && mouseX <= 565 && mouseY >= 165 && mouseY <= 210) {
      displayImg = edgy;
    } else if (mouseX >= 358 && mouseX <= 403 && mouseY >= 215 && mouseY <= 260) {
      displayImg = Ginger;
    } else if (mouseX >= 398 && mouseX <= 443 && mouseY >= 215 && mouseY <= 260) {
      displayImg = lightBrown;
    }
    else if (mouseX >= 440 && mouseX <= 485 && mouseY >= 215 && mouseY <= 260) {
      displayImg = pinkBlonde;
    } else if (mouseX >= 478 && mouseX <= 528 && mouseY >= 215 && mouseY <= 260) {
      displayImg = White;
    } else if (mouseX >= 520 && mouseX <= 565 && mouseY >= 215 && mouseY <= 260) {
      displayImg = Black;
    }
}
