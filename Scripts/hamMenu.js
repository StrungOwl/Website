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
      
      strokeCap(ROUND);
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