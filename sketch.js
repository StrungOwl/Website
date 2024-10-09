//THINGS I'M DOING: FINISH BANNER THEN PAGE CONTENT, make videos smaller
//NEED TO MAKE MOBILE READY 

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
let vrPageContent, galleryItem; //HTML content

//INTERMEDIA PAGE
let interPageContent; //HTML content

//INSTALL PAGE
let installPageContent; //HTML content

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
let vrOn = false;
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
let blueY;
let blueW;
let blueH;
let txtSize;
let textSpacing;
let statement; //the text on page
let disclaimerOn = true; //show disclaimer

//HOME BUTTON
let homeIcon;
let c = 0;
let homeButtonPressed = false;

//BANNER
let bannerTextSize, textLength; //the size and length 
let textX;
let textSpeed; //movement 
let bannerText;//the words on the banner
let startX; //start position of the text
let showBannerOn = false; //show banner


function preload() {


  cursorHand = loadImage("Images/cursor.png");

  arrow = loadImage("Images/arrow.png");

  homeIcon = loadImage("Images/homeIcon.png");

  fig1 = loadImage("Images/VR/figure1.png");
  fig2 = loadImage("Images/VR/figure2.png");
  fig3 = loadImage("Images/VR/figure3.png");

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
  aboutPageY = blueH + num * 1.4; //about page text START POS
  //aboutPageY = blueY; 
  // Calculate the top and bottom of the scroll bar
  scrollY = blueY - blueH * 0.5;
  scrollBarTop = blueY - blueH * 0.35;
  scrollBarBottom = blueY + blueH * 0.38;
  txtSize = globeScale * 0.025;
  textSpacing = globeScale * 0.04;

  //VR PAGE ------------------------------------------------------------------
  fig2Size = globeScale * 0.44;
  fig2.resize(fig2Size, 0);
  vrPageContent = select('#vrPageContent');
  galleryItem = selectAll('.gallery-item'); //need select all

  //INTERMEDIA PAGE ----------------------------------------------------------
  interPageContent = select('#interPageContent');

  //INSTALLATION PAGE 
  installPageContent = select('#installPageContent');

  //HAM MENU -------------------
  //x, y, size
  //let hamSize = globeScale * 0.05;
  //hamMenu1 = new HamMenu(width * 0.9 - hamSize / 2, height * 0.09, hamSize);

  //BANNER --------------------------------------------------------------------
  textSpeed = globeScale * 0.003;
  bannerTextSize = globeScale * 0.05;
  bannerText = "Welcome to my experimental site! Built with HTML, CSS, and p5.js. You may find bugs as I fine-tune it, but please revisit to watch it evolve. Interact and enjoy!"
  textLength = textWidth(bannerText); // Calculate the width of the text
  startX = width*2; 
  textX = startX;

}

function draw() {

  //fractalOn = true; 

  //HOME PAGE ------------------------------
  if (homePageOn) {

    //PROFILE VIDEO ---------------------------
    if (loadVideo) {
      profileVid = createVideo(["Video/AI Profile Pic.mp4"]);
      videoLoaded = true;
      loadVideo = false;
    }

    if (videoLoaded) {
      showVideo();
    }


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
    if (!videoLoaded && !showBannerOn) {
      showTextVid();
    }

     //DISCLAIMER TEXT ----------------------------------------------
     if(disclaimerOn){
      aboutPage(); 
    }


    if (cursorHand) {
      if (mouseY >= rectH && !fractalOn) {
        noCursor();
        image(cursorHand, mouseX, mouseY, globeScale * 0.2, globeScale * 0.2);
      } else {
        cursor(ARROW);
      }
    }

    // //SHOW BANNER ----------------------------------------------------------------
    // if(showBannerOn){
    // showBanner();
    // } else if(textX <= - startX) {
    //   showBannerOn = false; //turn off banner
    // }

  } else {
    c += 0.1;
    c = c % 360;
    fractalOn = false;//turn off when home page is off
    disclaimerOn = false; //turn off disclaimer
  }

  // fractalOn = true; 
  // homePageOn = false;


  //INTERMEDIA PAGE -------------------
  if (interMediaOn) {
    homePageOn = false;
    interMediaPage();
    interPageContent.style('display', 'flex');
  } else {
    interPageContent.style('display', 'none');
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
    vrPageContent.style('display', 'flex');

  } else {
    vrPageContent.style('display', 'none');
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
    installPageContent.style('display', 'flex');
  } else {
    installPageContent.style('display', 'none');
  }

  // hamMenu1.displayHam();
  // hamMenu1.interactHam();

  //console.log(loadVideo, videoLoaded);

  console.log(homePageOn);

}

function mousePressed() {

  if (fractalOn) {
    triggerInteraction = !triggerInteraction;
  }

  if (!videoLoaded && mouseX >= vidX && mouseX <= vidX + vidSize && mouseY >= vidY && mouseY <= vidY + vidSize) {
    loadVideo = true;
  }


}

function resize() {
  let w = windowWidth;
  let h = windowHeight;
  resizeCanvas(w, h);
  globeScale = min(width, height);
}

//BANNER -----------------------------------------------------------------------

// function showBanner() {


//   canvas1.position(0, 0); // Set the position of the canvas to the top left corner
//   canvas1.style("z-index", "1"); // Set a high z-index value

//   //top border
//   noStroke();
//   fill(255, 0.1);
//   rect(0, 0, width, rectH);

//   textAlign(CENTER, CENTER);
//   textSize(bannerTextSize);
//   fill(0);
//   text(bannerText, textX, rectH / 2);

//   textX -= textSpeed;
//   if (textX <= - startX) {
//     textX = startX;
//   }


// }

//COMING SOON -------------------------------------------------------------------

function comingSoon() {
  minW = globeScale * 0.7;
  minH = height * 0.5;
  maxW = width * 0.9;
  maxH = height * 0.9;

  noStroke();


  fill(c, 50, 100, 0.1);
  ellipseWidth = map(mouseX, 0, width, minW, maxW);
  ellipseHeight = map(mouseY, 0, height, minH, maxH);

  ellipse(width / 2, height / 2, ellipseWidth, ellipseHeight);
  fill(c, 80, 80);
  textAlign(CENTER, CENTER);
  textSize(globeScale * 0.1);
  text('Coming Soon', width / 2, height / 2);
}

