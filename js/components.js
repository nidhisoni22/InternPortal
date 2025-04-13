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

        .social-icons a {
            color: #555;
            margin-left: 12px;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        .social-icons a:hover {
            color: var(--primary-color);
        }

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

            .social-icons.d-none.d-lg-flex {
                display: none !important;
            }

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
            <div class="navbar-container d-flex flex-wrap justify-content-between align-items-center" style="background: #ffffff; border-radius: 50px; padding: 12px 25px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); width: 95%; max-width: 1140px; display: flex !important;">
            <a class="navbar-brand fw-bold" href="index.html">InternPortal</a>
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
                <div class="social-icons d-none d-lg-flex">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            </div>
        </div>
    </nav>
    `;

    // Insert footer HTML
    document.getElementById('footer-container').innerHTML = `
    <!-- Footer -->
    <footer class="footer py-5 bg-dark text-white">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <h3 class="footer-logo">InternPortal</h3>
                    <p>Connecting talented students with top companies for meaningful internship experiences that shape future careers</p>
                    <div class="social-icons mt-3">
                        <a href="#" class="me-2"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="me-2"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                    <h5>For Students</h5>
                    <ul class="footer-links">
                        <li><a href="internship.html">Browse Internships</a></li>
                        <li><a href="#">Resume Builder</a></li>
                        <li><a href="#">Interview Prep</a></li>
                        <li><a href="#">Career Resources</a></li>
                        <li><a href="#">Success Stories</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                    <h5>For Employers</h5>
                    <ul class="footer-links">
                        <li><a href="#">Post Internships</a></li>
                        <li><a href="#">Employer Dashboard</a></li>
                        <li><a href="#">Talent Search</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Success Stories</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                    <h5>Company</h5>
                    <ul class="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4">
                    <h5>Legal</h5>
                    <ul class="footer-links">
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>
            </div>
            <hr class="mt-4 mb-4">
            <div class="row">
                <div class="col-md-6 mb-3 mb-md-0">
                    <p class="mb-0">© 2023 InternPortal. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <p class="mb-0">Made with <i class="fas fa-heart text-danger"></i> for students worldwide</p>
                </div>
            </div>
        </div>
    </footer>
    `;

    // Set active nav link
    setActiveNavLink();

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
