document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            document.querySelectorAll('.gallery-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        }
        });
    });

    //Close the overlay if tapping outside of a gallery item
    document.addEventListener('click', () => {
        document.querySelectorAll('.gallery-item').forEach(item=> {
            item.classList.remove('active');
        });
    });

    //close overlay if tapping directly on overlay
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.addEventListener('click', (event) => {
            //prevent event bubbling to document
            event.stopPropagation();

            const galleryItem = overlay.closest('.gallery-item');
            galleryItem.classList.remove('active');
        });
    });