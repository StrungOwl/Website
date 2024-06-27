//GOAL: Create a fun, playground, interactive artist website.
//Just do whatever you want

let globeScale;

//HOME PAGE HEADER
let profileVid, vidSize; //ai video of me
let sydText; //Header
let h1FontSize, h2FontSize; //Header font sizes

//BUTTONS ON HOME PAGE
let buttons = [];
let buttonNames = ["Intermedia", "Installation", "Generative Art", "VR", "Exhibitions", "About"];


function preload() {
  
//PROFILE VIDEO ---------------------------
  profileVid = createVideo(["Video/AI Profile Pic.mp4"]);

}

function setup() {

//HEADER VIDEO -----------------
  let container = select("main");
  //parent vid to main html element so it shows at top of screen
  profileVid.parent(container);
  // Add padding to the left and top of the video
  profileVid.style("padding-left", "200px"); // Adjust '50px' as needed
  profileVid.style("padding-top", "200px"); // Adjust '20px' as needed
  
  //CANVAS -------------------
  let w = window.innerWidth / 2;
  let h = window.innerHeight / 2;
  createCanvas(w, h);
  globeScale = min(width, height);
  colorMode(HSB);
  background(0);

  vidSize = globeScale * 0.4;

  profileVid.size(vidSize, vidSize);



  //HEADER TEXT -------------
  sydText = select("h1");
  beCool = select("h2");

  let sydFontSize = globeScale * 0.1;
  let beCoolFontSize = globeScale * 0.06;
  // Assuming vidSize and globeScale are defined elsewhere in your sketch
  sydText.style("font-size", sydFontSize + "px");
  beCool.style("font-size", beCoolFontSize + "px");

  sydText.position(300 + vidSize, globeScale * 0.2);
  beCool.position(300 + vidSize, globeScale * 0.2 + sydFontSize+(beCoolFontSize*2));

  //PROFILE VID INTERACTION ------------------
    // Event listeners for hovering -----------------
    profileVid.mouseOver(() => { profileVid.loop()
    });

    profileVid.mouseOut(() => {
    profileVid.pause()
    });

    //HOME PAGE BUTTONS ----------------
      // Create buttons based on buttonNames array
    buttonNames.forEach((name, index) => {
    let button = createButton(name);
    let buttonSize = globeScale*0.08;
    let buttonX = 200+vidSize/2 - (buttonSize/2); 
    let offset = 300+vidSize; 
    let buttonY = offset + index * (buttonSize * 2); 
    
    button.size(buttonSize*1.7, buttonSize); // Adjust size as
    button.position(buttonX, buttonY); // Adjust positioning as needed
    button.mousePressed(() => console.log(`${name} button pressed`)); // Example action
    let fontSize = buttonSize*0.25
    button.style('font-size', `${fontSize}px`); // Change button text size here
    button.style('background-color', 'white'); // Change button background color here
    button.style('font-family', 'Space Grotesk'); // Change button text color here
    buttons.push(button); // Add to buttons array for later use
  });
}

function draw() {}
