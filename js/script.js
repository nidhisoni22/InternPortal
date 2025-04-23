// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        // Add animation class to trigger entrance animations
        setTimeout(() => {
            heroSection.classList.add('animated');
        }, 100);

        // Add hover effects and tooltips to category bubbles
        const categoryBubbles = document.querySelectorAll('.category-bubble');
        categoryBubbles.forEach(bubble => {
            const category = bubble.getAttribute('data-category');

            // Create tooltip using Bootstrap
            new bootstrap.Tooltip(bubble, {
                title: category,
                placement: 'top',
                trigger: 'hover focus'
            });

            bubble.addEventListener('mouseenter', () => {
                bubble.style.transform = 'scale(1.2)';
            });

            bubble.addEventListener('mouseleave', () => {
                bubble.style.transform = 'scale(1)';
            });
        });
    }

    // Animated Headlines Rotation
    const headlines = document.querySelectorAll('.headline');
    let currentHeadline = 0;

    function rotateHeadlines() {
        // Remove active class from all headlines
        headlines.forEach(headline => headline.classList.remove('active'));

        // Add active class to current headline
        headlines[currentHeadline].classList.add('active');

        // Increment counter and reset if needed
        currentHeadline++;
        if (currentHeadline >= headlines.length) {
            currentHeadline = 0;
        }
    }

    // Set initial active headline
    if (headlines.length > 0) {
        headlines[0].classList.add('active');

        // Start rotation
        setInterval(rotateHeadlines, 3000);
    }
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
    const statElements = document.querySelectorAll('.stat-number, .key-stat-number');

    const animateCounter = (el) => {
        const originalText = el.textContent;
        let targetValue;
        let isLacs = false;
        let suffix = '+';

        // Check if this is a key-stat-number
        if (el.classList.contains('key-stat-number')) {
            // Get the small tag inside for suffix
            const smallTag = el.querySelector('small');
            const suffixText = smallTag ? smallTag.textContent : '';

            // Remove the small tag text from the original text
            const numText = originalText.replace(suffixText, '');

            // Parse the number
            targetValue = parseFloat(numText);

            // Check if it's a lacs value
            if (suffixText.includes('Lacs')) {
                isLacs = true;
                suffix = smallTag ? smallTag.outerHTML : '<small>+</small>';
            } else {
                suffix = smallTag ? smallTag.outerHTML : '<small>+</small>';
            }
        } else {
            // Original stats logic
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
        }

        // For non-decimal values
        const duration = 2000; // 2 seconds
        const fps = 60;
        const totalFrames = duration / (1000 / fps);

        let currentFrame = 0;
        let currentValue = 0;

        // Add animation class to the parent item
        const parentItem = el.closest('.stat-item') || el.closest('.key-stat');
        if (parentItem) {
            parentItem.classList.add('counting');
        }

        // Start with 0
        if (el.classList.contains('key-stat-number')) {
            // For key stats with HTML suffix
            el.innerHTML = isLacs ? '0' + suffix : '0' + suffix;
        } else {
            // For regular stats with text suffix
            el.textContent = '0';
            if (isLacs) {
                el.setAttribute('data-suffix', ' lacs+');
            } else {
                el.setAttribute('data-suffix', '+');
            }
        }

        const timer = setInterval(() => {
            currentFrame++;

            // Use easeOutQuad for smoother animation
            const progress = easeOutQuad(currentFrame / totalFrames);
            currentValue = targetValue * progress;

            // Format the display value
            if (el.classList.contains('key-stat-number')) {
                // For key stats with HTML suffix
                if (isLacs) {
                    // For decimal values, show one decimal place
                    el.innerHTML = currentValue.toFixed(1) + suffix;
                } else {
                    // For integers, round and add commas
                    el.innerHTML = Math.round(currentValue).toLocaleString() + suffix;
                }
            } else {
                // For regular stats with text suffix
                if (isLacs) {
                    // For decimal values, show one decimal place
                    el.textContent = currentValue.toFixed(1);
                    el.setAttribute('data-suffix', ' lacs+');
                } else {
                    // For integers, round and add commas
                    el.textContent = Math.round(currentValue).toLocaleString();
                    el.setAttribute('data-suffix', '+');
                }
            }

            // Check if animation is complete
            if (currentFrame >= totalFrames) {
                // Set the final exact value
                if (el.classList.contains('key-stat-number')) {
                    // For key stats with HTML suffix
                    if (isLacs) {
                        el.innerHTML = targetValue.toFixed(1) + suffix;
                    } else {
                        el.innerHTML = Math.round(targetValue).toLocaleString() + suffix;
                    }
                } else {
                    // For regular stats with text suffix
                    if (isLacs) {
                        el.textContent = targetValue.toFixed(1);
                        el.setAttribute('data-suffix', ' lacs+');
                    } else {
                        el.textContent = Math.round(targetValue).toLocaleString();
                        el.setAttribute('data-suffix', '+');
                    }
                }

                clearInterval(timer);
                // Remove animation class and add completed class
                if (parentItem) {
                    parentItem.classList.remove('counting');
                    parentItem.classList.add('counted');
                }
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

    // Circular Testimonial Data
    const circularTestimonials = [
        {
            name: "Kranthi",
            role: "Intern",
            rating: 3,
            review: "I had a great experience here and learn a very good information, It being helpful to my career."
        },
        {
            name: "Sandeep",
            role: "Software Developer Intern",
            rating: 4,
            review: "It was nice getting job from this platform. Even though they check our technical skills and conduct interview based on it."
        },
        {
            name: "Gaythri",
            role: " Web Developer Intern",
            rating: 5,
            review: "Through the intership I'm improve my skills and this company useful for me a lot i learned very easily"
        },
        {
            name: "Madhavi",
            role: ".NET Developer Intern",
            rating: 5,
            review: "NET Developer Interns helps us to build software using the .NET framework, JavaScript, JQuery, HTML5, and other control library."
        },
        {
            name: "Rahul Ammuri",
            role: "Intern",
            rating: 4.5,
            review: "The best company I've ever seen & experienced. They are explaining everything so patiently. So compassionate & kindness. I'm always Thankful to this company"
        }
    ];

    // Initialize Testimonials Swiper with left-to-right continuous movement (opposite of default)
    const testimonialSwiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        // Pagination removed for continuous movement
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 0, // Set to 0 for immediate movement
            disableOnInteraction: false,
            reverseDirection: false, // Default direction (right-to-left)
        },
        loop: true,
        effect: 'slide',
        speed: 5000, // Faster movement to match second carousel
        grabCursor: false, // Disable grab cursor for continuous movement
        autoHeight: false, // Disable auto height
        height: 300, // Fixed height
        centeredSlides: true,
        allowTouchMove: false, // Disable touch movement for continuous flow
        loopAdditionalSlides: 10, // Add more slides for smoother looping
        simulateTouch: false, // Disable touch simulation
        touchRatio: 0, // Disable touch ratio
        resistance: false, // Disable resistance
        watchSlidesProgress: true, // Watch slides progress
        watchSlidesVisibility: true, // Watch slides visibility
        observer: true, // Enable observer
        observeParents: true, // Enable parent observer
        on: {
            init: function() {
                // Force the carousel to start moving immediately
                this.autoplay.start();
                console.log('First carousel initialized and started');
            }
        }
    });

    // Initialize Circular Testimonials Swiper with right-to-left continuous movement
    const testimonialSwiperCircular = new Swiper('.testimonialSwiperCircular', {
        slidesPerView: 1,
        spaceBetween: 30,
        // Pagination removed for continuous movement
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 0, // Set to 0 for immediate movement
            disableOnInteraction: false,
            reverseDirection: true, // Left to right direction (opposite of first carousel)
        },
        loop: true,
        effect: 'slide',
        speed: 5000, // Faster movement
        grabCursor: false, // Disable grab cursor for continuous movement
        autoHeight: false, // Disable auto height
        height: 300, // Fixed height
        direction: 'horizontal',
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        allowTouchMove: false, // Disable touch movement for continuous flow
        loopAdditionalSlides: 10, // Add more slides for smoother looping
        simulateTouch: false, // Disable touch simulation
        touchRatio: 0, // Disable touch ratio
        resistance: false, // Disable resistance
        watchSlidesProgress: true, // Watch slides progress
        watchSlidesVisibility: true, // Watch slides visibility
        observer: true, // Enable observer
        observeParents: true, // Enable parent observer
        on: {
            init: function() {
                // Force the carousel to start moving immediately
                this.autoplay.start();
                console.log('Second carousel initialized and started');
            }
        }
    });

    // Both swipers move independently in opposite directions - first carousel moves left-to-right, second moves right-to-left
    // Force start both carousels to ensure they're moving
    setTimeout(function() {
        testimonialSwiper.autoplay.start();
        testimonialSwiperCircular.autoplay.start();
        console.log('Both carousels forced to start after timeout');
    }, 500);

    // Add event listener to ensure carousels keep moving even if user switches tabs
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            testimonialSwiper.autoplay.start();
            testimonialSwiperCircular.autoplay.start();
            console.log('Carousels restarted after tab visibility change');
        }
    });

    // Populate Testimonials
    function populateTestimonials() {
        // Populate first slider
        const swiperWrapper = document.querySelector('.testimonialSwiper .swiper-wrapper');

        // Add each testimonial twice to ensure enough slides for continuous movement
        for (let i = 0; i < 3; i++) { // Repeat 3 times for more slides
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
                            <p class="testimonial-text mb-4">${testimonial.review}</p>
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
        }

        // Populate circular slider with the new testimonials
        const circularSwiperWrapper = document.querySelector('.testimonialSwiperCircular .swiper-wrapper');

        // Add each circular testimonial twice to ensure enough slides for continuous movement
        for (let i = 0; i < 3; i++) { // Repeat 3 times for more slides
            circularTestimonials.forEach(testimonial => {
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
                            <p class="testimonial-text mb-4">${testimonial.review}</p>
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

                circularSwiperWrapper.appendChild(slide);
            });
        }
    }

    // Call the populate function
    populateTestimonials();

    // Initialize Partners Carousel with Circular Flow
    new Swiper('.partners-carousel-swiper', {
        slidesPerView: 4, // Reduced from 5
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
                slidesPerView: 1, // Reduced from 2 to show only one logo at a time on smallest screens
                spaceBetween: 20,
                centeredSlides: true,
            },
            480: {
                slidesPerView: 1, // Show only one logo for small mobile screens
                spaceBetween: 20,
                centeredSlides: true,
            },
            576: {
                slidesPerView: 2, // Reduced from 3
                spaceBetween: 30,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 3, // Reduced from 4
                spaceBetween: 30,
                centeredSlides: true,
            },
            992: {
                slidesPerView: 4, // Reduced from 5
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 5, // Reduced from 6
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
