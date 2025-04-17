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
            name: "Rahul Singh",
            role: "Cyber Security Intern",
            review: "I am fortunate to have taken this course as my foundation is getting stronger. During lectures we got the best teachers and most of the sessions related to overall development in cyber security. This is the best platform to learn with hands-on projects."
        },
        {
            name: "Priya Sharma",
            role: "Full Stack Developer",
            review: "Nice teaching by the lecturers. We can learn easily and understand very well. With the help of these classes, we can create projects on our own. Good teaching made full stack projects easy to complete. The organization is good and helpful for learning."
        },
        {
            name: "Amit Kumar",
            role: "Data Science Intern",
            review: "I'm impressed! Good mentors who explain concepts in an understandable way. Thanks so much for your very valuable training. I really enjoyed it and appreciated the hands-on approach."
        },
        {
            name: "Neha Patel",
            role: "Cloud Computing Intern",
            review: "The best company I've ever seen & experienced. They explain everything so patiently with compassion & kindness. I'm always thankful to this company for the opportunities they've provided."
        },
        {
            name: "Vikram Reddy",
            role: "Software Development Intern",
            review: "In these sessions we discussed many important topics. All topics are very useful in my programming languages. .NET was also used for my practice programs. So thankful for these classes and the practical knowledge gained."
        },
        {
            name: "Anjali Desai",
            role: "UI/UX Design Intern",
            review: "They taught us well. They provided us with PDFs and presentations during internship sessions and helped with resolving our doubts. The structured approach made learning design principles much easier."
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
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        effect: 'slide',
        speed: 800,
        grabCursor: true,
        autoHeight: false, // Disable auto height
        height: 300, // Fixed height
    });

    // Populate Testimonials
    function populateTestimonials() {
        const swiperWrapper = document.querySelector('.testimonialSwiper .swiper-wrapper');

        testimonials.forEach(testimonial => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';

            slide.innerHTML = `
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p class="testimonial-text mb-4">${testimonial.review}</p>
                        <div class="testimonial-author">
                            <h5 class="mb-1">${testimonial.name}</h5>
                            <p class="text-muted mb-0">${testimonial.role}</p>
                        </div>
                    </div>
                </div>
            `;

            swiperWrapper.appendChild(slide);
        });
    }

    // Call the populate function
    populateTestimonials();

    // Initialize Certificate Slider
    new Swiper(".certificate-slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".certificate-pagination",
            clickable: true,
            renderBullet: function (_, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        navigation: {
            nextEl: ".certificate-button-next",
            prevEl: ".certificate-button-prev",
        },
        breakpoints: {
            320: {
                spaceBetween: 20,
            },
            768: {
                spaceBetween: 30,
            },
        },
    });
});
