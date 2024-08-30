//Radial Recursive Blades 
//look into framecount
//use noise
let fractalColor = 0; //color shift
let fSpeed = 0; //speed of rotation

function fractal(x, y, rX, rY) {
    push(); 

    //Create Shape -------------------------------------


    let fc = fSpeed; //chnage over time!
    translate(x, y);
    rotate(-fc);
    //mult of TAU changes amount 
    for (let r = 0; r < TAU; r += TAU * 0.09) {
        push();
        translate(rX, rY);
        rotate(r + fc); //change over time
        let angle = cos(r + fc); //change over time
        //Change max/min length
        //each branch growing/shrinking at offset rate
        //sin and cos create diff pattern
        maxLen = height * abs(sin(r + fc) * 0.16);
        minLen = maxLen * 0.2;
        bladeMaker(maxLen, angle);
        bladeMaker(maxLen, -angle);
        pop();
    }

    fSpeed += 0.006; //change over time

    fractalColor += 1;
    fractalColor = fractalColor % 360;

    //ease in the fractal
    fractalAlpha += 0.001;
    if(fractalAlpha > 0.5){
        fractalAlpha += 0;
    }
    pop(); 
}

function bladeMaker(len, theta) {

    let strokeC = color(fractalColor, 50, 100, fractalAlpha);
    let strokeC2 = color(fractalColor, 50, 50, fractalAlpha);
    let circleS = globeScale * 0.008; //change size of circle


    push();
    translate(0, 0);
    rotate(theta);
    //strokeweight change
    //change 10,1 this inside or outside
    let sw = map(len, minLen, maxLen, 7, 1);

    strokeWeight(sw);
    stroke(strokeC); //change color with map
    line(0, 0, 0, -len); //change position? 
    noStroke();
    fill(ranC); 
    circle(0, -len, circleS); //change position?
    //Change origin to end of segment
    translate(0, -len);

    //alter length 
    if (len > minLen) {
        bladeMaker(len * 0.6, theta * 1.1); //adjust later? 
    }
    pop();


    //MAKE SECOND BRANCH-----------
    push();
    translate(0, 0);
    //reflect by flipping rotation
    rotate(-theta);
    //strokeweight change
    //change 10,1 this inside or outside
    sw = map(len, minLen, maxLen, 7, 1);
    strokeWeight(sw);
    stroke(strokeC2); //change color with map
    line(0, 0, 0, -len); //change position? 
    noStroke();
    fill(ranC);
    circle(0, -len, circleS); //change position?

    //Change origin to end of segment
    translate(0, -len);
   
    //alter length 
    if (len > minLen) {
        bladeMaker(len * ranNum, theta * 1.1); //adjust later? 
    }
    pop();

}



