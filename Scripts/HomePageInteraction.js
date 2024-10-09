function pushHexagons(){ //In setup function
  // Create multiple Dots objects and add them to the array
  numShapes = random(10, 800);
  for (let i = 0; i < numShapes; i++) {
    dots.push(new Dots(random(width), random(height)));
  }
}

function homePageInteraction() {
  if(homePageOn){
  // Loop through the dots array and update/display each dot
  for (let i = 0; i < dots.length; i++) {
    dots[i].move();
    dots[i].display();
    dots[i].mouseMoved(); 
    dots[i].isOffscreen();
  }

  // Check if all dots are offscreen
  areAllDotsOffscreen(dots);
  //if they are off screen do something
  // if (areAllDotsOffscreen(dots)) {
  //   console.log("All dots are offscreen");
  //   fractalOn = true;
  // } else {
  //   console.log("Some dots are still onscreen");
  //   fractalOn = false;
  // }
  
  //top border
  fill(255);
  rect(0, 0, width, rectH);

}

}

//Check if all dots are offscreen
function areAllDotsOffscreen(dots) {
  for (let dot of dots) {
    if (!dot.isOffscreen()) {
      return false;
    }
  }
  return true;
}

class Dots {
  constructor(x, y) {
    this.angle = 0;
    this.angle2 = 0;
    this.xoff = 0;
    this.yoff = 1000000;
    this.pos = createVector(x, y); 
    this.s = random(0, 100);
    this.b = random(20,100); //brightness
    this.h = sin(this.angle);
    this.scale = random(width * 0.1);
    this.angleSpeed = random(0.01);
  }

  display() {
    stroke(this.h, this.s, 80, 0.5);
    noStroke();
    fill(this.h, this.s, this.b, 0.5);
    drawSacredGeometry(this.pos.x, this.pos.y, this.s); // Draw sacred geometry shape instead of circle
  }

  move() {
    this.s = sin(this.angle) * this.scale;
    this.h += 0.1;
    this.h = this.h % 360;
    this.angle += this.angleSpeed;
    this.xoff += 0.001;
    this.yoff += 0.001;
  }
  
  mouseMoved(){
   
    // Calculate the distance between the current dot position and the mouse position
    let d = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    let amt = globeScale*0.3;
    let moveAmt; 

      moveAmt = (globeScale*0.005);
    // Check if the mouse is within 100/0.5 pixels of the dot and the mouse has moved
    if (d < amt && (mouseX !== pmouseX || mouseY !== pmouseY)) { 
      // Only move the dot if mouse is close and moving
        // Calculate the angle from the dot to the mouse position
      let angle = atan2(this.pos.y - mouseY, this.pos.x - mouseX);
      // Move the dot away from the mouse by 2 pixels in the calculated direction
      this.pos.x += cos(angle) * moveAmt; //use to be *2
      this.pos.y += sin(angle) * moveAmt;
    }

  }

  //Check if the dot is offscreen
  isOffscreen() {
    return this.pos.x < 0 || this.pos.x > width || this.pos.y < rectH || this.pos.y > height;
  }
     
}

function drawSacredGeometry(x, y, size) {
  beginShape();
  let numPoints = 6; // Number of points on the shape
  let angle = TWO_PI / numPoints;
  let rotation = PI / 2; // Initial rotation angle
  for (let i = 0; i < numPoints; i++) {
    let px = x + cos(rotation) * size;
    let py = y + sin(rotation) * size;
    vertex(px, py);
    rotation += angle;
  }
  endShape(CLOSE);
}  
 

function gradient(){
  
  c1 = color(255, 0.1);
  c2 = color(63, 191, 191);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,cRand,n);
    stroke(newc);
    line(0,y,width, y);
  }

}
