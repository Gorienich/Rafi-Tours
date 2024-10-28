document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.service-slide'); // Corrected selector
  let currentIndex = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
  
  // Event listeners for navigation buttons
  document.querySelector('.next-btn').addEventListener('click', nextSlide);
  document.querySelector('.prev-btn').addEventListener('click', prevSlide);
  
  // Initialize the slider by showing the first slide
  showSlide(currentIndex);

    // Slider myTours
    document.querySelectorAll('.tour-slider').forEach(slider => {
      const sliderContainer = slider.querySelector('.slider-container');
      const slides = sliderContainer.children;
      const totalSlides = slides.length;
      let currentIndex = 0;
  
      // Function to update the slider position
      function updateSlider() {
          const offset = -currentIndex * 100; // move the slider left by 100% of the current index
          sliderContainer.style.transform = `translateX(${offset}%)`;
      }
  
      // Event listener for the "next" button
      slider.querySelector('.next').addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % totalSlides; // loop back to the first slide
          updateSlider();
      });
  
      // Event listener for the "prev" button
      slider.querySelector('.prev').addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // loop back to the last slide
          updateSlider();
      });
  });
  
    // "Read More" functionality
    document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', () => {
        const moreText = button.previousElementSibling.querySelector('.more-text');
        if (moreText.style.display === 'none' || !moreText.style.display) {
          moreText.style.display = 'inline';
          button.textContent = 'Скрыть';
        } else {
          moreText.style.display = 'none';
          button.textContent = 'Скрыть';
        }
      });
    });
});
