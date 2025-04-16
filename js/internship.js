// Internship data - this would typically come from a backend API
const internships = [
    {
        id: 1,
        title: "Data Scientist",
        duration: "3 Months",
        category: "Data Science",
        description: "A Data Scientist Internship offers hands-on experience in extracting insights from complex datasets using statistical analysis, machine learning, and data visualization. You'll work on real-world projects, develop predictive models, and communicate findings to drive business decisions.",
        icon: "fas fa-brain"
    },
    {
        id: 2,
        title: "Artificial Intelligence (AI) Engineer",
        duration: "6 Months",
        category: "Artificial Intelligence",
        description: "An AI Engineer Internship provides experience in developing intelligent systems using machine learning, deep learning, and neural networks. You'll work on cutting-edge AI applications, implement algorithms, and contribute to solutions that mimic human intelligence.",
        icon: "fas fa-robot"
    },
    {
        id: 3,
        title: "Cloud Architect",
        duration: "6 Months",
        category: "Cloud Computing",
        description: "A Cloud Architect Internship offers experience in designing and implementing cloud infrastructure. You'll work with platforms like AWS, Azure, or Google Cloud to develop scalable, secure, and cost-effective cloud solutions while gaining expertise in cloud migration and optimization.",
        icon: "fas fa-cloud"
    },
    {
        id: 4,
        title: "Cybersecurity Specialist",
        duration: "6 Months",
        category: "Cybersecurity",
        description: "A Cybersecurity Specialist Internship focuses on protecting organizations from digital threats. You'll gain experience in vulnerability assessments, threat analysis, security policy development, and compliance monitoring while developing skills to safeguard critical information systems.",
        icon: "fas fa-shield-alt"
    },
    {
        id: 5,
        title: "Product Manager",
        duration: "6 Months",
        category: "Product Management",
        description: "A Product Manager Internship provides hands-on experience in managing product lifecycles. You'll define roadmaps, conduct market research, create specifications, collaborate with cross-functional teams, gather user feedback, and track KPIs to ensure successful product development.",
        icon: "fas fa-tasks"
    },
    {
        id: 6,
        title: "Blockchain Developer",
        duration: "6 Months",
        category: "Blockchain Development",
        description: "A Blockchain Developer Internship offers experience in developing decentralized applications and smart contracts. You'll work with blockchain platforms like Ethereum, Solana, or Hyperledger to create secure, transparent, and efficient distributed systems for various industries.",
        icon: "fas fa-link"
    },
    {
        id: 7,
        title: "Investment Banker",
        duration: "6 Months",
        category: "Finance",
        description: "An Investment Banker Internship provides exposure to corporate finance, mergers and acquisitions, and capital markets. You'll assist with financial modeling, market analysis, due diligence, and pitch book preparation while developing skills in valuation and strategic advisory.",
        icon: "fas fa-chart-line"
    },
    {
        id: 8,
        title: "Digital Marketing Specialist",
        duration: "6 Months",
        category: "Marketing",
        description: "A Digital Marketing Specialist Internship offers experience in online marketing, SEO, SEM, social media, and analytics. You'll help plan and execute campaigns, analyze data, and optimize strategies to grow brand presence and engagement.",
        icon: "fas fa-bullhorn"
    },
    {
        id: 9,
        title: "Chartered Accountant",
        duration: "6 Months",
        category: "Accounting",
        description: "A Chartered Accountant Internship provides hands-on experience in accounting, auditing, taxation, and financial reporting. You'll work on compliance, analyze financial statements, and assist in audits for various clients.",
        icon: "fas fa-calculator"
    },
    {
        id: 10,
        title: "Full-Stack Developer",
        duration: "6 Months",
        category: "Software Development",
        description: "A Full-Stack Developer Internship provides exposure to both frontend and backend development. You'll work with modern frameworks, databases, and APIs to build robust, scalable web applications.",
        icon: "fas fa-laptop-code"
    },
    {
        id: 11,
        title: "Data Analyst",
        duration: "6 Months",
        category: "Data Analysis",
        description: "A Data Analyst Internship offers experience in collecting, processing, and analyzing data to support business decisions. You'll use tools like Excel, SQL, and BI platforms to create reports and dashboards.",
        icon: "fas fa-chart-bar"
    },
    {
        id: 12,
        title: "UX Designer",
        duration: "6 Months",
        category: "Design",
        description: "A UX Designer Internship provides experience in designing user interfaces and improving user experiences. You'll conduct research, create wireframes, and collaborate with developers to deliver intuitive digital products.",
        icon: "fas fa-pencil-ruler"
    },
    {
        id: 13,
        title: "Project Manager",
        duration: "6 Months",
        category: "Project Management",
        description: "A Project Manager Internship offers hands-on experience in planning, executing, and closing projects. You'll coordinate teams, manage resources, track progress, and ensure project goals are met on time.",
        icon: "fas fa-code-branch"
    },
    {
        id: 14,
        title: "Product Manager",
        duration: "6 Months",
        category: "Product Management",
        description: "A Product Manager Internship provides hands-on experience in managing product lifecycles. You'll define roadmaps, conduct market research, create specifications, collaborate with cross-functional teams, gather user feedback, and track KPIs to ensure successful product development.",
        icon: "fas fa-tasks"
    }
];
   

// Items per page
const itemsPerPage = 7;
let currentPage = 1;

// Get URL parameters to determine current page
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('page')) {
    currentPage = parseInt(urlParams.get('page'));
}

// Filter and sort state
let filters = {
    category: 'All Categories',
    duration: 'Any Duration'
};

let sortBy = 'Newest First';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load filter values from URL or localStorage
    loadFilterState();

    // Set up event listeners for filters
    setupFilterListeners();

    // Set up event listeners for sorting
    setupSortListeners();

    // Display internships based on current filters and sort
    displayInternships();

    // Initialize Certificate Slider
    initCertificateSlider();
});

// Initialize Certificate Slider
function initCertificateSlider() {
    const certificateSlider = new Swiper(".certificate-slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 25,
        grabCursor: true,
        loop: true,
        speed: 800,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".certificate-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        navigation: {
            nextEl: ".certificate-button-next",
            prevEl: ".certificate-button-prev",
        },
        breakpoints: {
            320: {
                spaceBetween: 15,
            },
            576: {
                spaceBetween: 20,
            },
            768: {
                spaceBetween: 25,
            },
        },
    });
}

// Load filter state from URL parameters or localStorage
function loadFilterState() {
    // Check URL parameters first
    if (urlParams.has('category')) {
        filters.category = urlParams.get('category');
    } else if (localStorage.getItem('internshipFilters')) {
        // Fall back to localStorage if available
        filters = JSON.parse(localStorage.getItem('internshipFilters'));
    }

    // Set form values based on filters
    document.getElementById('categoryFilter').value = filters.category;
    document.getElementById('durationFilter').value = filters.duration;

    // Set sort dropdown value
    if (urlParams.has('sort')) {
        sortBy = urlParams.get('sort');
    } else if (localStorage.getItem('internshipSort')) {
        sortBy = localStorage.getItem('internshipSort');
    }

    // Update sort dropdown text
    const sortDropdown = document.getElementById('sortDropdown');
    if (sortDropdown) {
        sortDropdown.textContent = sortBy;
    }
}

// Set up event listeners for filter controls
function setupFilterListeners() {
    // Filter form submission - only apply filters when the button is clicked
    const filterForm = document.querySelector('.filter-section form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get all filter values when form is submitted
            const categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) {
                filters.category = categoryFilter.value;
            }

            const durationFilter = document.getElementById('durationFilter');
            if (durationFilter) {
                filters.duration = durationFilter.value;
            }

            // Stipend and work from home filters removed

            // Save filter state and navigate to page 1
            saveFilterState();
            navigateToPage(1);
        });
    }
}

// Set up event listeners for sorting
function setupSortListeners() {
    // Sort dropdown items
    const sortItems = document.querySelectorAll('.dropdown-item');
    sortItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            sortBy = this.textContent;
            localStorage.setItem('internshipSort', sortBy);

            // Update dropdown button text
            const sortDropdown = document.getElementById('sortDropdown');
            if (sortDropdown) {
                sortDropdown.textContent = sortBy;
            }

            // Re-display internships with new sort
            displayInternships();
        });
    });
}

// Save filter state to localStorage
function saveFilterState() {
    localStorage.setItem('internshipFilters', JSON.stringify(filters));
}

// Navigate to a specific page with current filters and sort
function navigateToPage(page) {
    // Build query string with filters and sort
    let queryParams = new URLSearchParams();
    queryParams.set('page', page);

    if (filters.category !== 'All Categories') {
        queryParams.set('category', filters.category);
    }

    if (filters.duration !== 'Any Duration') {
        queryParams.set('duration', filters.duration);
    }

    // Stipend and work from home filters removed

    if (sortBy !== 'Newest First') {
        queryParams.set('sort', sortBy);
    }

    // Determine which page file to navigate to
    let pageFile = 'internship.html';
    if (page === 2) {
        pageFile = 'internship-page2.html';
    } else if (page === 3) {
        pageFile = 'internship-page3.html';
    }

    // Navigate to the page with query parameters
    window.location.href = pageFile + '?' + queryParams.toString();
}

// Filter internships based on current filters
function filterInternships() {
    return internships.filter(internship => {
        // Category filter
        if (filters.category !== 'All Categories') {
            // Handle consolidated categories
            if (filters.category === 'Digital Marketing' &&
                (internship.category === 'Digital Marketing' || internship.category === 'Social Media Marketing')) {
                // Allow both Digital Marketing and Social Media Marketing when Digital Marketing is selected
            } else if (filters.category === 'Sales and Marketing' &&
                (internship.category === 'Sales and Marketing' || internship.category === 'Digital Marketing' ||
                 internship.category === 'Social Media Marketing')) {
                // Allow Sales and Marketing, Digital Marketing, and Social Media Marketing when Sales and Marketing is selected
            } else if (internship.category !== filters.category) {
                return false;
            }
        }



        // Duration filter
        if (filters.duration !== 'Any Duration') {
            const months = parseInt(internship.duration);
            if (filters.duration === '1-3 Months' && (months < 1 || months > 3)) {
                return false;
            } else if (filters.duration === '3-6 Months' && (months < 3 || months > 6)) {
                return false;
            } else if (filters.duration === '6+ Months' && months < 6) {
                return false;
            }
        }

        // Stipend filter and Work from home filter removed

        return true;
    });
}

// Sort internships based on current sort option
function sortInternships(filteredInternships) {
    return filteredInternships.sort((a, b) => {
        if (sortBy === 'Newest First') {
            return b.id - a.id; // Assuming newer internships have higher IDs
        } else if (sortBy === 'Duration: Short to Long') {
            return parseInt(a.duration) - parseInt(b.duration);
        }
        return 0;
    });
}

// Display internships based on current page, filters, and sort
function displayInternships() {
    // For the initial page load, just show the current page's internships
    // Only filter and sort when the user applies filters or changes sort

    // Get the page-specific internships (6 per page)
    let pageInternships;

    // Check if we have filters applied
    const hasFilters = (
        filters.category !== 'All Categories' ||
        filters.duration !== 'Any Duration'
    );

    // If filters are applied or sort is changed, filter and sort all internships
    if (hasFilters || sortBy !== 'Newest First') {
        const filteredInternships = filterInternships();
        const sortedInternships = sortInternships(filteredInternships);

        // Calculate pagination
        const totalPages = Math.ceil(sortedInternships.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        pageInternships = sortedInternships.slice(startIndex, endIndex);

        // Get container for internship cards
        const container = document.querySelector('.col-lg-9');
        if (!container) return;

        // Clear existing internship cards
        const existingCards = container.querySelectorAll('.internship-card');
        existingCards.forEach(card => card.remove());

        // Insert header before pagination
        const header = container.querySelector('.d-flex.justify-content-between');

        // Update internship count in header
        const countElement = header.querySelector('h2');
        if (countElement) {
            countElement.textContent = `Available Internships (${filteredInternships.length})`;
        }

        // Create and append internship cards
        pageInternships.forEach(internship => {
            const card = createInternshipCard(internship);
            // Insert before pagination
            const pagination = container.querySelector('nav');
            container.insertBefore(card, pagination);
        });

        // Update pagination
        updatePagination(totalPages);
    } else {
        // If no filters applied, just use the default page internships
        // This preserves the original static content when no filters are applied
        // We don't need to do anything here as the HTML already has the internships
        // Just update the header to show the total count
        const container = document.querySelector('.col-lg-9');
        if (container) {
            const header = container.querySelector('.d-flex.justify-content-between');
            if (header) {
                const countElement = header.querySelector('h2');
                if (countElement) {
                    countElement.textContent = `Available Internships (${internships.length})`;
                }
            }
        }
    }
}

// Create an internship card element
function createInternshipCard(internship) {
    const card = document.createElement('div');
    card.className = 'internship-card';

    card.innerHTML = `
        <div class="card-body">
            <div class="d-flex align-items-center mb-3">
                <div class="bg-light rounded-circle p-3 me-3">
                    <i class="${internship.icon} text-primary fs-4"></i>
                </div>
                <div>
                    <h5 class="internship-title">${internship.title}</h5>
                </div>
            </div>
            <div class="internship-details">
                <div class="detail-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${internship.duration}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-home"></i>
                    <span>Remote</span>
                </div>
            </div>
            <p class="mb-3">${internship.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <span class="badge bg-success">Actively Hiring</span>
                <a href="#" class="btn btn-outline-primary" data-id="${internship.id}">View Details</a>
            </div>
        </div>
    `;

    // Add event listener to view details button
    const viewDetailsBtn = card.querySelector('.btn-outline-primary');
    viewDetailsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showInternshipDetails(internship.id);
    });

    return card;
}

// Update pagination controls
function updatePagination(totalPages) {
    const pagination = document.querySelector('.pagination');
    if (!pagination) return;

    // Update previous button
    const prevButton = pagination.querySelector('.page-item:first-child');
    if (currentPage === 1) {
        prevButton.classList.add('disabled');
        prevButton.querySelector('a').setAttribute('aria-disabled', 'true');
        prevButton.querySelector('a').setAttribute('tabindex', '-1');
    } else {
        prevButton.classList.remove('disabled');
        prevButton.querySelector('a').removeAttribute('aria-disabled');
        prevButton.querySelector('a').removeAttribute('tabindex');
        prevButton.querySelector('a').addEventListener('click', function(e) {
            e.preventDefault();
            navigateToPage(currentPage - 1);
        });
    }

    // Update page buttons
    const pageButtons = pagination.querySelectorAll('.page-item:not(:first-child):not(:last-child)');
    pageButtons.forEach((button, index) => {
        const pageNum = index + 1;
        if (pageNum === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }

        button.querySelector('a').addEventListener('click', function(e) {
            e.preventDefault();
            navigateToPage(pageNum);
        });
    });

    // Update next button
    const nextButton = pagination.querySelector('.page-item:last-child');
    if (currentPage === totalPages || totalPages === 0) {
        nextButton.classList.add('disabled');
        nextButton.querySelector('a').setAttribute('aria-disabled', 'true');
        nextButton.querySelector('a').setAttribute('tabindex', '-1');
    } else {
        nextButton.classList.remove('disabled');
        nextButton.querySelector('a').removeAttribute('aria-disabled');
        nextButton.querySelector('a').removeAttribute('tabindex');
        nextButton.querySelector('a').addEventListener('click', function(e) {
            e.preventDefault();
            navigateToPage(currentPage + 1);
        });
    }
}

// Show internship details (redirect to details page)
function showInternshipDetails(internshipId) {
    const internship = internships.find(item => item.id === internshipId);
    if (!internship) return;

    // Redirect to the internship details page with the internship ID
    window.location.href = `internship-details.html?id=${internshipId}`;
}

// Add event listeners to all View Details buttons on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to any static View Details buttons
    const viewDetailsButtons = document.querySelectorAll('.btn-outline-primary');
    viewDetailsButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Use index + 1 as the ID if no data-id attribute is present
            const internshipId = parseInt(button.getAttribute('data-id') || (index + 1));
            showInternshipDetails(internshipId);
        });
    });
});
