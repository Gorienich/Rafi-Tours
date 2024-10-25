document.addEventListener('DOMContentLoaded', function () {
  const sliderTeam = document.querySelector('.slider');
  if (sliderTeam) {
      const slidesTeam = document.querySelector('.slides');
      const slides = document.querySelectorAll('.slide');
      const slideCount = slides.length;
  
      // Clone first and last slides
      const firstSlideClone = slides[0].cloneNode(true);
      const lastSlideClone = slides[slideCount - 1].cloneNode(true);
  
      // Append and prepend the clones
      slidesTeam.appendChild(firstSlideClone);
      slidesTeam.insertBefore(lastSlideClone, slidesTeam.firstChild);
  
      // Updated slide count with the two new clones
      const totalSlides = slidesTeam.children.length;
  
      let slideTeamIndex = 1; // Start at the first real slide
      const slideWidth = 100; // 100% width of the slider
  
      // Initially move to the first real slide
      slidesTeam.style.transform = `translateX(-${slideTeamIndex * slideWidth}%)`;
  
      // Function to update the slide position with proper transition handling
      const moveToSlide = (index) => {
          slidesTeam.style.transition = 'transform 0.5s ease-in-out';
          slidesTeam.style.transform = `translateX(-${index * slideWidth}%)`;
      };
  
      // Handle clicking "Previous" button
      document.querySelector('.prev-btn').addEventListener('click', () => {
          slideTeamIndex--;
          moveToSlide(slideTeamIndex);
  
          // If we are at the cloned first slide, jump to the actual last slide
          if (slideTeamIndex < 0) {
              setTimeout(() => {
                  slidesTeam.style.transition = 'none'; // Disable transition for the jump
                  slideTeamIndex = slideCount; // Actual last slide index
                  slidesTeam.style.transform = `translateX(-${slideTeamIndex * slideWidth}%)`;
              }, 500); // Wait for the current transition to finish
          }
      });
  
      // Handle clicking "Next" button
      document.querySelector('.next-btn').addEventListener('click', () => {
          slideTeamIndex++;
          moveToSlide(slideTeamIndex);
  
          // If we are at the cloned last slide, jump to the actual first slide
          if (slideTeamIndex === totalSlides - 1) {
              setTimeout(() => {
                  slidesTeam.style.transition = 'none'; // Disable transition for the jump
                  slideTeamIndex = 1; // Actual first slide index
                  slidesTeam.style.transform = `translateX(-${slideTeamIndex * slideWidth}%)`;
              }, 500); // Wait for the current transition to finish
          }
      });
  }
  const initializeSlider = (sliderSelector) => {
    const slider = document.querySelector(sliderSelector);
    if (slider) {
        const slidesContainer = slider.querySelector('.slides');
        const slides = slider.querySelectorAll('.slide');
        const slideCount = slides.length;

        // Clone first and last slides
        const firstSlideClone = slides[0].cloneNode(true);
        const lastSlideClone = slides[slideCount - 1].cloneNode(true);

        // Append and prepend the clones
        slidesContainer.appendChild(firstSlideClone);
        slidesContainer.insertBefore(lastSlideClone, slidesContainer.firstChild);

        const totalSlides = slidesContainer.children.length;
        let slideIndex = 1; // Start at the first real slide
        const slideWidth = 100; // 100% width of the slider

        // Initially move to the first real slide
        slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}%)`;

        const moveToSlide = (index) => {
            slidesContainer.style.transition = 'transform 0.5s ease-in-out';
            slidesContainer.style.transform = `translateX(-${index * slideWidth}%)`;
        };

        // Handle clicking "Previous" button
        slider.querySelector('.prev-btn').addEventListener('click', () => {
            slideIndex--;
            moveToSlide(slideIndex);

            if (slideIndex < 0) {
                setTimeout(() => {
                    slidesContainer.style.transition = 'none';
                    slideIndex = slideCount;
                    slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
                }, 500);
            }
        });

        // Handle clicking "Next" button
        slider.querySelector('.next-btn').addEventListener('click', () => {
            slideIndex++;
            moveToSlide(slideIndex);

            if (slideIndex === totalSlides - 1) {
                setTimeout(() => {
                    slidesContainer.style.transition = 'none';
                    slideIndex = 1;
                    slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
                }, 500);
            }
        });
    }
};

// Initialize both sliders
initializeSlider('.slider'); // For the top slider
initializeSlider('#myTeam .slider'); // For the bottom slider


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
  scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Mobile menu functionality
  const menuButton = document.getElementById('menu-button');
  const closeButton = document.getElementById('close-button');
  const menu = document.getElementById('menu');

  // Function to open the menu
  const openMenu = () => {
    menu.classList.remove('menu-inactive');
    menu.classList.add('menu-active'); // Assuming you have a corresponding class for active state
  };

  // Function to close the menu
  const closeMenu = () => {
    menu.classList.remove('menu-active');
    menu.classList.add('menu-inactive');
  };

  // Event listener for opening the menu
  menuButton.addEventListener('click', openMenu);

  // Event listener for closing the menu
  closeButton.addEventListener('click', closeMenu);

  // Event listener for closing the menu when a menu item is clicked
  const menuItems = menu.querySelectorAll('ul li a');
  menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  /* Share buttons */
  const whatsappShareButton = document.getElementById("whatsappShare");
  const facebookShareButton = document.getElementById("facebookShare");
  const instagramShareButton = document.getElementById("instagramShare");
  const tiktokShareButton = document.getElementById("tiktokShare");
  const vk = document.getElementById("vk");

  // Add event listeners
  whatsappShareButton.addEventListener('click', shareOnWhatsApp);
  facebookShareButton.addEventListener('click', shareOnFacebook);
  instagramShareButton.addEventListener('click', shareOnInstagram);
  tiktokShareButton.addEventListener('click', shareOnTiktok);
  vk.addEventListener('click', shareOnVK);

  // Share functions 
  function shareOnWhatsApp() {
    const phoneNumber = ''; // Add your phone number here
    const message = 'Check out this amazing tour guide: https://gorienich.github.io/portfolio-app/index.html';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }

  function shareOnFacebook() {
    const url = 'https://gorienich.github.io/portfolio-app/index.html';
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookURL, '_blank');
  }

  function shareOnInstagram() {
    const url = 'https://gorienich.github.io/portfolio-app/index.html';
    const instagramURL = `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(instagramURL, '_blank');
  }

  function shareOnTiktok() {
    const url = 'https://gorienich.github.io/portfolio-app/index.html';
    const tiktokURL = `https://www.tiktok.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(tiktokURL, '_blank');
  }

  function shareOnVK() {
    const url = 'https://gorienich.github.io/portfolio-app/index.html';
    const vkURL = `https://vk.com/share.php?url=${encodeURIComponent(url)}`;
    window.open(vkURL, '_blank');
  }
});

