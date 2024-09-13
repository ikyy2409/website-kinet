let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    if (n >= slides.length) {
        currentSlide = 0;
    } 
    if (n < 0) {
        currentSlide = slides.length - 1;
    }
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

// Inisialisasi slide pertama
showSlide(currentSlide);
