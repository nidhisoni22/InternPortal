// Internship data - this would typically come from a backend API
const internships = [
    {
        id: 1,
        title: "Software Development Intern",
        company: "TCS",
        location: "Bangalore",
        duration: "3 Months",
        stipend: 25000,
        workType: "On-site",
        category: "Software Development",
        description: "Join our team to work on cutting-edge technologies and gain hands-on experience in software development. You'll be working with experienced developers on real projects.",
        icon: "fas fa-laptop-code"
    },
    {
        id: 2,
        title: "Data Science Intern",
        company: "Infosys",
        location: "Hyderabad",
        duration: "6 Months",
        stipend: 30000,
        workType: "Hybrid",
        category: "Data Science",
        description: "Work with our data science team to analyze large datasets, build predictive models, and extract meaningful insights to drive business decisions.",
        icon: "fas fa-chart-line"
    },
    {
        id: 3,
        title: "Digital Marketing Intern",
        company: "Wipro",
        location: "Remote",
        duration: "4 Months",
        stipend: 15000,
        workType: "Work from Home",
        category: "Marketing",
        description: "Assist in planning and executing digital marketing campaigns, managing social media accounts, and analyzing campaign performance metrics.",
        icon: "fas fa-bullhorn"
    },
    {
        id: 4,
        title: "UI/UX Design Intern",
        company: "Tech Mahindra",
        location: "Bangalore",
        duration: "3 Months",
        stipend: 20000,
        workType: "On-site",
        category: "Design",
        description: "Create user-centered designs by understanding business requirements, and user feedback. Help create wireframes, storyboards, user flows, and prototypes.",
        icon: "fas fa-palette"
    },
    {
        id: 5,
        title: "Finance Intern",
        company: "HCL Technologies",
        location: "Mumbai",
        duration: "6 Months",
        stipend: 35000,
        workType: "On-site",
        category: "Finance",
        description: "Gain exposure to financial analysis, investment banking, and portfolio management. Work with financial models and assist in preparing client presentations.",
        icon: "fas fa-money-bill-wave"
    },
    {
        id: 6,
        title: "Human Resources Intern",
        company: "Cognizant",
        location: "Delhi",
        duration: "4 Months",
        stipend: 18000,
        workType: "Hybrid",
        category: "Human Resources",
        description: "Assist in recruitment processes, employee engagement initiatives, and HR operations. Learn about talent acquisition, performance management, and organizational development.",
        icon: "fas fa-users"
    },
    {
        id: 7,
        title: "Content Writing Intern",
        company: "Netflix",
        location: "Remote",
        duration: "3 Months",
        stipend: 12000,
        workType: "Work from Home",
        category: "Content Writing",
        description: "Create engaging content for our blog, social media, and marketing materials. Research industry trends and develop compelling narratives that resonate with our audience.",
        icon: "fas fa-globe"
    },
    {
        id: 8,
        title: "Research Analyst Intern",
        company: "McKinsey & Company",
        location: "Chennai",
        duration: "6 Months",
        stipend: 25000,
        workType: "On-site",
        category: "Research",
        description: "Conduct market research, analyze data, and prepare reports to support consulting projects. Develop insights that help clients make strategic business decisions.",
        icon: "fas fa-microscope"
    },
    {
        id: 9,
        title: "Mobile App Developer Intern",
        company: "Swiggy",
        location: "Bangalore",
        duration: "4 Months",
        stipend: 22000,
        workType: "Hybrid",
        category: "Software Development",
        description: "Develop and maintain mobile applications for iOS and Android platforms. Work with cross-functional teams to implement new features and improve user experience.",
        icon: "fas fa-mobile-alt"
    },
    {
        id: 10,
        title: "Video Editing Intern",
        company: "YouTube",
        location: "Remote",
        duration: "3 Months",
        stipend: 15000,
        workType: "Work from Home",
        category: "Design",
        description: "Edit and produce engaging video content for various platforms. Apply creative techniques to enhance visual storytelling and maintain brand consistency.",
        icon: "fas fa-video"
    },
    {
        id: 11,
        title: "Project Management Intern",
        company: "Infosys",
        location: "Pune",
        duration: "6 Months",
        stipend: 20000,
        workType: "On-site",
        category: "Management",
        description: "Assist project managers in planning, executing, and closing projects. Learn about project management methodologies and tools while supporting team coordination.",
        icon: "fas fa-project-diagram"
    },
    {
        id: 12,
        title: "SEO/SEM Specialist Intern",
        company: "Zomato",
        location: "Delhi",
        duration: "4 Months",
        stipend: 18000,
        workType: "Hybrid",
        category: "Marketing",
        description: "Optimize website content for search engines, conduct keyword research, and implement SEO strategies. Analyze performance metrics and suggest improvements.",
        icon: "fas fa-search-dollar"
    },
    {
        id: 13,
        title: "Photography Intern",
        company: "National Geographic",
        location: "Mumbai",
        duration: "3 Months",
        stipend: 15000,
        workType: "Field Work",
        category: "Media",
        description: "Capture compelling images for our publications and digital platforms. Learn advanced photography techniques while documenting stories that matter.",
        icon: "fas fa-camera"
    },
    {
        id: 14,
        title: "Artificial Intelligence Intern",
        company: "NVIDIA",
        location: "Hyderabad",
        duration: "6 Months",
        stipend: 40000,
        workType: "On-site",
        category: "Data Science",
        description: "Develop and implement AI algorithms and models. Work on cutting-edge projects involving machine learning, deep learning, and computer vision.",
        icon: "fas fa-robot"
    },
    {
        id: 15,
        title: "Environmental Science Intern",
        company: "Greenpeace",
        location: "Delhi",
        duration: "4 Months",
        stipend: 12000,
        workType: "Hybrid",
        category: "Science",
        description: "Conduct environmental research, analyze data, and contribute to conservation projects. Help raise awareness about environmental issues through campaigns.",
        icon: "fas fa-leaf"
    },
    {
        id: 16,
        title: "Travel & Tourism Intern",
        company: "MakeMyTrip",
        location: "Gurgaon",
        duration: "3 Months",
        stipend: 18000,
        workType: "On-site",
        category: "Travel",
        description: "Assist in creating travel itineraries, researching destinations, and developing marketing content for travel packages. Learn about the tourism industry.",
        icon: "fas fa-plane"
    },
    {
        id: 17,
        title: "Healthcare Management Intern",
        company: "Apollo Hospitals",
        location: "Chennai",
        duration: "6 Months",
        stipend: 20000,
        workType: "On-site",
        category: "Healthcare",
        description: "Gain exposure to healthcare administration, patient management systems, and hospital operations. Support healthcare professionals in delivering quality care.",
        icon: "fas fa-heartbeat"
    },
    {
        id: 18,
        title: "Legal Intern",
        company: "Cyril Amarchand Mangaldas",
        location: "Mumbai",
        duration: "3 Months",
        stipend: 25000,
        workType: "On-site",
        category: "Legal",
        description: "Assist lawyers in legal research, document preparation, and case management. Gain practical experience in corporate law, intellectual property, and litigation.",
        icon: "fas fa-gavel"
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

        // Stipend filter
        if (filters.stipendRange !== 'Any Stipend') {
            if (filters.stipendRange === '5,000 - 10,000' && (internship.stipend < 5000 || internship.stipend > 10000)) {
                return false;
            } else if (filters.stipendRange === '10,000 - 20,000' && (internship.stipend < 10000 || internship.stipend > 20000)) {
                return false;
            } else if (filters.stipendRange === '20,000+' && internship.stipend < 20000) {
                return false;
            }
        }

        // Work from home filter
        if (filters.workFromHome && internship.workType !== 'Work from Home') {
            return false;
        }

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
                    <i class="fas fa-rupee-sign"></i>
                    <span>₹${internship.stipend.toLocaleString()}/month</span>
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
