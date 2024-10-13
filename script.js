document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.head-img .header-img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    // Function to update image display
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    // Initial display
    showImage(currentIndex);

    // Next image function
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Previous image function
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Touch swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.querySelector('.head-img').addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.querySelector('.head-img').addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            currentIndex = (currentIndex + 1) % images.length;
        } else if (touchEndX > touchStartX) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
        showImage(currentIndex);
    }
});
