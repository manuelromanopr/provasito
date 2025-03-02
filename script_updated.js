document.addEventListener('DOMContentLoaded', function() {
  // Animazione per l'header al caricamento
  const header = document.querySelector('header');
  header.classList.add('animate-slide-down');
  
  // Effetto fade-in globale
  document.body.classList.add('fade-in');
  
  // Configurazione dell'Intersection Observer
  const observerOptions = {
      threshold: 0.3
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const animationClass = entry.target.getAttribute('data-animation') || 'animate';
              entry.target.classList.add(animationClass);
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  // Osserva tutti gli elementi con classe "animatable"
  document.querySelectorAll('.animatable').forEach(el => observer.observe(el));
});

// Funzione per le recensioni
const testimonialTrack = document.getElementById('testimonialTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;
let currentIndex = 0;

function showTestimonial(index) {
  const offset = index * -100;
  testimonialTrack.style.transition = 'transform 0.6s ease-in-out';
  testimonialTrack.style.transform = `translateX(${offset}%)`;
}

// Event Listener sui pulsanti
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalTestimonials;
  showTestimonial(currentIndex);
});

// Mostra la prima recensione all'avvio
showTestimonial(currentIndex);

// Funzione per scorrere risultati foto
const slides = document.querySelectorAll(".carousel-slide");
const wrapper = document.querySelector(".carousel-wrapper");
let currentIndex1 = 0;

function updateSlide() {
  wrapper.style.transition = 'transform 0.6s ease-in-out';
  wrapper.style.transform = `translateX(${-currentIndex1 * 100}%)`;
}

function nextSlide() {
  currentIndex1 = (currentIndex1 + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentIndex1 = (currentIndex1 - 1 + slides.length) % slides.length;
  updateSlide();
}

// Cambio automatico ogni 5 secondi
setInterval(nextSlide, 8000);

// Funzioni piani abbonamento
function changePlan(months) {
  document.querySelectorAll(".plan").forEach(plan => {
      plan.classList.add("hidden");
  });

  document.getElementById(`plan-${months}`).classList.remove("hidden");

  document.querySelectorAll(".plan-btn").forEach(btn => {
      btn.classList.remove("active");
  });

  document.querySelector(`.plan-btn:nth-child(${months === 3 ? 1 : months === 6 ? 2 : 3})`).classList.add("active");
}




document.addEventListener("DOMContentLoaded", function() {
  // Seleziona i box delle opzioni
  const optionBoxes = document.querySelectorAll(".option-box");

  // Rende visibili i box con un'animazione ritardata
  optionBoxes.forEach((box, index) => {
      setTimeout(() => {
          box.style.opacity = "1";
          box.style.transform = "translateY(0)";
          box.querySelector(".number").style.animation = "bounce 0.6s ease-in-out";
      }, index * 500);
  });

  // Effetto di dissolvenza quando si scorre in basso
  const heroSection = document.querySelector(".hero");
  window.addEventListener("scroll", () => {
      let heroHeight = heroSection.offsetHeight;
      if (window.scrollY > heroHeight / 2) {
          heroSection.style.opacity = "0.7";
      } else {
          heroSection.style.opacity = "1";
      }
  });
});