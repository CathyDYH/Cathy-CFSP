function filterImages(category) {
    const images = document.querySelectorAll('.image-grid .image-container');

    images.forEach(imgContainer => {
        
        if (category === 'all') {
            imgContainer.style.display = 'block';
        } else {
            
            if (imgContainer.classList.contains(category)) {
                imgContainer.style.display = 'block';
            } else {
                imgContainer.style.display = 'none';
            }
        }
    });

}
