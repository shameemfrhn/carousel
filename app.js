const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function changeSlide(offset) {
    slideIndex += offset;
    if (slideIndex < 0) {
        slideIndex = 2; 
    } else if (slideIndex > 2) {
        slideIndex = 0; 
    }
    showSlide(slideIndex);
}

prevButton.addEventListener('click', () => {
    changeSlide(-1);
});

nextButton.addEventListener('click', () => {
    changeSlide(1);
});

// Auto-slide (uncomment the lines below to enable auto-sliding)
function autoSlide() {
    changeSlide(1);
}
let autoSlideInterval = setInterval(autoSlide, 3000);

// Stop auto-slide on button click
prevButton.addEventListener('click', () => clearInterval(autoSlideInterval));
nextButton.addEventListener('click', () => clearInterval(autoSlideInterval));

// Initial slide display
showSlide(slideIndex);
