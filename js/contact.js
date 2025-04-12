// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            const privacyPolicy = document.getElementById('privacyPolicy').checked;
            
            // Simple validation
            if (!name || !email || !subject || !message || !privacyPolicy) {
                showAlert('Please fill in all required fields', 'danger');
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                showAlert('Please enter a valid email address', 'danger');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
            
            // Simulate API call with timeout
            setTimeout(function() {
                // Reset form
                contactForm.reset();
                
                // Show success message
                showAlert('Your message has been sent successfully! We\'ll get back to you soon.', 'success');
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }, 2000);
        });
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to show alerts
    function showAlert(message, type) {
        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.role = 'alert';
        
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        
        // Insert alert before the form
        const formContainer = document.querySelector('.contact-form-container');
        formContainer.insertBefore(alertDiv, formContainer.firstChild);
        
        // Auto dismiss after 5 seconds
        setTimeout(function() {
            const bsAlert = new bootstrap.Alert(alertDiv);
            bsAlert.close();
        }, 5000);
    }
    
    // Add floating label animation for better UX
    const formControls = document.querySelectorAll('.form-control, .form-select');
    
    formControls.forEach(control => {
        // Check if field has value on page load
        if (control.value) {
            control.classList.add('has-value');
        }
        
        // Add event listeners for focus and blur
        control.addEventListener('focus', () => {
            control.parentElement.classList.add('focused');
        });
        
        control.addEventListener('blur', () => {
            control.parentElement.classList.remove('focused');
            if (control.value) {
                control.classList.add('has-value');
            } else {
                control.classList.remove('has-value');
            }
        });
    });
});
