// Function to set the active navigation link based on the current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();

    // Remove all active classes first
    document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Set active class based on current page
    if (currentPage === '' || currentPage === 'index.html') {
        document.getElementById('nav-home').classList.add('active');
    } else if (currentPage === 'internship.html') {
        document.getElementById('nav-internships').classList.add('active');
    } else if (currentPage === 'achievements.html') {
        document.getElementById('nav-testimonials').classList.add('active');
    } else if (currentPage === 'about.html') {
        document.getElementById('nav-about').classList.add('active');
    } else if (currentPage === 'contact.html') {
        document.getElementById('nav-contact').classList.add('active');
    }
}

// Load components when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the navbar
    const navbar = document.querySelector('.navbar');

    // Add scroll event listener
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
    // Add a style tag to ensure consistent navbar styling
    const styleTag = document.createElement('style');
    styleTag.textContent = `
        body {
            padding-top: 100px; /* Height of the navbar */
        }

        .navbar {
            background-color: transparent !important;
            box-shadow: none !important;
            padding: 20px 0;
            transition: all 0.3s ease;
            width: 100%;
            left: 0;
            right: 0;
            position: fixed;
            top: 0;
            z-index: 1030;
            display: block !important;
        }

        .navbar.scrolled .navbar-container {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
        }

        .navbar-container {
            background: #ffffff;
            border-radius: 50px;
            border: 1px solid rgba(0, 0, 0, 0.05);
            padding: 12px 25px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            width: 95%;
            max-width: 1140px;
            margin: 0 auto;
        }

        .navbar-brand {
            font-weight: 700;
            font-size: 1.5rem;
            color: #333;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
        }

        .navbar-brand img.navbar-logo {
            height: 38px;
            width: auto;
            transition: transform 0.3s ease;
        }

        @media (max-width: 576px) {
            .navbar-brand img.navbar-logo {
                height: 40px;
            }
            .navbar-brand .brand-text {
                font-size: 1.2rem;
            }
        }

        .navbar-brand:hover {
            color: var(--primary-color);
        }

        .navbar-brand:hover img.navbar-logo {
            transform: scale(1.05);
        }

        /* Add a subtle pulse animation for the logo on page load */
        @keyframes logoPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
        }

        .navbar-logo-animation {
            animation: logoPulse 1.5s ease-in-out;
        }

        /* Footer logo styles */
        .footer-logo a {
            display: flex;
            align-items: center;
        }

        .footer-logo-img {
            height: 48px;
            width: auto;
            transition: transform 0.3s ease;
        }

        .footer-logo a:hover .footer-logo-img {
            transform: scale(1.05);
        }

        @media (max-width: 576px) {
            .footer-logo-img {
                height: 40px;
            }
            .footer-logo a span {
                font-size: 1.5rem;
            }
        }

        .navbar-nav .nav-link {
            color: #555 !important;
            font-weight: 500;
            padding: 0.5rem 0.8rem !important;
            transition: color 0.3s ease;
            font-size: 0.95rem;
        }

        .navbar-nav .nav-link:hover, .navbar-nav .nav-link.active {
            color: var(--primary-color) !important;
        }

        .navbar-nav .nav-link.active {
            font-weight: 600;
            position: relative;
        }

        .navbar-nav .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 3px;
            background-color: var(--primary-color);
            border-radius: 10px;
        }

        /* Social icons styles removed */

        .dropdown-menu {
            border: none;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            border-radius: 10px;
            margin-top: 10px;
        }

        .dropdown-item:hover {
            background-color: #f0f7ff;
            color: #0d6efd;
        }

        @media (max-width: 991.98px) {
            body {
                padding-top: 90px;
            }

            .navbar {
                padding: 15px 0;
            }

            .navbar > .container {
                display: flex;
                justify-content: center;
                width: 100%;
                padding: 0 15px;
                max-width: 100%;
            }

            .navbar-container {
                border-radius: 20px;
                padding: 10px 20px;
                width: 95%;
                max-width: 100%;
            }

            .navbar-collapse {
                background-color: #ffffff;
                padding: 15px;
                border-radius: 15px;
                margin-top: 15px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
                width: 100%;
            }

            .navbar-nav {
                margin-bottom: 15px;
                width: 100%;
                text-align: center;
            }

            /* Social icons media query removed */

            .navbar-toggler {
                padding: 4px 8px;
                font-size: 1rem;
                border: none;
                background-color: #f8f9fa;
                border-radius: 8px;
            }
        }
    `;
    document.head.appendChild(styleTag);
    // Insert navbar HTML
    document.getElementById('navbar-container').innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: transparent; box-shadow: none; display: block !important;" id="mainNavbar">
        <div class="container d-flex justify-content-center">
            <div class="navbar-container d-flex flex-wrap justify-content-between align-items-center" style="background: #ffffff; border-radius: 50px; padding: 10px 25px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); width: 95%; max-width: 1140px; display: flex !important;">
            <a class="navbar-brand fw-bold d-flex align-items-center" href="index.html">
                <img src="img/logos/E@V.png" alt="E@V Logo" class="navbar-logo me-3" style="height: 38px; width: auto; transition: all 0.3s ease; vertical-align: middle;">
                <span class="brand-text">InternPortal</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" aria-labelledby="navbarToggler">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" id="nav-home" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-internships" href="internship.html">Internships</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-testimonials" href="achievements.html">Achievements</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-about" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-contact" href="contact.html">Contact</a>
                    </li>

                </ul>
            </div>
            </div>
        </div>
    </nav>
    `;

    // Insert footer HTML
    document.getElementById('footer-container').innerHTML = `
    <!-- Footer -->
    <footer class="footer py-5 bg-dark text-white" style="width: 100%; position: relative; z-index: 10; bottom: 0; left: 0; right: 0;">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <h3 class="footer-logo">
                        <a href="index.html" style="color: white; text-decoration: none;" class="d-flex align-items-center">
                            <img src="img/logos/E@V.png" alt="E@V Logo" class="footer-logo-img me-3" style="height: 48px; width: auto;">
                            <span>InternPortal</span>
                        </a>
                    </h3>
                    <p>Connecting talented students with top companies for meaningful internship experiences that shape future careers</p>
                </div>
                <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                    <h5>For Students</h5>
                    <ul class="footer-links">
                        <li><a href="internship.html">Browse Internships</a></li>
                        <li><a href="#">Resume Builder</a></li>
                        <li><a href="#">Interview Prep</a></li>
                        <li><a href="#">Career Resources</a></li>
                        <li><a href="achievements.html">Achievements</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                    <h5>Company</h5>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4">
                    <h5>Legal</h5>
                    <ul class="footer-links">
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>
            </div>
            <hr class="mt-4 mb-4">
            <div class="row">
                <div class="col-12 text-center">
                    <p class="mb-0">© 2023 InternPortal. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    `;

    // Set active nav link
    setActiveNavLink();

    // Add animation to the logos
    setTimeout(() => {
        // Navbar logo animation
        const navbarLogo = document.querySelector('.navbar-logo');
        if (navbarLogo) {
            navbarLogo.classList.add('navbar-logo-animation');
        }

        // Footer logo animation
        const footerLogo = document.querySelector('.footer-logo-img');
        if (footerLogo) {
            footerLogo.classList.add('navbar-logo-animation');
        }
    }, 500);

    // Ensure Bootstrap's collapse functionality works properly
    setTimeout(() => {
        // Make sure Bootstrap is loaded
        if (typeof bootstrap !== 'undefined') {
            // Initialize all collapse elements
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse) {
                // Create a collapse instance
                const collapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });

                // Add event listener to close the menu when clicking outside
                document.addEventListener('click', function(e) {
                    const navbarToggler = document.querySelector('.navbar-toggler');

                    if (navbarCollapse.classList.contains('show') &&
                        !navbarCollapse.contains(e.target) &&
                        !navbarToggler.contains(e.target)) {
                        collapse.hide();

                        // Update aria-expanded attribute
                        if (navbarToggler) {
                            navbarToggler.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                // Fix for mobile menu toggle not working
                const navbarToggler = document.querySelector('.navbar-toggler');
                if (navbarToggler) {
                    navbarToggler.addEventListener('click', function() {
                        collapse.toggle();
                    });
                }
            }
        } else {
            console.warn('Bootstrap is not loaded. Navbar toggle may not work properly.');

            // Fallback for when Bootstrap is not loaded
            const navbarToggler = document.querySelector('.navbar-toggler');
            if (navbarToggler) {
                navbarToggler.addEventListener('click', function() {
                    const navbarCollapse = document.getElementById('navbarNav');
                    if (navbarCollapse) {
                        navbarCollapse.classList.toggle('show');
                        const expanded = navbarToggler.getAttribute('aria-expanded') === 'true' || false;
                        navbarToggler.setAttribute('aria-expanded', !expanded);
                    }
                });
            }
        }

        // Add fixed positioning to navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.add('fixed-top');
        }

        // Ensure navbar is centered on all pages
        const adjustNavbar = () => {
            const container = document.querySelector('.navbar > .container');
            if (container) {
                container.style.display = 'flex';
                container.style.justifyContent = 'center';
                container.style.width = '100%';
            }
        };

        // Run on load and on resize
        adjustNavbar();
        window.addEventListener('resize', adjustNavbar);

        // Call setActiveNavLink to highlight the current page in the navbar
        setActiveNavLink();

        // Make sure the navbar is visible
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.style.display = 'block';
        }
    }, 100);
});
