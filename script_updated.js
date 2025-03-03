document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.classList.add('animate-slide-down');

    // Menu Toggle per mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
    });
});
