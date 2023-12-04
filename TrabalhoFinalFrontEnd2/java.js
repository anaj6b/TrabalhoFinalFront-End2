document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('carouselTrack');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const itemWidth = items[0].offsetWidth;

    let currentIndex = 0;

    // Update the position of the track based on the current index
    function updateTrack() {
        track.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    // Move to the previous item
    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateTrack();
    }

    // Move to the next item
    function nextSlide() {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateTrack();
    }

    // Add event listeners to buttons
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});
