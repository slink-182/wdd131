const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('#nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('hide');
});

const fullImgBox = document.getElementById('full-img-box');
const fullImg = document.getElementById('full-img');
const closeBtn = document.getElementById('close-btn');

// Close the full image when clicking on X
closeBtn.addEventListener('click', () => {
  fullImgBox.style.display = 'none';
  document.body.classList.remove('no-scroll'); // Re-enable scroll
});

// Add click listeners to all small images in the gallery
const thumbnails = document.querySelectorAll('.gallery img');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const largeSrc = thumb.getAttribute('data-large');
    fullImg.src = largeSrc;
    fullImgBox.style.display = 'flex';
    document.body.classList.add('no-scroll'); // Disable scroll
  });
});

// Close the full image when clicking outside of it
fullImgBox.addEventListener('click', (event) => {
  if (event.target === fullImgBox) {
    fullImgBox.style.display = 'none';
    document.body.classList.remove('no-scroll'); // Re-enable scroll
  }
});

