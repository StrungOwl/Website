function vrPage() {
    canvas1.position(0, 0); // Set the position of the canvas to the top left corner
    canvas1.style("z-index", "1"); // Set a high z-index value
    background(40, 10, 90); // tan
    backButton();

    // Select all elements with the class 'gallery-item'
    let galleryItems = selectAll('.gallery-item');

    // Attach mousePressed event to each gallery item
    galleryItems.forEach(item => {
        item.mousePressed(function () {
            let media = this.elt.querySelector('img'); // Get the image element within the clicked gallery item
            makePhotoBig = !makePhotoBig;
            resizePhoto(media, makePhotoBig);
            });


            
    });

   

 }

function resizePhoto(media, makeBig) {
    
    if (makeBig) {
        media.style.width = '100vw';
        media.style.height = 'auto';
        media.style.opacity = 1;
    } else {
        media.style.width = '100%';
        media.style.height = 'auto';
       
        media.addEventListener('mouseover', function() {
            media.style.opacity = 0.3;
            media.style.transition = 'opacity 0.3s ease';
        });

        media.addEventListener('mouseout', function() {
            media.style.opacity = 1;
        });
    }
}