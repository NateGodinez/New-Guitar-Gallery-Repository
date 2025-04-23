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