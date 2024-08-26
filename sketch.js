//GOAL: Create a fun, playground, interactive artist website.
//Just do whatever you want

let globeScale;

//P5 Canvas
let canvas1;

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

//HOME PAGE
let homePageOn = true;

//INTERMEDIA PAGE
let interMediaOn = false;

//HOME BUTTON
let homeIcon; 
let c = 0;

function preload() {

  //PROFILE VIDEO ---------------------------
  profileVid = createVideo(["Video/AI Profile Pic.mp4"]);
  cursorHand = loadImage("Images/cursor.png");

  homeIcon = loadImage("Images/homeIcon.png");
  
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

  //BACKGROUND ----------------------------------
  rectH = globeScale * 0.25;
  cRand = color(random(255), random(255), random(255));
  // Create multiple Dots objects and add them to the array
  numShapes = random(10, 800);
  for (let i = 0; i < numShapes; i++) {
    dots.push(new Dots(random(width), random(height)));
  }

  //PROFILE VID/Buttons -------------------
  vidX = globeScale * 0.05;
  vidY = globeScale * 0.03;
  vidSize = globeScale * 0.2;

  homeHeader();

  //HAM MENU -------------------
  //x, y, size
  let hamSize = globeScale * 0.05;
  hamMenu1 = new HamMenu(width * 0.9 - hamSize / 2, height * 0.09, hamSize);
}

function draw() {


  //HOME PAGE -------------------
  if(homePageOn){
    background(50, 0.1);
    gradient();
    homePageInteraction();
      if (cursorHand) {
        if (mouseY >= rectH) {
          noCursor();
          image(cursorHand, mouseX, mouseY, globeScale * 0.2, globeScale * 0.2);
        } else {
          cursor(ARROW);
        }
  }

  } 


  //INTERMEDIA PAGE -------------------
  if(interMediaOn){
    homePageOn = false;
    interMediaPage();
    c += 0.1; 
    c = c % 360;
  }

  // hamMenu1.displayHam();
  // hamMenu1.interactHam();

 
}

function interMediaPage(){
  
canvas1.position(0, 0); // Set the position of the canvas to the top left corner
canvas1.style("z-index", "1"); // Set a high z-index value
 background(255);
 backButton(); 

}

function backButton() {
  let x = width*0.05;
  let y = height*0.1; 
  let backSize =  globeScale * 0.1; 
  let d = dist(mouseX, mouseY, x, y);
  fill(c, 100, 100);
  circle(x, y, backSize);

  if(d < backSize && mouseIsPressed){
    interMediaOn = false;
    homePageOn = true;
    canvas1.position(''); // Reset position
    canvas1.style("z-index", ""); // Reset z-index
  }
  image(homeIcon, x, y, backSize, backSize);
}
