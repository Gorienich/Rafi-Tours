document.addEventListener('DOMContentLoaded', function () {
  
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
    const message = 'Check out this amazing tour guide: https://gorienich.github.io/Rafi-Tours/';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }

  function shareOnFacebook() {
    const url = 'https://gorienich.github.io/Rafi-Tours/';
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookURL, '_blank');
  }

  function shareOnInstagram() {
    const url = 'https://gorienich.github.io/Rafi-Tours/';
    const instagramURL = `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(instagramURL, '_blank');
  }

  function shareOnTiktok() {
    const url = 'https://gorienich.github.io/Rafi-Tours/';
    const tiktokURL = `https://www.tiktok.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(tiktokURL, '_blank');
  }

  function shareOnVK() {
    const url = 'https://gorienich.github.io/Rafi-Tours/';
    const vkURL = `https://vk.com/share.php?url=${encodeURIComponent(url)}`;
    window.open(vkURL, '_blank');
  }

});
