// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrolled = window.pageYOffset;

  if (scrolled > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add some interactive hover effects
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px) scale(1.05)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});


let currentSlide = 0;
const slides = document.getElementById('carouselSlides');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = 3;

function updateCarousel() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const wrapper = document.getElementById('testimonialsWrapper');
const totalTestimonials = testimonials.length;

function updateTestimonials() {
  wrapper.style.transform = `translateX(-${currentTestimonial * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentTestimonial);
  });
}

function changeTestimonial(direction) {
  currentTestimonial = (currentTestimonial + direction + totalTestimonials) % totalTestimonials;
  updateTestimonials();
}

function goToTestimonial(index) {
  currentTestimonial = index;
  updateTestimonials();
}

// Auto-advance testimonials every 7 seconds
setInterval(() => {
  changeTestimonial(1);
}, 7000);

// Make functions global
window.changeTestimonial = changeTestimonial;
window.goToTestimonial = goToTestimonial;

function playVideo() {
  const videoWrapper = document.querySelector('.video-wrapper');
  const thumbnail = document.querySelector('.video-thumbnail');

  // Replace with your actual video embed code or video element
  // Example for YouTube:
  const videoEmbed = `
                <iframe 
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" 
                    allowfullscreen
                    allow="autoplay">
                </iframe>
            `;

  // Or for direct video file:
  // const videoEmbed = `
  //     <video controls autoplay>
  //         <source src="path/to/campus-tour.mp4" type="video/mp4">
  //     </video>
  // `;

  thumbnail.style.display = 'none';
  videoWrapper.innerHTML = videoEmbed;
}