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
  const orangeColors = ["#F4A261", "#EE8959", "#EB7C55", "#E97653", "#E76F51"];
  
  buttonNames.forEach((name, index) => {
    
    let button = createButton(name);

    //DISPLAY THE BUTTONS HORZ OR VERT
  if (!verticleButtonOn) {
    buttonSize = globeScale * 0.07;
    buttonY = vidY + buttonSize * 0.8;
    buttonX = vidX + vidSize * 1.6 + index * (width * 0.1);
  } else {
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
    buttons.push(button); // Add to buttons array for later use

    //color on mouseOver
    let colorIndex = 0;
    let intervalId;

    // Apply CSS transition for smooth color change
    button.style("transition", "background-color 1s ease");

    // Mouse over effect
    button.mouseOver(() => {
      button.style("cursor", "pointer");
      intervalId = setInterval(() => {
        button.style("background-color", orangeColors[colorIndex]);
        colorIndex = (colorIndex + 1) % orangeColors.length;
      }, 200); // Change color every 100 milliseconds
    });

    // Mouse out effect
    button.mouseOut(() => {
      clearInterval(intervalId); // Stop changing colors
      button.style("background-color", "white"); // Revert to original color
    });

    // Check if the button name is "Intermedia"
    if (name === "Intermedia") {
      // If so, set the mousePressed callback to open a new page
      button.mousePressed(() => window.open("http://example.com", "_blank"));
    }
  });
}

//HAM MENU -------------------

class HamMenu {
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.size = size;

  }

  displayHam(){
    strokeCap(ROUND);
    stroke(0);
    strokeWeight(globeScale * 0.01);
    line(this.x, this.y, this.x + this.size, this.y);
    
    strokeCap(SQUARE);
    stroke(30);
    strokeWeight(globeScale * 0.01);
    line(this.x, this.y + this.size/2, this.x + this.size, this.y + this.size/2);
    
    strokeCap(ROUND);
    stroke(50);
    strokeWeight(globeScale * 0.01);
    line(this.x, this.y + this.size, this.x + this.size, this.y + this.size);

  }

  interactHam(){
   let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < this.size*1.5){
        verticleButtonOn = true; 
    } else {
      verticleButtonOn = false;
    }
  }

}