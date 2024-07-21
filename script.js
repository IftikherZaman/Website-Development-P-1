function toggleMenu() {
    const menu = document.querySelector(".menu-links") ;
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open") ;
    icon.classList.toggle("open") ;
}


document.addEventListener('DOMContentLoaded', function() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const images = slideshowContainer.querySelectorAll('.about-pic');
    let currentIndex = 0;
    let intervalId;
  
    function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }
  
    slideshowContainer.addEventListener('mouseenter', function() {
      intervalId = setInterval(showNextImage, 1000); // Change image every 1 second
    });
  
    slideshowContainer.addEventListener('mouseleave', function() {
      clearInterval(intervalId);
      // Reset to the first image when mouse leaves
      images[currentIndex].classList.remove('active');
      currentIndex = 0;
      images[currentIndex].classList.add('active');
    });
  });

  let slideIndex = 0;
const slides = document.querySelectorAll('.about-pic');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides[slideIndex].classList.remove('active');
    dots[slideIndex].classList.remove('active');
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

// Auto advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Add click event to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-button');
  const body = document.body;

  toggleButton.addEventListener('click', function() {
      body.classList.toggle('night-mode');
  });
});

