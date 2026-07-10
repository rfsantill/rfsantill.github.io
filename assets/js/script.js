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
        const items = carousel.querySelectorAll('.carousel-item');

        if (items.length === 0) return;

        let current = 0;

        items[0].classList.add('active');

        function stopVideo(item) {
            if (item.tagName === "VIDEO") {
                item.pause();
                item.currentTime = 0;
            }
        }

        carousel.querySelector('.next').addEventListener('click', () => {
            items[current].classList.remove('active');
            current = (current + 1) % items.length;
            items[current].classList.add('active');
        });

        carousel.querySelector('.prev').addEventListener('click', () => {
            items[current].classList.remove('active');
            current = (current - 1 + items.length) % items.length;
            items[current].classList.add('active');
        });
    });
});
