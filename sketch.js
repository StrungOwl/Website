//GOAL: Create a fun, playground, interactive artist website.
//Just do whatever you want

let globeScale;

//P5 Canvas
let canvas1;
let drawWhiteBack = false; // draw a white background to clear canvas

//CANVAS BACKGROUND
let showTracer = false;
let cursorHand;
let dots = []; // Array to store Dots objects
let ranFrameC; //random frame color
let cRand; //random color for background
let rectH; //top border
let numShapes;

//FRACTAL 
let showFractalDebug = true;
let maxLen;
let minLen;
let fractalOn = false;
let ranNum;
let ranC, ranSat, ranBright, ranSat2, ranBright2;
let ranCAlpha = 0;
let fractalAlpha = 0; //alpha
//Fractals BladeMaker
let xoff = 0; // Initialize noise offset
let triggerInteraction = false;

//HOME PAGE HEADER
let arrow;
let profileVid; //ai video of me
let container; //main html element
let loadVideo = false;//need to wait for user interaction for video to load
let videoLoaded = false; //video loaded
let sydText; //Header
let h1FontSize, h2FontSize; //Header font sizes
let hamMenu1; //Hamburger menu
let verticleButtonOn = false;
let buttonX, buttonY, buttonSize;
let vidX, vidY, vidSize;

//VR PAGE 
let balloonVid, plantVid; 
let fig1, fig2, fig3; //VR images
let fig1Size, fig2Size, fig3Size; //VR image sizes
let dist1; //figure in flowers distance
let makePhotoBig = false; //make photo big

//BUTTONS ON HOME PAGE
let buttons = [];
let buttonNames = [
  "Intermedia",
  "Installation",
  "Generative Art",
  "VR",
  "Exhibitions",
  "About",
];

//PAGE BOOLEANS
let homePageOn = true;
let interMediaOn = false;
let aboutOn = false;
let exhibitionsOn = false;
let vrOn = true;
let genOn = false;
let installationOn = false;

//ABOUT PAGE
let maxW, maxH; //max width and height of text box
let scrollBarTop, scrollBarBottom, scrollW, scrollH, scrollX, scrollY; //scroll bar top and bottom, 
let showScroll = true;
let aboutPageY;
let num; //offset w and h
let bevel; //bevel for text box
let blueX;
let blueY
let blueW
let blueH
let txtSize
let textSpacing

//HOME BUTTON
let homeIcon;
let c = 0;

function preload() {

  cursorHand = loadImage("Images/cursor.png");

  arrow = loadImage("Images/arrow.png");

  homeIcon = loadImage("Images/homeIcon.png");

  fig1 = loadImage("Images/VR/figure1.png");
  fig2 = loadImage("Images/VR/figure2.png");
  fig3 = loadImage("Images/VR/figure3.png");
  if(vrOn){
    balloonVid = createVideo(["Images/VR/balloonVid.mp4"]);
  }


}

function setup() {
  //CANVAS -------------------
  let w = windowWidth;
  let h = windowHeight;

  canvas1 = createCanvas(w, h); //background canvas
  canvas1.position(0, 0);
  globeScale = min(width, height);

  //BACKGROUND CANVAS------------------
  colorMode(HSB);
  imageMode(CENTER);
  background(255);

  //FRACTAL --------------------
  maxLen = height * 0.2
  minLen = maxLen * 0.2;
  ranNum = random(0.01, 0.7);
  ranC = color(random(360), random(100), random(50, 100), fractalAlpha);
  ranSat = random(100);
  ranBright = random(100);
  ranSat2 = random(100);
  ranBright2 = random(100);


  //BACKGROUND ----------------------------------
  rectH = globeScale * 0.25;
  cRand = color(random(255), random(255), random(255));

  pushHexagons();

  //PROFILE VID/Buttons -------------------------------------
  vidX = globeScale * 0.05;
  vidY = globeScale * 0.03;
  vidSize = globeScale * 0.2;

  homeHeader();

  //ABOUT PAGE -------------------------------------------------------
  num = globeScale * 0.04; //offset of width and height
  bevel = globeScale * 0.01;
  blueX = width / 2;
  blueY = height / 2;
  blueW = width * 0.8;
  blueH = globeScale * 0.8;
  aboutPageY = blueH + num * 1.4; //about page text START POS
  // Calculate the top and bottom of the scroll bar
  scrollY = blueY - blueH * 0.5;
  scrollBarTop = blueY - blueH * 0.35;
  scrollBarBottom = blueY + blueH * 0.38;
  txtSize = globeScale * 0.03;
  textSpacing = globeScale * 0.04;

  //VR PAGE ------------------------------------------------------------------
  fig2Size = globeScale*0.44; 
  fig2.resize(fig2Size, 0);

  //HAM MENU -------------------
  //x, y, size
  //let hamSize = globeScale * 0.05;
  //hamMenu1 = new HamMenu(width * 0.9 - hamSize / 2, height * 0.09, hamSize);
}

function draw() {

  //PROFILE VIDEO ---------------------------
  if (loadVideo) {
    profileVid = createVideo(["Video/AI Profile Pic.mp4"]);
    videoLoaded = true;
    loadVideo = false;
  }

  if (videoLoaded) {
    showVideo();
  }

  //fractalOn = true; 

  //HOME PAGE ------------------------------
  if (homePageOn) {
    rectMode(CORNER);
    if (!fractalOn) {
      background(255, 0.1);
      gradient();
    }

    if (fractalOn) {
      background(50, 0.01);
      fractal(width / 2, height / 1.6, 0, 0);
    }

    homePageInteraction();

    //SHOW TEXT FOR PROFILE VID ---------------------------------------------
    if(!videoLoaded){
      let wordsX = vidX + vidSize/2;
      let wordsY = vidY + vidSize/2;
      let offset = globeScale * 0.01;
      fill(50, 0.2);
      circle(wordsX, wordsY, vidSize*0.9);
      fill(0);
      stroke(0);
      strokeWeight(globeScale * 0.002);
      textLeading(globeScale * 0.034);
      textAlign(CENTER, CENTER);  
      textSize(globeScale * 0.03);
      text("Meet\nthe\nArtist", wordsX - offset, wordsY);
      image(arrow, vidX + vidSize*0.75, wordsY, globeScale * 0.05, globeScale * 0.05);
    }

    if (cursorHand) {
      if (mouseY >= rectH && !fractalOn) {
        noCursor();
        image(cursorHand, mouseX, mouseY, globeScale * 0.2, globeScale * 0.2);
      } else {
        cursor(ARROW);
      }
    }

  } else {
    c += 0.1;
    c = c % 360;
    fractalOn = false;//turn off when home page is off
  }

  // fractalOn = true; 
  // homePageOn = false;


  //INTERMEDIA PAGE -------------------
  if (interMediaOn) {
    homePageOn = false;
    interMediaPage();
  }

  //ABOUT PAGE -------------------
  if (aboutOn) {
    homePageOn = false;
    aboutPage();
    drawWhiteBack = false;
  }

  //EXHIBITIONS PAGE -------------------
  if (exhibitionsOn) {
    homePageOn = false;
    exhibitionsPage();
  }

  //VR PAGE -------------------
  if (vrOn) {
    homePageOn = false;
    vrPage();
  }

  //GEN ART PAGE -------------------
  if (genOn) {
    homePageOn = false;
    genArtPage();
  }

  //Installation PAGE -------------------
  if (installationOn) {
    homePageOn = false;
    installationPage();
  }

  // hamMenu1.displayHam();
  // hamMenu1.interactHam();

  //console.log(loadVideo, videoLoaded);

}

function mousePressed() {

  if (fractalOn) {
    triggerInteraction = !triggerInteraction;
  }

  if(!videoLoaded && mouseX >= vidX && mouseX <= vidX + vidSize && mouseY >= vidY && mouseY <= vidY + vidSize){
    loadVideo = true;
  }

  //VR PAGE -------------------
  if(vrOn){
  if(dist1 < fig1Size/4){
    makePhotoBig = !makePhotoBig;
  }
  }

}


