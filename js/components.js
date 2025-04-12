// Function to load HTML components
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            
            // Set active nav link based on current page
            if (elementId === 'navbar-container') {
                setActiveNavLink();
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

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
    } else if (currentPage === 'about.html') {
        document.getElementById('nav-about').classList.add('active');
    } else if (currentPage === 'contact.html') {
        document.getElementById('nav-contact').classList.add('active');
    }
}

// Load components when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('components/navbar.html', 'navbar-container');
    loadComponent('components/footer.html', 'footer-container');
});
