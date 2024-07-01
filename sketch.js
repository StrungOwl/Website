//GOAL: Create a fun, playground, interactive artist website.
//Just do whatever you want

let globeScale;

//P5 Canvas
let canvas1;
let pg1;

//CANVAS BACKGROUND
let showTracer = false;
let cursorHand;
let dots = []; // Array to store Dots objects
let ranFrameC; //random frame color
let cRand; //random color for background
let rectH; //top border
let numShapes;

//HOME PAGE HEADER
let profileVid; //ai video of me
let sydText; //Header
let h1FontSize, h2FontSize; //Header font sizes
let hamMenu1; //Hamburger menu
let verticleButtonOn = false;
let buttonX, buttonY, buttonSize;
let vidX, vidY, vidSize;

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

function preload() {
  //PROFILE VIDEO ---------------------------
  profileVid = createVideo(["Video/AI Profile Pic.mp4"]);
  cursorHand = loadImage("Images/cursor.png");
}

function setup() {
  //CANVAS -------------------
  let w = windowWidth;
  let h = windowHeight;
  canvas1 = createCanvas(w, h); //background canvas
  pg = createGraphics(w, h);
  globeScale = min(width, height);

  //BACKGROUND CANAS
  colorMode(HSB);
  imageMode(CENTER);

  //BACKGROUND -------------------
  rectH = globeScale * 0.25;
  cRand = color(random(255), random(255), random(255));
  // Create multiple Dots objects and add them to the array
  numShapes = random(10, 800);
  for (let i = 0; i < numShapes; i++) {
    dots.push(new Dots());
  }

  //PROFILE VID/Buttons -------------------
  vidX = globeScale * 0.05;
  vidY = globeScale * 0.03;
  vidSize = globeScale * 0.2;

  //HAM MENU -------------------
  //x, y, size
  let hamSize = globeScale * 0.05;
  hamMenu1 = new HamMenu(width * 0.9 - hamSize / 2, height * 0.09, hamSize);
}

function draw() {

  homeHeader();

  background(50, 0.1);

  gradient();

  homePageInteraction();

  hamMenu1.displayHam();
  hamMenu1.interactHam();

  if (cursorHand) {
    if (mouseY >= rectH) {
      noCursor();
      image(cursorHand, mouseX, mouseY, globeScale * 0.2, globeScale * 0.2);
    } else {
      cursor(ARROW);
    }
  }
}
