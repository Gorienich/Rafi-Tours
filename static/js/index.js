// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // header
      // Add event listeners after the header is loaded
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", () => {
      menu.classList.add("menu-active");
      menu.classList.remove("menu-inactive");
    });

    closeButton.addEventListener("click", () => {
      menu.classList.remove("menu-active");
      menu.classList.add("menu-inactive");
    });

    // Close the menu when a link is clicked
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove("menu-active");
        menu.classList.add("menu-inactive");
      });
    });


  
  const sliderTeam = document.querySelector('.slider');
  const slidesTeam = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const slideCount = slides.length;

  // Clone the first and last slides
  const firstSlideClone = slides[0].cloneNode(true);
  const lastSlideClone = slides[slideCount - 1].cloneNode(true);

  // Append the clones
  slidesTeam.appendChild(firstSlideClone);
  slidesTeam.insertBefore(lastSlideClone, slidesTeam.firstChild);

  // Updated total slides count
  const totalSlides = slidesTeam.children.length;
  let slideIndex = 1; // Start with the first real slide
  const slideWidth = 100; // Width of each slide in percentage

  // Move to the first slide
  slidesTeam.style.transform = `translateX(-${slideIndex * slideWidth}%)`;

  // Function to move the slides
  const moveToSlide = (index) => {
    slidesTeam.style.transition = 'transform 0.5s ease';
    slidesTeam.style.transform = `translateX(-${index * slideWidth}%)`;
  };

  // Handle Previous Button Click
  document.querySelector('.prev-btn').addEventListener('click', () => {
    slideIndex--;
    moveToSlide(slideIndex);

    // Check for first cloned slide
    if (slideIndex === 0) {
      setTimeout(() => {
        slidesTeam.style.transition = 'none'; // Disable transition
        slideIndex = slideCount; // Go to last slide
        slidesTeam.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
      }, 500);
    }
  });

  // Handle Next Button Click
  document.querySelector('.next-btn').addEventListener('click', () => {
    slideIndex++;
    moveToSlide(slideIndex);

    // Check for last cloned slide
    if (slideIndex === totalSlides - 1) {
      setTimeout(() => {
        slidesTeam.style.transition = 'none'; // Disable transition
        slideIndex = 1; // Go to first slide
        slidesTeam.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
      }, 500);
    }
  });

  // Scroll-to-top button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  // Toggle visibility of scroll-to-top button based on scroll position
  function toggleVisibility() {
    if (window.scrollY > 250) { // Button appears after scrolling 300px down
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }
  // Event listener for scrolling
  window.addEventListener('scroll', toggleVisibility);
  // Smooth scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

});

