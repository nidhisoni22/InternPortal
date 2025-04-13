// Internship data - this would typically come from a backend API
const internships = [
    {
        id: 1,
        title: "Software Development Intern",
        company: "TCS",
        location: "Delhi",
        duration: "3 Months",
        workType: "On-site",
        category: "Software Development",
        description: "Join our team to work on cutting-edge technologies and gain hands-on experience in software development. You'll be working with experienced developers on real projects.",
        icon: "fas fa-laptop-code"
    },
    {
        id: 2,
        title: "Data Science Intern",
        company: "Infosys",
        location: "Gurgaon",
        duration: "6 Months",
        workType: "Hybrid",
        category: "Data Science",
        description: "Work with our data science team to analyze large datasets, build predictive models, and extract meaningful insights to drive business decisions.",
        icon: "fas fa-chart-line"
    },
    {
        id: 3,
        title: "Digital Marketing Intern",
        company: "Wipro",
        location: "Delhi",
        duration: "4 Months",
        workType: "Hybrid",
        category: "Digital Marketing",
        description: "Assist in planning and executing digital marketing campaigns, managing social media accounts, and analyzing campaign performance metrics.",
        icon: "fas fa-bullhorn"
    },
    {
        id: 4,
        title: "Web Development Intern",
        company: "Tech Mahindra",
        location: "Gurgaon",
        duration: "3 Months",
        workType: "On-site",
        category: "Web Development",
        description: "Create responsive websites and web applications using modern frameworks. Work with front-end and back-end technologies to build user-friendly interfaces.",
        icon: "fas fa-code"
    },
    {
        id: 5,
        title: "Sales and Marketing Intern",
        company: "HCL Technologies",
        location: "Delhi",
        duration: "6 Months",
        workType: "On-site",
        category: "Sales and Marketing",
        description: "Assist in developing sales strategies, conducting market research, and creating marketing materials. Learn about customer acquisition and relationship management.",
        icon: "fas fa-bullhorn"
    },
    {
        id: 6,
        title: "Business Development Intern",
        company: "Cognizant",
        location: "Delhi",
        duration: "4 Months",
        workType: "Hybrid",
        category: "Business Development",
        description: "Identify new business opportunities, develop growth strategies, and build relationships with potential clients. Assist in preparing business proposals and presentations.",
        icon: "fas fa-users"
    },
    {
        id: 7,
        title: "Content Writing Intern",
        company: "Netflix",
        location: "Gurgaon",
        duration: "3 Months",
        workType: "Hybrid",
        category: "Content Writing",
        description: "Create engaging content for our blog, social media, and marketing materials. Research industry trends and develop compelling narratives that resonate with our audience.",
        icon: "fas fa-globe"
    },
    {
        id: 8,
        title: "Social Media Marketing Intern",
        company: "McKinsey & Company",
        location: "Delhi",
        duration: "6 Months",
        workType: "On-site",
        category: "Social Media Marketing",
        description: "Manage social media accounts, create engaging content, and analyze performance metrics. Develop and implement social media strategies to increase brand awareness.",
        icon: "fas fa-hashtag"
    },
    {
        id: 9,
        title: "Mobile App Developer Intern",
        company: "Swiggy",
        location: "Gurgaon",
        duration: "4 Months",
        workType: "Hybrid",
        category: "Software Development",
        description: "Develop and maintain mobile applications for iOS and Android platforms. Work with cross-functional teams to implement new features and improve user experience.",
        icon: "fas fa-mobile-alt"
    },
    {
        id: 10,
        title: "Digital Content Creator Intern",
        company: "YouTube",
        location: "Delhi",
        duration: "3 Months",
        workType: "Hybrid",
        category: "Digital Marketing",
        description: "Create engaging digital content for various platforms. Apply creative techniques to enhance visual storytelling and maintain brand consistency.",
        icon: "fas fa-video"
    },
    {
        id: 11,
        title: "Web Designer Intern",
        company: "Infosys",
        location: "Gurgaon",
        duration: "6 Months",
        workType: "On-site",
        category: "Web Development",
        description: "Design user interfaces for websites and web applications. Create wireframes, mockups, and prototypes to visualize design concepts before implementation.",
        icon: "fas fa-palette"
    },
    {
        id: 12,
        title: "SEO/SEM Specialist Intern",
        company: "Zomato",
        location: "Delhi",
        duration: "4 Months",
        workType: "Hybrid",
        category: "Digital Marketing",
        description: "Optimize website content for search engines, conduct keyword research, and implement SEO strategies. Analyze performance metrics and suggest improvements.",
        icon: "fas fa-search-dollar"
    }
];

// Items per page
const itemsPerPage = 6;
let currentPage = 1;

// Get URL parameters to determine current page
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('page')) {
    currentPage = parseInt(urlParams.get('page'));
}

// Filter and sort state
let filters = {
    category: 'All Categories',
    location: 'All Locations',
    duration: 'Any Duration',
    stipendRange: 'Any Stipend',
    workFromHome: false
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
});

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
    document.getElementById('locationFilter').value = filters.location;
    document.getElementById('durationFilter').value = filters.duration;
    document.getElementById('stipendFilter').value = filters.stipendRange;
    document.getElementById('workFromHome').checked = filters.workFromHome;

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

            const locationFilter = document.getElementById('locationFilter');
            if (locationFilter) {
                filters.location = locationFilter.value;
            }

            const durationFilter = document.getElementById('durationFilter');
            if (durationFilter) {
                filters.duration = durationFilter.value;
            }

            const stipendFilter = document.getElementById('stipendFilter');
            if (stipendFilter) {
                filters.stipendRange = stipendFilter.value;
            }

            const workFromHomeCheckbox = document.getElementById('workFromHome');
            if (workFromHomeCheckbox) {
                filters.workFromHome = workFromHomeCheckbox.checked;
            }

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

    if (filters.location !== 'All Locations') {
        queryParams.set('location', filters.location);
    }

    if (filters.duration !== 'Any Duration') {
        queryParams.set('duration', filters.duration);
    }

    if (filters.stipendRange !== 'Any Stipend') {
        queryParams.set('stipend', filters.stipendRange);
    }

    if (filters.workFromHome) {
        queryParams.set('wfh', 'true');
    }

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
        if (filters.category !== 'All Categories' && internship.category !== filters.category) {
            return false;
        }

        // Location filter
        if (filters.location !== 'All Locations') {
            if (filters.location === 'Remote' && internship.workType !== 'Work from Home') {
                return false;
            } else if (filters.location !== 'Remote' && internship.location !== filters.location) {
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
        } else if (sortBy === 'Stipend: High to Low') {
            return b.stipend - a.stipend;
        } else if (sortBy === 'Stipend: Low to High') {
            return a.stipend - b.stipend;
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
        filters.location !== 'All Locations' ||
        filters.duration !== 'Any Duration' ||
        filters.stipendRange !== 'Any Stipend' ||
        filters.workFromHome
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
                    <p class="company-name mb-0">${internship.company}</p>
                </div>
            </div>
            <div class="internship-details">
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${internship.location}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${internship.duration}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-home"></i>
                    <span>${internship.workType}</span>
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
