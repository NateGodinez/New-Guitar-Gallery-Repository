document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (event) => {
        // Prevent reactivating the overlay if the overlay was clicked
        if (event.target.classList.contains('overlay')) {
            // Let the overlay click handler handle this
            return;
        }

        const isActive = item.classList.contains('active');

        // Close all overlays
        document.querySelectorAll('.gallery-item').forEach(i => i.classList.remove('active'));

        // If the tapped item wasn't already active, activate it
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Close overlay if tapping directly on overlay
document.querySelectorAll('.overlay').forEach(overlay => {
    overlay.addEventListener('click', (event) => {
        event.stopPropagation();
        const galleryItem = overlay.closest('.gallery-item');
        galleryItem.classList.remove('active');
    });
});

// Close overlay if tapping anywhere outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.gallery-item')) {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.classList.remove('active');
        });
    }
});
