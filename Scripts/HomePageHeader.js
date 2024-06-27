function homeHeader(){

//HEADER VIDEO -----------------
let container = select("main");
let vidX = globeScale*0.05; 
let vidY = globeScale*0.03;
vidSize = globeScale * 0.2;

//parent vid to main html element so it shows at top of screen
profileVid.parent(container);
profileVid.size(vidSize, vidSize);
profileVid.position(vidX, vidY);

  //PROFILE VID INTERACTION ------------------
  // Event listeners for hovering -----------------
  profileVid.mousePressed(() => {
    profileVid.loop();
  });
  profileVid.mouseOver(() => {
    profileVid.loop();
  });
  profileVid.mouseOut(() => {
    profileVid.pause();
  });

  //HOME PAGE BUTTONS ----------------
  // Create buttons based on buttonNames array
  buttonNames.forEach((name, index) => {
    let button = createButton(name);
    let buttonSize = globeScale * 0.07;
    let buttonY = vidY+buttonSize*0.8;
    let buttonX = (vidX + vidSize*1.6) + (index * (buttonSize*4));

    button.size(buttonSize * 1.7, buttonSize); // Adjust size as
    button.position(buttonX, buttonY); // Adjust positioning as needed
    button.mousePressed(() => console.log(`${name} button pressed`)); // Example action
    let fontSize = buttonSize * 0.25;
    button.style("font-size", `${fontSize}px`); // Change button text size here
    button.style("background-color", "white"); // Change button background color here
    button.style("font-family", "Space Grotesk"); // Change button text color here
    buttons.push(button); // Add to buttons array for later use
  });

}