function homeHeader() {

  //HOME PAGE BUTTONS ----------------

  buttonNames.forEach((name, index) => {

    let button = createButton(name);

    //DISPLAY THE BUTTONS HORZ OR VERT
    if (!verticleButtonOn) {
      buttonSize = globeScale * 0.07;
      buttonY = vidY + buttonSize * 0.8;
      buttonX = vidX + vidSize * 1.6 + index * (width * 0.1);
    } else if (verticleButtonOn) {
      buttonSize = globeScale * 0.05;
      buttonX = width * 0.9 - buttonSize * 0.8;
      buttonY = height * 0.2 + index * (buttonSize * 1.2);
    }

    button.size(buttonSize * 1.7, buttonSize); // Adjust size as
    button.position(buttonX, buttonY); // Adjust positioning as needed
    let fontSize = buttonSize * 0.25;
    button.style("font-size", `${fontSize}px`); // Change button text size here
    button.style("font-family", "Space Grotesk"); // Change button text color here
    // Set border properties
    button.style("border", "4px solid grey"); // Set border width, style, and color
    button.style("border-radius", "30px"); // Set border radius
    //buttons.push(button); // Add to buttons array for later use

    //Uses rgba
    let col1 = color(random(255), random(255), random(255), 0.2);
    let col2 = color(random(255), random(255), random(255), 0.2);

    // Change button color on hover
    button.mouseOver(() => {
      button.style("background-color", col1.toString());
    });

    button.mouseOut(() => {
      button.style("background-color", col2.toString());
    });


    // Add event listener to create a new canvas on button click
    button.mousePressed(() => {
      if (buttonNames[index] == "Intermedia") {
        interMediaOn = true;
      } else if (buttonNames[index] == "About") {
        aboutOn = true;
      } else if (buttonNames[index] == "Exhibitions") {
        exhibitionsOn = true;
      } else if (buttonNames[index] == "VR") {
        vrOn = true;
      } else if (buttonNames[index] == "Generative Art") {
        genOn = true;
      } else if (buttonNames[index] == "Installation") {
        installationOn = true;
      }
    });


  });


}

function showTextVid(){
  let wordsX = vidX + vidSize / 2;
      let wordsY = vidY + vidSize / 2;
      let offset = globeScale * 0.01;
      fill(50, 0.2);
      circle(wordsX, wordsY, vidSize * 0.9);
      fill(0);
      stroke(0);
      strokeWeight(globeScale * 0.002);
      textLeading(globeScale * 0.034);
      textAlign(CENTER, CENTER);
      textSize(globeScale * 0.03);
      text("Meet\nthe\nArtist", wordsX - offset, wordsY);
      image(arrow, vidX + vidSize * 0.75, wordsY, globeScale * 0.05, globeScale * 0.05);
}

showVideo = () => {
    //HEADER VIDEO -----------------

    //parent vid to main html element so it shows at top of screen
 
      profileVid.size(vidSize, vidSize);
      profileVid.position(vidX, vidY);
  
      //PROFILE VID INTERACTION ------------------
      // Event listeners for hovering -----------------
      profileVid.mousePressed(() => {
        profileVid.loop();
      });
      profileVid.mouseOver(() => {
        if(homePageOn){
        profileVid.loop();
        }
      });
      profileVid.mouseOut(() => {
        profileVid.pause();
      });

}

function showBanner(){

  
  canvas1.position(0, 0); // Set the position of the canvas to the top left corner
  canvas1.style("z-index", "1"); // Set a high z-index value
    
  //top border
  fill(255);
  rect(0, 0, width, rectH);

}
