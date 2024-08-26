function homeHeader() {
  //HEADER VIDEO -----------------
  let container = select("main");

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
  
  buttonNames.forEach((name, index) => {
    
    let button = createButton(name);

    //DISPLAY THE BUTTONS HORZ OR VERT
  if (!verticleButtonOn) {
    buttonSize = globeScale * 0.07;
    buttonY = vidY + buttonSize * 0.8;
    buttonX = vidX + vidSize * 1.6 + index * (width * 0.1);
  } else if(verticleButtonOn){ 
    buttonSize = globeScale * 0.05;
    buttonX = width * 0.9 - buttonSize * 0.8;
    buttonY = height * 0.2 + index * (buttonSize * 1.2);
  }

    button.size(buttonSize * 1.7, buttonSize); // Adjust size as
    button.position(buttonX, buttonY); // Adjust positioning as needed
    let fontSize = buttonSize * 0.25;
    button.style("font-size", `${fontSize}px`); // Change button text size here
    button.style("background-color", "white"); // Change button background color here
    button.style("font-family", "Space Grotesk"); // Change button text color here
    //button.style("box-shadow", "0px 8px 8px rgba(0, 0, 0, 0.5)"); // Add drop shadow
    //buttons.push(button); // Add to buttons array for later use

      // Add event listener to create a new canvas on button click
      button.mousePressed(() => {
          if(buttonNames[index] == "Intermedia"){
            interMediaOn = true;
          }
      });
    });
}