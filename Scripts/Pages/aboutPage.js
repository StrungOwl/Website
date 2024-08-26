let artistStatement = 'Technology extends our minds and bodies. I use it to create experiences that explore the connection between the physical and virtual worlds. My work encourages people to interact with technology, making art together through coding and sensors. The materials I choose represent both our outer selves and our inner lives.\n\n\n Sydney Parks is an interdisciplinary artist who works at the intersection of virtual and physical space. Holding a Master of Fine Arts from the University of Houston, her career spans exhibitions, teaching and public art. Currently an Assistant Professor of Practice at the University of Texas in Austin, she has previously taught as a Teaching Fellow in painting, drawing, and virtual reality art at the University of Houston. Sydney’s interest in community engagement led her to teach Prison Drawing to male inmates in the Huntsville Holliday Unit.  Sydney’s artwork has been included in institutions like the Blaffer Art Museum and Lawndale Arts Center, with publications including HCE Review Volume II Issue I in Dublin, Ireland, and R2: The Rice Review 2019 Issue in Houston, Texas. She lives and works in Austin, Texas.';


function aboutPage() {
    if (aboutOn) {

        let screenCol = color(265, 25, 100);
        let backCol = color(265, 25, 50, 0.04);


        rectMode(CENTER);
        canvas1.position(0, 0); // Set the position of the canvas to the top left corner
        canvas1.style("z-index", "1"); // Set a high z-index value

        //BACKGROUND ----------------------------------
        fill(backCol);
        rect(width / 2, height / 2, width, height);

        //FRAME SHADOW------------------------------------------
        noStroke();
        fill(0, 0.01);
        rect(blueX + num / 2, blueY + num / 2, blueW + num, blueH + num, bevel);

        //FRAME
        fill(20);
        rect(blueX, blueY, blueW + num, blueH + num, bevel);

        //BLUE SCREEN-----------------------------------------------------------------
        fill(screenCol);
        noStroke();
        rect(blueX, blueY, blueW, blueH);

        //TEXT--------------------------------------------------------------------------
        textAlign(LEFT, TOP);
        textSize(txtSize);
        strokeWeight(globeScale * 0.0007);
        textLeading(textSpacing);
        stroke(0, 0.5); // was imageAlpha 
        fill(0, 0.5); // was imageAlpha 

        //TXT Box Size
        maxW = blueW;
        maxH = globeScale * 1.45;

        text(artistStatement, blueX, aboutPageY, maxW * 0.9, maxH);

        //scrollIndicator();

        // if (scrollY <= scrollBarTop) { //move back to org position
        //     aboutPageY = lerp(aboutPageY, blueY + blueH / 1.3, 0.5);
        // }
        // if (scrollY >= scrollBarBottom) {
        //     aboutPageY = lerp(aboutPageY, blueY - blueH, 0.5);
        // }

        backButton();

        //INTERACTION------------------------------------------------------
        if (!(mouseX > blueX - blueW / 2 && mouseX < blueX + blueW / 2 && mouseY > blueY - blueH / 2 && mouseY < blueY + blueH / 2)) {
            noStroke();
            noCursor();
            circle(mouseX, mouseY, globeScale * 0.02);
        }


    }

}

// function mouseWheel(event) {
//     if (aboutOn) {

//         if (event.delta < 0) { //if it's a negative number

//             scrollY -= globeScale * 0.038; //scroll indicator

//             if (scrollY <= scrollBarTop) { //loop, maxH is blueH
//                 //stop moving
//                 aboutPageY += 0;
//                 //aboutPageY = lerp(aboutPageY, blueY + blueH/2.7, 0.1);

//             } else {
//                 aboutPageY += globeScale * 0.1; //scroll
//             }

//         } else { //if it's a positive number

//             scrollY += globeScale * 0.02; //scroll indicator


//             if (scrollY >= scrollBarBottom) {
//                 //stop moving
//                 aboutPageY += 0;
//             } else {
//                 aboutPageY -= globeScale * 0.05;

//             }


//         }

//         return false;

//     }
// }

// function scrollIndicator() {
//  if(aboutOn){
//     scrollW = globeScale * 0.015;
//     scrollH = blueH * 0.2;

//     // Constrain scrollY to stay within the scroll bar
//     scrollY = constrain(scrollY, scrollBarTop, scrollBarBottom);

//     noStroke();
//     fill(0);
//     rect(blueX + blueW / 2, blueY, scrollW, blueH, 0, 0, 0, 0); //scroll bar
//     fill(255);
//     rect(blueX + blueW / 2, scrollY, scrollW * 0.3, scrollH);
//  }

// }




