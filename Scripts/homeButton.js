
function backButton() {    

    let x = width*0.05;
    let y = height*0.1; 
    let backSize =  globeScale * 0.1; 
    let d = dist(mouseX, mouseY, x, y);
    //noStroke();
    stroke(c, 100, 30);
    strokeWeight(globeScale*0.009);

  
    if(d < backSize && mouseIsPressed){

      interMediaOn = false;
      aboutOn = false;
      exhibitionsOn = false;
      vrOn = false;
      genOn = false;
      installationOn = false;

      homePageOn = true;
      fractalOn = false;
      pushHexagons(); 

      canvas1.position(''); // Reset position
      canvas1.style("z-index", ""); // Reset z-index
    }

    //MOUSE OVER CHANGE COLOR
    if(d < backSize){
      fill(c, 100, 50);

    } else {
      fill(c, 100, 100);
    }

    circle(x, y, backSize);
    image(homeIcon, x, y, backSize, backSize);

  }