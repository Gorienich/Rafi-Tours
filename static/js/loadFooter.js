fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    // Load the footer content into the global-footer element
    document.getElementById('globalFooter').innerHTML = data;

    // Now the footer is loaded, you can safely add event listeners

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
    vk.addEventListener('click', shareOnVK)
  })
  .catch(error => console.error('Error loading footer:', error));

// Share functions 
function shareOnWhatsApp() {
  const phoneNumber = '';
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
  const url = ' https://gorienich.github.io/portfolio-app/index.html';
  const instagramURL = `https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(instagramURL, '_blank');
}

function shareOnTiktok() {
  const url = ' https://gorienich.github.io/portfolio-app/index.html';
  const tiktokURL = `https://www.tiktok.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(tiktokURL, '_blank');
}

function shareOnVK() {
  const url = 'https://gorienich.github.io/portfolio-app/index.html';
  const vkURL = `https://vk.com/share.php?url=${encodeURIComponent(url)}`;
  window.open(vkURL, '_blank');
}