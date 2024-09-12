function vrPage() {

    canvas1.position(0, 0); // Set the position of the canvas to the top left corner
    canvas1.style("z-index", "1"); // Set a high z-index value
    background(255);
    backButton();

    fig1Size = globeScale * 0.8;
    fig3Size = globeScale * 0.8;

    let fig1X = width / 2 - fig1Size / 2;
    let fig1Y = height / 2.8;
    let fig2X = width / 2 + fig2Size;
    let fig2Y = fig1Y;

    //NONDESCRIPT FIGURE -------------------------------
    let fig3X = width / 2 - fig3Size / 2;
    let fig3Y = height / 2 + fig3Size / 2;
    fig3.resize(fig3Size, 0);
    drawFrame(fig3X, fig3Y, fig3Size * 1.07, fig3Size * 0.5);
    image(fig3, fig3X, fig3Y);

    noTint();
    drawFrame(fig2X, fig2Y, fig2Size * 1.09, fig2Size * 0.98);
    image(fig2, fig2X, fig2Y);

    dist1 = dist(mouseX, mouseY, fig1X, fig1Y);

    if (dist1 < fig1Size / 4) {

        if (!makePhotoBig) {

            drawFrame(fig1X, fig1Y, fig1Size * 1.07, fig1Size * 0.55);
            tint(255, 0.3);

            image(fig1, fig1X, fig1Y);

            fill(255);
            noStroke();
            text("Figure in Flowers", fig1X, fig1Y);
        }

        image(fig1, fig1X, fig1Y);




    } else {
        //SHOW IMAGE 1 -------------------------------------------------
        drawFrame(fig1X, fig1Y, fig1Size * 1.07, fig1Size * 0.55);
        image(fig1, fig1X, fig1Y);

    }

    noTint();

    if (makePhotoBig) {
        fig1Size = width;
        // fig1X = width/2;
        // fig1Y = height;
        fig1.resize(fig1Size, 0);
    } else {
        fig1Size = globeScale * 0.8;
        fig1.resize(fig1Size, 0);
    }

}

function drawFrame(x, y, w, h) {
    rectMode(CENTER);
    let bevel = globeScale * 0.01;
    fill(0); // Frame color
    stroke(0); // Frame border color
    strokeWeight(2); // Frame border thickness
    rect(x, y, w, h, bevel); // Draw the frame slightly larger than the image
}