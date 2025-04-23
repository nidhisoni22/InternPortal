// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add CSS for the second carousel with !important to override any conflicting styles
    const style = document.createElement('style');
    style.textContent = `
        .testimonialSwiperCircular {
            display: block !important;
            overflow: hidden !important;
            position: relative !important;
            width: 100% !important;
            margin-top: 30px !important;
            margin-bottom: 30px !important;
            visibility: visible !important;
            opacity: 1 !important;
            height: auto !important;
            min-height: 300px !important;
        }
        .testimonialSwiperCircular .swiper-wrapper {
            display: flex !important;
            transition-timing-function: linear !important;
            width: max-content !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
        .testimonialSwiperCircular .swiper-slide {
            flex-shrink: 0 !important;
            width: 300px !important;
            margin-right: 30px !important; /* Match the 1st carousel gap */
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
        .testimonialSwiperCircular .testimonial-card {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
    `;
    document.head.appendChild(style);
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
    const statElements = document.querySelectorAll('.stat-number');

    const animateCounter = (el) => {
        const originalText = el.textContent;
        let targetValue;
        let isLacs = false;
        let suffix = '+';

        // Determine the target value and suffix based on the label
        const labelText = el.closest('.stat-item').querySelector('.stat-label').textContent;

        if (labelText.includes('Trained and Placed')) {
            targetValue = 1.5;
            isLacs = true;
            suffix = ' lacs+';
        } else if (labelText.includes('Through Job Fairs')) {
            targetValue = 2;
            isLacs = true;
            suffix = ' lacs+';
        } else if (labelText.includes('Internships')) {
            targetValue = 2.5;
            isLacs = true;
            suffix = ' lacs+';
        } else {
            targetValue = parseInt(originalText.replace(/,/g, '').replace(/\+/g, ''));
        }

        // For non-decimal values
        const duration = 2000; // 2 seconds
        const fps = 60;
        const totalFrames = duration / (1000 / fps);

        let currentFrame = 0;
        let currentValue = 0;

        // Add animation class to the parent item
        el.closest('.stat-item').classList.add('counting');

        // Start with 0
        el.textContent = isLacs ? '0' + suffix : '0' + suffix;

        const timer = setInterval(() => {
            currentFrame++;

            // Use easeOutQuad for smoother animation
            const progress = easeOutQuad(currentFrame / totalFrames);
            currentValue = targetValue * progress;

            // Format the display value
            if (isLacs) {
                // For decimal values, show one decimal place
                el.textContent = currentValue.toFixed(1) + suffix;
            } else {
                // For integers, round and add commas
                el.textContent = Math.round(currentValue).toLocaleString() + suffix;
            }

            // Check if animation is complete
            if (currentFrame >= totalFrames) {
                // Set the final exact value
                if (isLacs) {
                    el.textContent = targetValue.toFixed(1) + suffix;
                } else {
                    el.textContent = Math.round(targetValue).toLocaleString() + suffix;
                }

                clearInterval(timer);
                // Remove animation class and add completed class
                el.closest('.stat-item').classList.remove('counting');
                el.closest('.stat-item').classList.add('counted');
            }
        }, 1000 / fps);
    };

    // Easing function for smoother animation
    function easeOutQuad(t) {
        return t * (2 - t);
    }

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
            rating: 5,
            review: "I am fortunate to have taken this course as my foundation is getting stronger. During lectures we got the best teachers and most of the sessions related to overall development in cyber security. This is the best platform to learn with hands-on projects."
        },
        {
            name: "Priya Sharma",
            role: "Full Stack Developer",
            rating: 4,
            review: "Nice teaching by the lecturers. We can learn easily and understand very well. With the help of these classes, we can create projects on our own. Good teaching made full stack projects easy to complete. The organization is good and helpful for learning."
        },
        {
            name: "Amit Kumar",
            role: "Data Science Intern",
            rating: 5,
            review: "I'm impressed! Good mentors who explain concepts in an understandable way. Thanks so much for your very valuable training. I really enjoyed it and appreciated the hands-on approach."
        },
        {
            name: "Neha Patel",
            role: "Cloud Computing Intern",
            rating: 5,
            review: "The best company I've ever seen & experienced. They explain everything so patiently with compassion & kindness. I'm always thankful to this company for the opportunities they've provided."
        },
        {
            name: "Vikram Reddy",
            role: "Software Development Intern",
            rating: 4,
            review: "In these sessions we discussed many important topics. All topics are very useful in my programming languages. .NET was also used for my practice programs. So thankful for these classes and the practical knowledge gained."
        },
        {
            name: "Anjali Desai",
            role: "UI/UX Design Intern",
            rating: 4,
            review: "They taught us well. They provided us with PDFs and presentations during internship sessions and helped with resolving our doubts. The structured approach made learning design principles much easier."
        }
    ];

    // Circular Testimonial Data - Now using static HTML implementation
    // Keeping the data here for reference but not using it anymore

    // Populate Testimonials
    function populateTestimonials() {
        // Populate first slider
        const swiperWrapper = document.querySelector('.testimonialSwiper .swiper-wrapper');
        testimonials.forEach(testimonial => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';

            // Generate stars based on rating
            let starsHTML = '';
            for (let i = 0; i < testimonial.rating; i++) {
                starsHTML += '<i class="fas fa-star star"></i>';
            }

            slide.innerHTML = `
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <p class="testimonial-text mb-3">${testimonial.review}</p>
                        <div class="testimonial-author">
                            <div class="testimonial-name-rating">
                                <div>
                                    <h5 class="testimonial-name mb-1">${testimonial.name}</h5>
                                    <p class="testimonial-role mb-0">${testimonial.role}</p>
                                </div>
                                <div class="testimonial-rating">${starsHTML}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            swiperWrapper.appendChild(slide);
        });
        // Remove previously duplicated slides (if any)
        function removeDuplicates(wrapper, baseCount) {
            while (wrapper.children.length > baseCount) {
                wrapper.removeChild(wrapper.lastChild);
            }
        }
        removeDuplicates(swiperWrapper, testimonials.length);
        // Dynamically duplicate slides on both sides until wrapper is at least 5x container width
        // This ensures a truly continuous infinite loop with no empty spaces
        const swiperContainer = document.querySelector('.testimonialSwiper');
        function fillSwiperBothSides() {
            if (!swiperWrapper.children[0] || swiperWrapper.children[0].getBoundingClientRect().width === 0) {
                setTimeout(fillSwiperBothSides, 50);
                return;
            }
            // Prepend slides on the left and mark them - add more for a truly continuous loop
            let prependedWidth = 0;
            while (prependedWidth < swiperContainer.offsetWidth * 2) { // Double the prepended width
                for (let i = testimonials.length - 1; i >= 0 && prependedWidth < swiperContainer.offsetWidth * 2; i--) {
                    const clone = swiperWrapper.children[i].cloneNode(true);
                    clone.setAttribute('data-prepended', 'true');
                    swiperWrapper.insertBefore(clone, swiperWrapper.firstChild);
                    prependedWidth += clone.getBoundingClientRect().width;
                }
            }
            // Append slides on the right - add more for a truly continuous loop
            while (swiperWrapper.scrollWidth < swiperContainer.offsetWidth * 5) { // Increase from 3x to 5x
                Array.from(swiperWrapper.children).slice(0, testimonials.length).forEach(slide => {
                    swiperWrapper.appendChild(slide.cloneNode(true));
                });
            }
        }
        fillSwiperBothSides();

        // No longer populating the circular slider - using static HTML instead
    }

    // Call the populate function
    populateTestimonials();

    // Wait for duplication to finish, then start ticker animation for the first carousel
    setTimeout(function() {
        if (window.initAllTickers) window.initAllTickers();
    }, 200);

    // Re-initialize ticker on window resize for responsiveness
    window.addEventListener('resize', function() {
        // Remove previous transforms and inline widths for the first carousel only
        const testimonialWrapper = document.querySelector('.testimonialSwiper .swiper-wrapper');
        if (testimonialWrapper) {
            const currentTransform = testimonialWrapper.style.transform;
            if (currentTransform) {
                testimonialWrapper.style.transform = '';
            }
        }

        // Re-initialize the ticker for the first carousel
        setTimeout(function() {
            if (window.initAllTickers) window.initAllTickers();
        }, 200);
    });

    // Initialize Partners Carousel with Circular Flow
    new Swiper('.partners-carousel-swiper', {
        slidesPerView: 4, // Reduced from 4
        spaceBetween: 40, // Increased from 30
        loop: true,
        speed: 600,
        autoplay: {
            delay: 1500, // Increased from 1000 for better visibility
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.partners-carousel .swiper-button-next',
            prevEl: '.partners-carousel .swiper-button-prev',
        },
        effect: 'slide',
        grabCursor: true,
        centeredSlides: true, // Changed to true for better focus on logos
        loopAdditionalSlides: 5,
        breakpoints: {
            320: {
                slidesPerView: 1, // Show only one logo at a time on smallest screens
                spaceBetween: 20,
                centeredSlides: true,
            },
            480: {
                slidesPerView: 1, // Show only one logo for small mobile screens
                spaceBetween: 20,
                centeredSlides: true,
            },
            576: {
                slidesPerView: 2, // Show two logos on small tablets
                spaceBetween: 30,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 2, // Reduced from 3
                spaceBetween: 30,
                centeredSlides: true,
            },
            992: {
                slidesPerView: 3, // Reduced from 4
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 3, // Reduced from 5
                spaceBetween: 40,
            }
        },
    });

    // Initialize Certificate Slider with enhanced 3D effect
    new Swiper(".certificate-slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 40,
        grabCursor: true,
        loop: true,
        speed: 600,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".certificate-pagination",
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (_, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        navigation: {
            nextEl: ".certificate-button-next",
            prevEl: ".certificate-button-prev",
        },
        on: {
            init: function() {
                setTimeout(() => {
                    document.querySelectorAll('.certificate-slider .swiper-slide').forEach(slide => {
                        slide.style.transition = 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)';
                    });
                }, 100);
            },
        },
        breakpoints: {
            320: {
                spaceBetween: 20,
                coverflowEffect: {
                    rotate: 2,
                    depth: 50,
                    modifier: 1,
                }
            },
            576: {
                spaceBetween: 25,
                coverflowEffect: {
                    rotate: 3,
                    depth: 70,
                    modifier: 1.2,
                }
            },
            768: {
                spaceBetween: 30,
                coverflowEffect: {
                    rotate: 4,
                    depth: 80,
                    modifier: 1.3,
                }
            },
            992: {
                spaceBetween: 40,
                coverflowEffect: {
                    rotate: 5,
                    depth: 100,
                    modifier: 1.5,
                }
            }
        },
    });
});
