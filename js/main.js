document.addEventListener('DOMContentLoaded', () => {
    // Particle.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
    });

    // Typed.js configuration
    new Typed('#typed-output', {
        strings: ['Data Scientist', 'Computer Vision Engineer', 'AI Enthusiast'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Project filtering
    function initProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                projectItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Modal functionality
    function initModals() {
        const modals = document.querySelectorAll('.modal');
        const modalTriggers = document.querySelectorAll('[data-modal]');
        const closeBtns = document.querySelectorAll('.close');

        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.getAttribute('data-modal');
                document.getElementById(modalId).style.display = 'block';
            });
        });

        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.modal').style.display = 'none';
            });
        });

        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
            }
        });
    }

    // Add these function calls to your existing DOMContentLoaded event listener
    initProjectFilters();
    initModals();

    // Scroll reveal animation
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200
    });

    sr.reveal('.section-title', {});
    sr.reveal('.about-content', {});
    sr.reveal('.project-item', { interval: 200 });
    sr.reveal('.skill-category', { interval: 200 });
    sr.reveal('.contact-form', {});
    sr.reveal('.contact-info', { delay: 400 });
    sr.reveal('#about-hero h1', { delay: 200 });
    sr.reveal('#about-hero .subtitle', { delay: 400 });
    sr.reveal('.about-image', { delay: 200 });
    sr.reveal('.about-text', { delay: 400 });
    sr.reveal('.about-journey', { delay: 600 });
    sr.reveal('.about-approach', { delay: 800 });
    sr.reveal('.timeline li', { interval: 200 });
    sr.reveal('.cta-container', { delay: 1000 });
    sr.reveal('#projects-hero h1', { delay: 200 });
    sr.reveal('#projects-hero .subtitle', { delay: 400 });
    sr.reveal('.project-filters', { delay: 600 });
    sr.reveal('.skills-grid', { delay: 200 });
    sr.reveal('.timeline-item', { interval: 200 });
    sr.reveal('.testimonial-item', { delay: 200 });
    sr.reveal('.award-item', { interval: 200 });
    sr.reveal('.interest-item', { interval: 200 });
    sr.reveal('#cta', { delay: 200 });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
        contactForm.reset();
    });

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    navSlide();
});


