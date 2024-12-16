//lets
let bckgrd;
let download;
let eraser;

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
let heartEyes;
let straight;
let orange;
let pink;
let purple;
let smirk;
let tongue;
let miniHeart;
let miniKiss;
let miniLeft;
let miniOpen;
let miniRight;
let miniSmile;
let miniSmirk;
let miniStare;
let miniTongue;
let miniWink;


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

//tops//
let top1
let top1Pixel
let top2
let top2Pixel
let top3
let top3Pixel
let top4
let top4Pixel
let top5
let top5Pixel
let top6
let top6Pixel
let top7
let top7Pixel
let top8
let top8Pixel
let top9
let top9Pixel
let top10
let top10Pixel

//bottoms
let blackBottoms;
let bloomers;
let dress;
let longSkirt;
let miniSkirt;
let ruffle;
let street;
let thighHighs;
let thong;

//accessories
let bat;
let chainBag;
let chains;
let corset;
let pearls;
let pearlSmall;
let necklace;

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
let displayImg2;
let displayImg3;
let displayImg4;
let displayImg5;
let displayImg6;
let displayImg7;
let displayImg8;
let displayImg9;
let empty;

//fullbody//
let fullbod1;
let fullbod2;
let fullbod3;
let fullbod4;
let fullbod5;
let fullbod1Pixel;
let fullbod2Pixel;
let fullbod3Pixel;
let fullbod4Pixel;
let fullbod5Pixel;


function preload() {
//Msc Images//
bckgrd = loadImage("Msc_Asset/Background.PNG");
empty = loadImage("Msc_Asset/empty.png");
download = loadImage("Msc_Asset/download.png");
eraser = loadImage("Msc_Asset/eraser.png");

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
winke = loadImage("expressions/winky.PNG");
heartEyes = loadImage("expressions/hearteyes.PNG");
straight = loadImage("expressions/straight.PNG");
orange = loadImage("expressions/orange.PNG");
pink = loadImage("expressions/pink.PNG");
purple = loadImage("expressions/purple.PNG");
smirk = loadImage("expressions/smirk.PNG");
tongue = loadImage("expressions/tongue.PNG");
miniHeart = loadImage("expressions/miniheart.PNG");
miniKiss = loadImage("expressions/minikiss.PNG");
miniLeft = loadImage("expressions/minileft.PNG");
miniOpen = loadImage("expressions/miniopen.PNG");
miniRight = loadImage("expressions/miniright.PNG");
miniSmile = loadImage("expressions/minismile.PNG");
miniSmirk = loadImage("expressions/minismirk.PNG");
miniStare = loadImage("expressions/ministare.PNG");
miniTongue = loadImage("expressions/minitongue.PNG");
miniWink = loadImage("expressions/miniwink.PNG");


//fullbody//
 fullbod1 = loadImage("fullbody/fullbod1.png");
 fullbod2 = loadImage("fullbody/fullbod2.png");
 fullbod3 = loadImage("fullbody/fullbod3.png");
 fullbod4 = loadImage("fullbody/fullbod4.png");
 fullbod5 = loadImage("fullbody/fullbod5.png");
 fullbod1Pixel = loadImage("fullbody/fullbod1Pixel.png");
 fullbod2Pixel = loadImage("fullbody/fullbod2Pixel.png");
 fullbod3Pixel = loadImage("fullbody/fullbod3Pixel.png");
 fullbod4Pixel = loadImage("fullbody/fullbod4Pixel.png");
 fullbod5Pixel = loadImage("fullbody/fullbod5Pixel.png");

//bases//
baseBase = loadImage("base/basebase.PNG");
base1 = loadImage("base/base1.PNG");
base2 = loadImage("base/base2.PNG");
base3 = loadImage("base/base3.PNG");
base4 = loadImage("base/base4.PNG");
base5 = loadImage("base/base5.PNG");
base6 = loadImage("base/base6.PNG");

//bottoms
blackBottoms = loadImage("bottoms/black.PNG");
bloomers = loadImage("bottoms/bloomers.PNG");
dress = loadImage("bottoms/dress.PNG");
longSkirt = loadImage("bottoms/longskirt.PNG");
miniSkirt = loadImage("bottoms/miniskirt.PNG");
ruffle = loadImage("bottoms/ruffle.PNG");
street = loadImage("bottoms/street.PNG");
thighHighs = loadImage("bottoms/thighhighs.PNG");
thong = loadImage("bottoms/thong.PNG");

//accessories
bat = loadImage("accessories/bat.PNG");
chainBag = loadImage("accessories/chainbag.PNG");
chains = loadImage("accessories/chains.PNG");
corset = loadImage("accessories/corset.PNG");
pearls = loadImage("accessories/pearls.PNG");
pearlSmall = loadImage("accessories/pearlssmall.PNG");
necklace = loadImage("accessories/necklace.PNG");

//tops// 
top1 = loadImage("Tops/top1.png");
top1Pixel = loadImage("Tops/top1pixel.png");
top2 = loadImage("Tops/top2.png");
top2Pixel = loadImage("Tops/top2pixel.png");
top3 = loadImage("Tops/top3.png");
top3Pixel = loadImage("Tops/top3pixel.png");
top4 = loadImage("Tops/top4.png");
top4Pixel= loadImage("Tops/top4pixel.png");
top5 = loadImage("Tops/top5.png");
top5Pixel = loadImage("Tops/top5pixel.png");
top6 = loadImage("Tops/top6.png");
top6Pixel = loadImage("Tops/top6pixel.png");
top7 = loadImage("Tops/top7.png");
top7Pixel = loadImage("Tops/top7pixel.png");
top8 = loadImage("Tops/top8.png");
top8Pixel = loadImage("Tops/top8pixel.png");
top9 = loadImage("Tops/top9.png");
top9Pixel = loadImage("Tops/top9pixel.png");
top10 = loadImage("Tops/top10.png");
top10Pixel  = loadImage("Tops/top10pixel.png");

}

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent("sketch-holder")

  displayImg = empty;
  displayImg2 = empty;
  displayImg3 = empty;
  displayImg4 = empty;
  displayImg5 = empty;
  displayImg6 = empty;
  displayImg7 = empty;
  displayImg8 = empty;
  displayImg9 = empty;

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

//eraser and download "buttons"//
image(eraser,362,525,50,40)

if (mouseX >= 362 && mouseX <= 412 && mouseY >= 525 && mouseY <= 565 && mouseIsPressed) {
  displayImg = empty;
  displayImg2 = empty;
  displayImg3 = empty;
  displayImg4 = empty;
  displayImg5 = empty;
  displayImg6 = empty;
  displayImg7 = empty;
  displayImg8 = empty;
  displayImg9 = empty;
}

image(download,440,525,40,40)


 //base clicker
 image(displayImg6, 0, 130, 328, 472)

 //drawing-pixel-ver//
 image(berryPixel, 358, 150, 45, 45);
 image(blondePixel, 398, 150, 45, 45);
 image(curlyPixel, 440, 150, 45, 45);
 image(dracPixel, 478, 150, 50, 50);
 image(edgyPixel, 520, 150, 45, 45);
 image(gingerPixel, 358, 180, 45, 45);
 image(lightBrownpixel, 398, 180, 45, 45);
 image(pinkBlondePixel, 440, 180, 45, 45);
 image(whitePixel, 478, 180, 45, 45);
 image(blackPixel, 520, 180, 45, 45);

 //accessories
image(bat, 358, 400, 150, 150);
image(chainBag, 398, 400, 125, 125);
image(corset, 440, 400, 150, 150);
image(pearlSmall, 375, 300, 300, 300);
image(necklace, 400, 375, 250, 250);


//accessories clicker
image(displayImg2, 0, 130, 328, 472)
image(displayImg9, 0, 130, 328, 472)

//expressions 
image(miniLeft, 350, 90, 150, 150);
image(miniSmile, 350, 110, 150, 150);
image(miniRight, 390, 90, 150, 150);
image(miniTongue, 390, 110, 150, 150);
image(miniWink, 430, 90, 150, 150);
image(miniKiss, 430, 110, 150, 150);
image(miniStare, 470, 90, 150, 150);
image(miniSmirk, 470, 110, 150, 150);
image(miniHeart, 510, 90, 150, 150);
image(miniOpen, 510, 110, 150, 150);

//expressions clicker

image(displayImg7, 0, 130, 328, 472)
image(displayImg8, 0, 130, 328, 472)

  //hair-clicky//
image(displayImg, 70,135, 270, 400); 



//fullbod//
image(fullbod1Pixel,363, 400, 40, 40);
image(fullbod2Pixel,403,400,40,40);
image(fullbod3Pixel,445,400,40,40);
image(fullbod4Pixel,483,400,40,40);
image(fullbod5Pixel,525,400,40,40);

//fullbod clicker//
image(displayImg5,-2 ,110, 372, 525); 

//bottoms
 image(blackBottoms, 340, 300, 60, 60);
 image(bloomers, 380, 300, 60, 60);
 image(dress, 420, 300, 60, 60);
 image(longSkirt, 460, 300, 60, 60);
 image(miniSkirt, 500, 300, 60, 60);
 image(ruffle, 360, 325, 60, 60);
 image(street, 400, 325, 60, 60);
 image(thighHighs, 440, 325, 60, 60);
 image(thong, 480, 325, 60, 60);

 //bottoms
 image(displayImg3, 0, 130, 328, 472)

 //top clicker//
image(displayImg4,-20,116,400,515);

//top pixel//
image(top1Pixel,353, 225, 55, 55);
image(top2Pixel,393,225,60,60);
image(top3Pixel,435,225,60,60);
image(top4Pixel,473,225,60,60);
image(top5Pixel,515,225,60,60);
image(top6Pixel,353,280,60,60);
image(top7Pixel,393,280,50,50);
image(top8Pixel,435,280,60,60);
image(top9Pixel,473,280,60,60);
image(top10Pixel,515,280,50,50);
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

  // strokeWeight(1);
  fill("#1f1618");
  if(circle1 >= 380 && circle1 <= 580) {
    ellipse(circle1, 55, 30);
  }
  fill("#362b2e");
  if(circle2 >= 380 && circle2 <= 580) {
    ellipse(circle2, 55, 30);
  }
  fill("#5f5151");
  if(circle3 >= 380 && circle3 <= 580) {
    ellipse(circle3, 55, 30);
  }
  fill("#6f6662");
  if(circle4 >= 380 && circle4 <= 580) {
    ellipse(circle4, 55, 30);
  }
  fill("#a89993")
  if(circle5 >= 380 && circle5 <= 580) {
    ellipse(circle5, 55, 30);
  }
  fill("#efe8e5");
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
  if (mouseX < 550 && mouseX > 350) {
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
  if (mouseX < 550 && mouseX > 350) {
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

function isMouseInCircle(x, y, r) {
  return dist(mouseX, mouseY, x, y) < r; 
}

  function mousePressed() {

    if (isMouseInCircle(circle1, 55, 30)) {
      displayImg6 = base6;
    } else if (isMouseInCircle(circle2, 55, 30)) {
      displayImg6 = base5;
    } else if (isMouseInCircle(circle3, 55, 30)) {
      displayImg6 = base4;
    } else if (isMouseInCircle(circle4, 55, 30)) {
      displayImg6 = base3;
    } else if (isMouseInCircle(circle5, 55, 30)) {
      displayImg6 = base2;
    } else if (isMouseInCircle(circle6, 55, 30)) {
      displayImg6 = base1;
    }

     //accessories 
     else if (mouseX >= 358 && mouseX <= 403 && mouseY >= 470 && mouseY <= 520) {
      displayImg2 = bat;
    } else if (mouseX >= 398 && mouseX <= 443 && mouseY >= 470 && mouseY <= 520) {
      displayImg2 = chainBag;
    } else if (mouseX >= 440 && mouseX <= 485 && mouseY >= 470 && mouseY <= 520) {
      displayImg2 = corset;
    } else if (mouseX >= 478 && mouseX <= 523 && mouseY >= 470 && mouseY <= 520) {
      displayImg9 = pearls;
    } else if (mouseX >= 520 && mouseX <= 565 && mouseY >= 470 && mouseY <= 520) {
      displayImg9 = chains;
    }

    //expressions
      else if (mouseX >= 358 && mouseX <= 403 && mouseY >= 90 && mouseY <= 110) {
      displayImg7 = normale;
    } else if (mouseX >= 358 && mouseX <= 403 && mouseY >= 110 && mouseY <= 130) {
      displayImg8 = purple;
    }   else if (mouseX >= 398 && mouseX <= 443 && mouseY >= 90 && mouseY <= 110) {
      displayImg7 = borede;
    } else if (mouseX >= 398 && mouseX <= 443 && mouseY >= 110 && mouseY <= 130) {
      displayImg8 = tongue;
    } else if (mouseX >= 440 && mouseX <= 485 && mouseY >= 90 && mouseY <= 110) {
      displayImg7 = winke;
    } else if (mouseX >= 440 && mouseX <= 485 && mouseY >= 110 && mouseY <= 130) {
      displayImg8 = pink;
    } else if (mouseX >= 478 && mouseX <= 523 && mouseY >= 90 && mouseY <= 110) {
      displayImg7 = straight;
    } else if (mouseX >= 478 && mouseX <= 523 && mouseY >= 110 && mouseY <= 130) {
      displayImg8 = smirk;
    } else if (mouseX >= 520 && mouseX <= 565 && mouseY >= 90 && mouseY <= 110) {
      displayImg7 = heartEyes;
    } else if (mouseX >= 520 && mouseX <= 565 && mouseY >= 110 && mouseY <= 130) {
      displayImg8 = orange;
    } 

  
    //hairs
    if (mouseX >= 358 && mouseX <= 403 && mouseY >= 150 && mouseY <= 195) {
      displayImg = Berry;
    } else if (mouseX >= 398 && mouseX <= 443 && mouseY >= 150 && mouseY <= 195) {
      displayImg = Blond;
    } else if (mouseX >= 440 && mouseX <= 485 && mouseY >= 150 && mouseY <= 195) {
      displayImg = curlyBlack;
    } else if (mouseX >= 478 && mouseX <= 528 && mouseY >= 150 && mouseY <= 200) {
      displayImg = Drac;
    } else if (mouseX >= 520 && mouseX <= 565 && mouseY >= 150 && mouseY <= 195) {
      displayImg = edgy;
    } else if (mouseX >= 358 && mouseX <= 403 && mouseY >= 180 && mouseY <= 225) {
      displayImg = Ginger;
    } else if (mouseX >= 398 && mouseX <= 443 && mouseY >= 180 && mouseY <= 225) {
      displayImg = lightBrown;
    } else if (mouseX >= 440 && mouseX <= 485 && mouseY >= 180 && mouseY <= 225) {
      displayImg = pinkBlonde;
    } else if (mouseX >= 478 && mouseX <= 528 && mouseY >= 180 && mouseY <= 225) {
      displayImg = White;
    } else if (mouseX >= 520 && mouseX <= 565 && mouseY >= 180 && mouseY <= 225) {
      displayImg = Black;
    }

//tops and bottoms//
    if (mouseX >= 353 && mouseX <= 413 && mouseY >= 280 && mouseY <= 340) {
      displayImg4 = top6;
    } else if (mouseX >= 353 && mouseX <= 408 && mouseY >= 225 && mouseY <= 280) {
        displayImg4 = top1; 
      } else if (mouseX >= 393 && mouseX <= 453 && mouseY >= 225 && mouseY <= 285) {
        displayImg4 = top2; 
      } else if (mouseX >= 435 && mouseX <= 495 && mouseY >= 225 && mouseY <= 285) {
        displayImg4 = top3; 
      } else if (mouseX >= 473 && mouseX <= 533 && mouseY >= 225 && mouseY <= 285) {
        displayImg4 = top4; 
      } else if (mouseX >= 515 && mouseX <= 575 && mouseY >= 225 && mouseY <= 285) {
        displayImg4 = top5; 
    } else if (mouseX >= 393 && mouseX <= 443 && mouseY >= 280 && mouseY <= 330) {
      displayImg4 = top7;
    } else if (mouseX >= 435 && mouseX <= 495 && mouseY >= 280 && mouseY <= 340) {
      displayImg4 = top8;
    } else if (mouseX >= 473 && mouseX <= 533 && mouseY >= 280 && mouseY <= 340) {
      displayImg4 = top9;
    } else if (mouseX >= 515 && mouseX <= 565 && mouseY >= 280 && mouseY <= 330) {
      displayImg4 = top10;
    } else if (mouseX >= 340 && mouseX <= 400 && mouseY >= 300 && mouseY <= 360) {
      displayImg3 = blackBottoms; 
    } else if (mouseX >= 380 && mouseX <= 440 && mouseY >= 300 && mouseY <= 360) {
      displayImg3 = bloomers;
    } else if (mouseX >= 420 && mouseX <= 480 && mouseY >= 300 && mouseY <= 360) {
      displayImg3 = dress; 
    } else if (mouseX >= 460 && mouseX <= 520 && mouseY >= 300 && mouseY <= 360) {
      displayImg3 = longSkirt; 
    } else if (mouseX >= 500 && mouseX <= 560 && mouseY >= 300 && mouseY <= 360) {
      displayImg3 = miniSkirt;
  } else if (mouseX >= 360 && mouseX <= 420 && mouseY >= 325 && mouseY <= 385) {
    displayImg3 = ruffle;
  } else if (mouseX >= 400 && mouseX <= 460 && mouseY >= 325 && mouseY <= 385) {
    displayImg3 = street; 
  } else if (mouseX >= 440 && mouseX <= 500 && mouseY >= 325 && mouseY <= 385) {
    displayImg3 = thighHighs;
  } else if (mouseX >= 480 && mouseX <= 540 && mouseY >= 325 && mouseY <= 385) {
    displayImg3 = thong; 
  }

//fullbody//
if (mouseX >= 363 && mouseX <= 403 && mouseY >= 400 && mouseY <= 440) {
  displayImg5 = fullbod1;
} else if (mouseX >= 403 && mouseX <= 443 && mouseY >= 400 && mouseY <= 440) {
  displayImg5 = fullbod2;
} else if (mouseX >= 445 && mouseX <= 485 && mouseY >= 400 && mouseY <= 440) {
  displayImg5 = fullbod3;
} else if (mouseX >= 483 && mouseX <= 523 && mouseY >= 400 && mouseY <= 440) {
  displayImg5 = fullbod4;
} else if (mouseX >= 525 && mouseX <= 565 && mouseY >= 400 && mouseY <= 440) {
  displayImg5 = fullbod5;
}

//download//
if (mouseX >= 440 && mouseX <= 480 && mouseY >= 525 && mouseY <= 565 && mouseIsPressed) {  saveCanvas('My_Hot_Vampire', 'png');
  saveCanvas('My_Hot_Vampire', 'png');
}

}
  
