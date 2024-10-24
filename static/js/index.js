const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
let currentIndex = 0;

function showNextSlide() {
    currentIndex++;
    
    if (currentIndex === totalSlides) {
        slides.style.transition = 'none'; // Temporarily disable transition
        slides.style.transform = `translateX(0)`; // Jump back to the first slide
        currentIndex = 0; // Reset index
    } else {
        slides.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

setInterval(showNextSlide, 2500);

  // Scroll-to-top button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  // Toggle visibility of scroll-to-top button based on scroll position
  function toggleVisibility() {
    if (window.scrollY > 300) { // Button appears after scrolling 300px down
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }

  // Event listener for scrolling
  window.addEventListener('scroll', toggleVisibility);

  // Smooth scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });