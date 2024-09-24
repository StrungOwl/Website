function vrPage() {
     canvas1.position(0, 0); // Set the position of the canvas to the top left corner
     canvas1.style("z-index", "1"); // Set a high z-index value
     background(255);
     backButton();
   // Attach mousePressed event to each gallery item
   galleryItem.forEach(item => {
    item.mousePressed(() => {
        makePhotoBig = !makePhotoBig;
        resizePhotos(makePhotoBig);
    });
});


}



function resizePhotos(makeBig) {
    let images = selectAll('.gallery-item img');
    images.forEach(img => {
        if (makeBig) {
            img.style('width', '100vw');
            img.style('height', 'auto');
        } else {
            img.style('width', '100%');
            img.style('height', 'auto');
        }
    });
}