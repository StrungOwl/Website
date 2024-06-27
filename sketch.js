//GOAL: Create a fun, playground, interactive artist website.
//Just do whatever you want

let globeScale;
let profileVid, vidSize; //ai video of me
let sydText; //Header
let h1FontSize, h2FontSize; //Header font sizes

function preload() {
  //PROFILE VIDEO ---------------------------

  profileVid = createVideo(["Video/AI Profile Pic.mp4"]);

  let container = select("main");
  //parent vid to main html element so it shows at top of screen
  profileVid.parent(container);

  // Add padding to the left and top of the video
  profileVid.style("padding-left", "200px"); // Adjust '50px' as needed
  profileVid.style("padding-top", "200px"); // Adjust '20px' as needed

  // Event listeners for hovering
  profileVid.mouseOver(() => profileVid.loop());
  profileVid.mouseOut(() => profileVid.pause());
}

function setup() {
  let w = window.innerWidth / 2;
  let h = window.innerHeight / 2;
  createCanvas(w, h);
  globeScale = min(width, height);
  colorMode(HSB);
  background(0);

  vidSize = globeScale * 0.5;

  profileVid.size(vidSize, vidSize);

  //HEADER TEXT -------------
  sydText = select("h1");
  beCool = select("h2");

  // Assuming vidSize and globeScale are defined elsewhere in your sketch
  sydText.style("font-size", globeScale * 0.1 + "px");
  beCool.style("font-size", globeScale * 0.1 + "px");

  sydText.position(300 + vidSize, globeScale * 0.2);
  beCool.position(300 + vidSize, globeScale * 0.35);
}

function draw() {}
