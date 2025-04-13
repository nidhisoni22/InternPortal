// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.padding = '10px 0';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.padding = '20px 0';
        }
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Counter animation for stats
    const statElements = document.querySelectorAll('.stat-item h2');

    const animateCounter = (el) => {
        const target = parseInt(el.textContent.replace(/,/g, '').replace(/\+/g, ''));
        const duration = 2000; // 2 seconds
        const step = Math.ceil(target / (duration / 16)); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                el.textContent = target.toLocaleString() + '+';
                clearInterval(timer);
            } else {
                el.textContent = current.toLocaleString() + '+';
            }
        }, 16);
    };

    // Intersection Observer for stats animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statElements.forEach(el => {
        observer.observe(el);
    });

    // Testimonial Data
    const testimonials = [
        {
            name: "Madhab Kafle",
            company: "TCS",
            image: "img/testimonials/testimonails1.jpg",
            companyLogo: "img/logos/tcs.svg",
            role: "Software Engineer"
        },
        {
            name: "Mandeep Hooda",
            company: "Capgemini",
            image: "img/testimonials/testimonials2.jpg",
            companyLogo: "img/logos/capgemini.svg",
            role: "Data Analyst"
        },
        {
            name: "Naushin Adiba",
            company: "Samsung",
            image: "img/testimonials/testimonials5.jpg",
            companyLogo: "img/logos/samsung.png",
            role: "Product Manager"
        },
        {
            name: "Srivalika Iyer",
            company: "Deutsche Bank",
            image: "img/testimonials/testimonials4.jpg",
            companyLogo: "img/logos/deutsche.svg",
            role: "Financial Analyst"
        },
        {
            name: "K Sanketh Kumar",
            company: "EA",
            image: "img/testimonials/testimonials6.jpg",
            companyLogo: "img/logos/ea-games.svg",
            role: "Game Developer"
        }
    ];

    // Initialize Testimonials Swiper
    const testimonialSwiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // Populate Testimonials
    function populateTestimonials() {
        const swiperWrapper = document.querySelector('.testimonialSwiper .swiper-wrapper');

        testimonials.forEach(testimonial => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';

            slide.innerHTML = `
                <div class="testimonial-card">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                    <h4 class="mb-1">${testimonial.name}</h4>
                    <p class="text-muted mb-2">${testimonial.role}</p>
                    <div class="d-flex align-items-center mb-3">
                        <img src="${testimonial.companyLogo}" alt="${testimonial.company}" class="company-logo">
                        <span>${testimonial.company}</span>
                    </div>
                </div>
            `;

            swiperWrapper.appendChild(slide);
        });
    }

    // Call the populate function
    populateTestimonials();
});
