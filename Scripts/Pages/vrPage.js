function vrPage() {

    canvas1.position(0, 0); // Set the position of the canvas to the top left corner
    canvas1.style("z-index", "1"); // Set a high z-index value
    background(255);
    backButton();

    fig1Size = globeScale*0.8; 

    let fig1X = width/2 - fig1Size/2;
    let fig1Y = height / 2.8;
    let fig2X = width/2 + fig2Size;
    let fig2Y = fig1Y;
    
    // let fig1X = constrain(width/2 - fig1Size/2, globeScale*0.3, width - fig1Size);
    // let fig1Y = constrain(height / 2.8, 0, height - fig1Size);

    // let fig2X = constrain(width/2 + fig2Size, 0, width - fig2Size);
    // let fig2Y = constrain(fig1Y, 0, height - fig2Size);

    noTint();
    image(fig2, fig2X, fig2Y);

     dist1 = dist(mouseX, mouseY, fig1X, fig1Y);

    if(dist1 < fig1Size/4){

        if(!makePhotoBig){
        fill(0);
        noStroke(); 
        text("Figure in Flowers", fig1X, fig1Y);
        tint(255, 0.3);
        }
        
        image(fig1, fig1X, fig1Y);
             
      
    } else {
        image(fig1, fig1X, fig1Y);

    }

    noTint(); 

    if(makePhotoBig){
        fig1Size = width;
        // fig1X = width/2;
        // fig1Y = height;
        fig1.resize(fig1Size, 0);
    } else {
        fig1Size = globeScale*0.8; 
        fig1.resize(fig1Size, 0);
    }




   

}
