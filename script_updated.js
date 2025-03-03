document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.classList.add('animate-slide-down');

    // Menu Toggle per mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
    });

    // Effetto di fade-in per le sezioni
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.hero, .cta, .hero-content').forEach(el => observer.observe(el));
});
