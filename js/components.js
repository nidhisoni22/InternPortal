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
            padding-top: 80px; /* Height of the navbar */
            font-family: 'Inter', sans-serif;
        }

        .navbar {
            background-color: transparent !important;
            box-shadow: none !important;
            padding: 12px 0;
            transition: all 0.3s ease;
            width: 100%;
            left: 0;
            right: 0;
            position: fixed;
            top: 0;
            z-index: 1030;
            display: block !important;
        }

        /* Navbar on scroll */
        .navbar.scrolled {
            padding: 8px 0;
        }

        .navbar.scrolled .navbar-container {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
        }

        .navbar-container {
            background: white;
            border-radius: 12px;
            border: none;
            padding: 8px 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            width: 80%;
            max-width: 900px;
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

        @keyframes logoGlow {
            0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); filter: brightness(1); }
            50% { text-shadow: 0 0 15px rgba(255, 255, 255, 0.6); filter: brightness(1.1); }
            100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); filter: brightness(1); }
        }

        .navbar-logo-animation {
            animation: logoPulse 1.5s ease-in-out;
        }

        .footer-logo-animation {
            animation: logoGlow 3s infinite ease-in-out;
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

        /* Footer link hover effects */
        .footer-links a:hover {
            color: #ffffff !important;
            transform: translateX(5px);
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            padding-left: 8px !important;
        }



        /* Footer bottom links hover effects */
        .row.align-items-center a:hover {
            color: #ffffff !important;
            text-decoration: underline !important;
        }

        @media (max-width: 576px) {
            .footer-logo-img {
                height: 60px;
            }
            .footer-logo a span {
                font-size: 1.8rem;
            }
        }

        .navbar-nav .nav-link {
            color: #444 !important;
            font-weight: 500;
            padding: 0.4rem 0.8rem !important;
            transition: all 0.3s ease;
            font-size: 0.95rem;
            font-family: 'Space Grotesk', sans-serif;
            letter-spacing: 0.3px;
            margin: 0 3px;
            border-radius: 6px;
            position: relative;
            z-index: 1;
        }

        .navbar-nav .nav-link::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 100%;
            background: rgba(13, 110, 253, 0.08);
            border-radius: 6px;
            z-index: -1;
            transition: all 0.3s ease;
        }

        .navbar-nav .nav-link:hover::before, .navbar-nav .nav-link.active::before {
            width: 100%;
        }

        .navbar-nav .nav-link:hover, .navbar-nav .nav-link.active {
            color: #0d6efd !important;
            transform: translateY(-1px);
        }

        .navbar-nav .nav-link.active {
            font-weight: 600;
            position: relative;
            color: #0d6efd !important;
            background-color: rgba(13, 110, 253, 0.08);
        }

        .navbar-nav .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 2px;
            background: #0d6efd;
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
            <div class="navbar-container d-flex flex-wrap justify-content-between align-items-center" style="background: white; border-radius: 12px; padding: 8px 15px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); width: 80%; max-width: 900px; display: flex !important; position: relative; overflow: hidden;">
                <!-- Subtle accent elements -->
                <div style="position: absolute; top: -20px; right: -20px; width: 80px; height: 80px; background: radial-gradient(circle, rgba(13, 110, 253, 0.05) 0%, rgba(13, 110, 253, 0) 70%); border-radius: 50%;"></div>
                <div style="position: absolute; bottom: -30px; left: 30%; width: 100px; height: 100px; background: radial-gradient(circle, rgba(13, 110, 253, 0.03) 0%, rgba(13, 110, 253, 0) 70%); border-radius: 50%;"></div>
            <a class="navbar-brand fw-bold d-flex align-items-center" href="index.html">
                <img src="img/logos/InternBoot.png" alt="InternPortal Logo" class="navbar-logo me-2" style="height: 40px; width: auto; transition: all 0.3s ease; vertical-align: middle; filter: brightness(1.2);">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="border-color: rgba(0, 0, 0, 0.1);">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" aria-labelledby="navbarToggler">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" id="nav-home" href="index.html" style="color: #0d6efd; font-weight: 500; padding: 6px 12px; margin: 0 2px; border-radius: 6px; font-family: 'Space Grotesk', sans-serif; font-size: 0.95rem; letter-spacing: 0.3px;">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-internships" href="internship.html" style="color: #444; font-weight: 500; padding: 6px 12px; margin: 0 2px; border-radius: 6px; font-family: 'Space Grotesk', sans-serif; font-size: 0.95rem; letter-spacing: 0.3px;">Internships</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-testimonials" href="achievements.html" style="color: #444; font-weight: 500; padding: 6px 12px; margin: 0 2px; border-radius: 6px; font-family: 'Space Grotesk', sans-serif; font-size: 0.95rem; letter-spacing: 0.3px;">Achievements</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-about" href="about.html" style="color: #444; font-weight: 500; padding: 6px 12px; margin: 0 2px; border-radius: 6px; font-family: 'Space Grotesk', sans-serif; font-size: 0.95rem; letter-spacing: 0.3px;">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="nav-contact" href="contact.html" style="color: #444; font-weight: 500; padding: 6px 12px; margin: 0 2px; border-radius: 6px; font-family: 'Space Grotesk', sans-serif; font-size: 0.95rem; letter-spacing: 0.3px;">Contact</a>
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
    <footer class="footer py-5" style="width: 100%; position: relative; z-index: 10; bottom: 0; left: 0; right: 0; background: linear-gradient(135deg, #5eacff 0%, #4a90e2 100%); box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.08); overflow: hidden; padding-top: 3rem;">
        <!-- Wave separator at the top -->
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 30px; background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAsNDYuMjlDNDcuNzksMjQuMDksMTAzLjU5LDE0LjEyLDE1OCwxOC4yOWM3MC4zNiw1LjM3LDEzNi4zMywzMy4zMSwyMDYuOCwzNy41YzczLjg0LDQuMiwyMTIuNSwtNDEuODksMzE2LjM2LC0xNy43M2M2OS4yNywxOCwxMzguMyw0LjY3LDIwOS40LDE2LjQ3YzM2LjE1LDYsNjkuODUsMTcuODQsMTA0LjQ1LDI5LjM0YzkyLjU0LDMwLjc5LDIwNS4xNyw3MC4xOSwyOTIuMzcsLTEuNDdDMTI4Ny4xNCw0Ni40OCwxMjk4LjYxLDQwLjI3LDEzMDAsNDBWMEgwVjQ2LjI5WiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPjwvcGF0aD48L3N2Zz4='); background-size: cover; background-position: center bottom; transform: rotate(180deg); z-index: 1;"></div>

        <!-- Subtle pattern overlay -->
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0ibm9uZSIvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIi8+Cjwvc3ZnPg=='); opacity: 0.6; z-index: 0;"></div>
        <!-- Modern geometric accent -->
        <div style="position: absolute; top: 20px; right: 5%; width: 150px; height: 150px; background: rgba(255, 255, 255, 0.05); border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; z-index: 0; animation: float-shape 15s infinite ease-in-out;"></div>
        <div style="position: absolute; bottom: 40px; left: 5%; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.05); border-radius: 42% 58% 65% 35% / 30% 42% 58% 70%; z-index: 0; animation: float-shape 12s infinite ease-in-out reverse;"></div>
        <div class="container" style="position: relative; z-index: 1;">
            <div class="row">
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <h3 class="footer-logo">
                        <a href="index.html" style="color: white; text-decoration: none;" class="d-flex align-items-center">
                            <img src="img/logos/InternBoot.png" alt="InternPortal Logo" class="footer-logo-img me-3" style="height: 100px; width: auto; filter: brightness(1.2) contrast(1.1);">
                            
                        </a>
                    </h3>
                    <p style="color: rgba(255, 255, 255, 0.95); margin-top: 1.5rem; font-size: 1.05rem; max-width: 90%;">Connecting talented students with top companies for meaningful internship experiences that shape future careers</p>
                </div>
                <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                    <h5 style="color: #ffffff; font-weight: 700; position: relative; display: inline-block; margin-bottom: 1.2rem;">
                        For Students
                        <span style="position: absolute; bottom: -8px; left: 0; width: 40px; height: 3px; background: rgba(255, 255, 255, 0.3); border-radius: 10px;"></span>
                    </h5>
                    <ul class="footer-links" style="list-style: none; padding-left: 0;">
                        <li><a href="internship.html" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Browse Internships</a></li>
                        <li><a href="#" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Resume Builder</a></li>
                        <li><a href="#" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Interview Prep</a></li>
                        <li><a href="#" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Career Resources</a></li>
                        <li><a href="achievements.html" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Achievements</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
                    <h5 style="color: #ffffff; font-weight: 700; position: relative; display: inline-block; margin-bottom: 1.2rem;">
                        Company
                        <span style="position: absolute; bottom: -8px; left: 0; width: 40px; height: 3px; background: rgba(255, 255, 255, 0.3); border-radius: 10px;"></span>
                    </h5>
                    <ul class="footer-links" style="list-style: none; padding-left: 0;">
                        <li><a href="index.html" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Home</a></li>
                        <li><a href="about.html" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>About Us</a></li>
                        <li><a href="#" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Blog</a></li>
                        <li><a href="#" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Press</a></li>
                        <li><a href="contact.html" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-4">
                    <h5 style="color: #ffffff; font-weight: 700; position: relative; display: inline-block; margin-bottom: 1.2rem;">
                        Legal
                        <span style="position: absolute; bottom: -8px; left: 0; width: 40px; height: 3px; background: rgba(255, 255, 255, 0.3); border-radius: 10px;"></span>
                    </h5>
                    <ul class="footer-links" style="list-style: none; padding-left: 0;">
                        <li><a href="#" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Terms of Service</a></li>
                        <li><a href="#" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Privacy Policy</a></li>
                        <li><a href="#" style="color: rgba(255, 255, 255, 0.9); transition: all 0.3s ease; text-decoration: none; display: block; padding: 6px 0; border-radius: 4px;"><i class="fas fa-chevron-right me-2" style="font-size: 0.7rem; opacity: 0.7;"></i>Accessibility</a></li>
                    </ul>


                </div>
            </div>
            <hr class="mt-4 mb-4" style="background-color: rgba(255, 255, 255, 0.3); opacity: 0.5;">
            <div class="row align-items-center">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <p class="mb-0" style="color: rgba(255, 255, 255, 0.9); font-weight: 500;">© 2025 <span style="font-weight: 700;">InternBoot</span>. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <p class="mb-0" style="color: rgba(255, 255, 255, 0.8); font-size: 0.9rem;">
                        <a href="contact.html" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; margin: 0 8px; transition: all 0.3s ease;">Support</a> |
                        <a href="contact.html" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; margin: 0 8px; transition: all 0.3s ease;">FAQ</a> |
                        <a href="#" style="color: rgba(255, 255, 255, 0.9); text-decoration: none; margin: 0 8px; transition: all 0.3s ease;">Sitemap</a>
                    </p>
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

        // Footer logo text animation
        const footerLogoText = document.querySelector('.footer-logo a span');
        if (footerLogoText) {
            footerLogoText.classList.add('footer-logo-animation');
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
