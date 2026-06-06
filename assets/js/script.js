document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
// =========================
    // CAROUSELS
    // =========================

    document.querySelectorAll('.carousel').forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');

        if (images.length === 0) return;

        let current = 0;

        images[0].classList.add('active');

        carousel.querySelector('.next').addEventListener('click', () => {
            images[current].classList.remove('active');
            current = (current + 1) % images.length;
            images[current].classList.add('active');
        });

        carousel.querySelector('.prev').addEventListener('click', () => {
            images[current].classList.remove('active');
            current = (current - 1 + images.length) % images.length;
            images[current].classList.add('active');
        });
    });
});
