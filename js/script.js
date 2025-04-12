// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.padding = '1rem 0';
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
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            companyLogo: "path_to_tcs_logo.png",
            role: "Software Engineer"
        },
        {
            name: "Athang Kulkarni",
            company: "Walmart",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            companyLogo: "path_to_walmart_logo.png",
            role: "Data Analyst"
        },
        {
            name: "Gaurav Poosarla",
            company: "Samsung",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
            companyLogo: "path_to_samsung_logo.png",
            role: "Product Manager"
        },
        {
            name: "Prajwal Shah",
            company: "Deutsche Bank",
            image: "https://randomuser.me/api/portraits/men/4.jpg",
            companyLogo: "path_to_db_logo.png",
            role: "Financial Analyst"
        },
        {
            name: "K Sanketh Kumar",
            company: "EA Sports",
            image: "https://randomuser.me/api/portraits/men/5.jpg",
            companyLogo: "path_to_ea_logo.png",
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
