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
    // Add a style tag to ensure consistent navbar styling
    const styleTag = document.createElement('style');
    styleTag.textContent = `
        body {
            padding-top: 100px; /* Height of the navbar */
            border-top: none;
        }
        /* Target only the line below navbar */
        .navbar::after, .navbar::before, .navbar .container-fluid::after, .navbar .container-fluid::before {
            display: none !important;
            height: 0 !important;
            border: none !important;
            border-bottom: none !important;
            border-top: none !important;
            box-shadow: none !important;
            opacity: 0 !important;
        }
        /* Fix for the line below navbar */
        body {
            border-top: none !important;
        }
        .fixed-top, .navbar-fixed-top {
            border: none !important;
            border-bottom: none !important;
            border-top: none !important;
            box-shadow: none !important;
        }
        .navbar.fixed-top {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1030;
            background-color: transparent;
            padding: 20px 0;
            box-shadow: none;
            border-bottom: none;
        }
        .navbar-container {
            background: #ffffff;
            border-radius: 50px;
            border: 1px solid rgba(0, 0, 0, 0.05);
            padding: 12px 25px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            width: auto;
            max-width: 1200px;
            margin: 0 auto;
            display: inline-flex;
            border-bottom: none;
        }
        /* Remove any possible borders */
        .navbar, .navbar-container, .container-fluid, .navbar-collapse, .navbar-nav, .nav-item, .nav-link {
            border-bottom: none !important;
        }
        /* Override Bootstrap and other CSS */
        html, body, .navbar, .navbar-container, .container-fluid, .navbar-collapse, .navbar-nav, .nav-item, .nav-link, .navbar-brand, .navbar-toggler, .fixed-top, .navbar-fixed-top {
            border: none !important;
            border-bottom: none !important;
            border-top: none !important;
            outline: none !important;
        }
        /* Remove any horizontal lines */
        body::before, body::after, .navbar::before, .navbar::after, .container-fluid::before, .container-fluid::after {
            display: none !important;
            content: none !important;
            border: none !important;
            border-bottom: none !important;
        }
        @media (max-width: 991.98px) {
            .navbar-container {
                border-radius: 20px;
                padding: 10px 20px;
            }
            body {
                padding-top: 90px;
            }
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
        .social-icons {
            display: flex;
            align-items: center;
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
    `;
    document.head.appendChild(styleTag);
    // Insert navbar HTML
    document.getElementById('navbar-container').innerHTML = `
    <!-- Navbar -->
    <div style="position: fixed; top: 0; left: 0; right: 0; z-index: 1030; background: transparent; border: none; border-bottom: none; box-shadow: none;">
    <nav class="navbar navbar-expand-lg navbar-light" style="border: none !important; border-bottom: none !important; border-top: none !important; box-shadow: none !important; outline: none !important; background: transparent;">
        <div class="container-fluid px-4" style="border: none !important; border-bottom: none !important;">
            <div class="navbar-container d-flex flex-wrap justify-content-between align-items-center mx-auto" style="min-width: 90%; border: none !important; border-bottom: none !important;">
                <a class="navbar-brand fw-bold" href="index.html">InternPortal</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
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
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </div>
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
                        <li><a href="#">Browse Internships</a></li>
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

    // Remove any borders that might be added by other CSS
    setTimeout(() => {
        // Add a specific style to override any potential border
        const style = document.createElement('style');
        style.textContent = `
            body { border-top: none !important; }
            .navbar, .navbar-container, .container-fluid, nav, header, .fixed-top {
                border: none !important;
                border-bottom: none !important;
                border-top: none !important;
                box-shadow: none !important;
            }
            /* Target only the line below navbar */
            .navbar::after, .navbar::before,
            .navbar .container-fluid::after, .navbar .container-fluid::before {
                display: none !important;
                height: 0 !important;
                border: none !important;
                content: none !important;
            }
        `;
        document.head.appendChild(style);

        // Direct style manipulation - only target navbar elements
        document.querySelectorAll('.navbar, .navbar-container, .navbar-collapse, .navbar-nav, .nav-item, .nav-link').forEach(el => {
            el.style.border = 'none';
            el.style.borderBottom = 'none';
            el.style.borderTop = 'none';
            el.style.boxShadow = 'none';
        });

        // Only remove horizontal lines in the navbar area
        const navbarArea = document.querySelector('.navbar');
        if (navbarArea) {
            const horizontalLines = navbarArea.querySelectorAll('hr, .divider');
            horizontalLines.forEach(line => {
                line.style.display = 'none';
            });
        }
    }, 100);
});
