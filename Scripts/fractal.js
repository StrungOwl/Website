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

    fSpeed += 0.005; //change over time

    fractalColor += 0.5;
    fractalColor = fractalColor % 360;

    //ease in the fractal
    fractalAlpha += 0.0001;
    if (fractalAlpha > 0.5) {
        fractalAlpha += 0;
    }
    pop();
}

function bladeMaker(len, theta) {

    let strokeC = color(fractalColor, ranSat, ranBright, fractalAlpha);
    let strokeC2 = color(fractalColor, ranSat2, ranBright2, fractalAlpha);
    let circleS = globeScale * 0.008; // Change size of circle

    circleS = map(len, maxLen, minLen, circleS, 0);
    // Stroke weight change
    let sw = map(len, minLen, maxLen, globeScale * 0.003, globeScale * 0.001);

    let x;
    let y;

    if(triggerInteraction){
        x = map(mouseX, 0, width, -globeScale * 0.1, globeScale * 0.1); // Change position?
        y = map(mouseY, 0, height, -globeScale * 0.1, globeScale * 0.1); // Change position?
    } else {
        x = 0;
        y = 0; 
    }
    

    push();
    translate(x, y);
    rotate(theta);
    strokeWeight(sw);
    stroke(strokeC); // Change color with map
    line(0, 0, 0, -len); // Change position? 
    noStroke();
    fill(ranC);
    fill(0);
    circle(0, -len, circleS); // Change position?
    // Change origin to end of segment
    translate(0, -len);

    // Alter length 
    if (len > minLen) {
        bladeMaker(len * 0.6, theta * 1.1); // Adjust later? 
    }
    pop();

    // MAKE SECOND BRANCH-----------
    push();
    translate(x, y);
    // Reflect by flipping rotation
    rotate(-theta);
    // Stroke weight change
    strokeWeight(sw);
    stroke(strokeC2); // Change color with map
    line(0, 0, 0, -len); // Change position? 
    noStroke();
    fill(ranC);
    circle(0, -len, circleS); // Change position?

    // Change origin to end of segment
    translate(0, -len);

    // Alter length 
    if (len > minLen) {
        // Generate noise value
        let noiseVal = noise(xoff) * 0.5 + 0.5; // Noise value between 0.5 and 1
        bladeMaker(len * noiseVal, theta * 1.1); // Adjust later? 
    }

    // Increment noise offset
    xoff += 0.01;

    pop();
}



