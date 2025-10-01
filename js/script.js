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

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function () {
    const topic = this.dataset.topic;
    alert(`Navigating to ${topic.charAt(0).toUpperCase() + topic.slice(1)} page...`);
  });
});


const dots2 = document.querySelectorAll('.dot2');
const StudentTestimonials = [
  {
    text: "Truly what Zaytuna is teaching is absolutely critical. We need Zaytuna, not need strong, intellectual, balanced muslims that unite the inner and outer sciences and work to perfect their character. May Allah provide for Zaytuna!",
    author: "Mallika Kasudia"
  },
  {
    text: "The education at Zaytuna has transformed my understanding of both Islamic and Western traditions. The faculty's dedication to excellence is truly inspiring.",
    author: "Ahmad Hassan"
  },
  {
    text: "Being part of this community has been a blessing. The integration of traditional Islamic scholarship with contemporary academic rigor is unmatched.",
    author: "Sarah Ahmed"
  }
];

let currentIndex = 0;

dots2.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateTestimonial();
  });
});

function updateTestimonial() {
  const testimonialText = document.querySelector('.testimonial-text');
  const testimonialAuthor = document.querySelector('.testimonial-author');

  // Update active dot
  dots2.forEach(d => d.classList.remove('active'));
  dots2[currentIndex].classList.add('active');

  // Fade out
  testimonialText.style.opacity = '0';
  testimonialAuthor.style.opacity = '0';

  setTimeout(() => {
    testimonialText.textContent = StudentTestimonials[currentIndex].text;
    testimonialAuthor.textContent = StudentTestimonials[currentIndex].author;

    // Fade in
    testimonialText.style.transition = 'opacity 0.5s ease';
    testimonialAuthor.style.transition = 'opacity 0.5s ease';
    testimonialText.style.opacity = '1';
    testimonialAuthor.style.opacity = '1';
  }, 300);
}

// Auto-rotate testimonials
setInterval(() => {
  currentIndex = (currentIndex + 1) % StudentTestimonials.length;
  updateTestimonial();
}, 6000);

// Play button hover effect
const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Video player would open here');
  });
});


let currentCampusSlide = 0;
const campusSlides = document.querySelectorAll('.campus-life-slide');
const campusDots = document.querySelectorAll('.campus-life-dot');
const campusWrapper = document.getElementById('campusSliderWrapper');
const totalCampusSlides = campusSlides.length;

function updateCampusSlider() {
  campusWrapper.style.transform = `translateX(-${currentCampusSlide * 100}%)`;

  campusDots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentCampusSlide);
  });
}

function changeCampusSlide(direction) {
  currentCampusSlide = (currentCampusSlide + direction + totalCampusSlides) % totalCampusSlides;
  updateCampusSlider();
}

function goToCampusSlide(index) {
  currentCampusSlide = index;
  updateCampusSlider();
}

// Auto-advance slider every 6 seconds
setInterval(() => {
  changeCampusSlide(1);
}, 6000);

// Make functions global
window.changeCampusSlide = changeCampusSlide;
window.goToCampusSlide = goToCampusSlide;