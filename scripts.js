
function toggleMobileMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}


function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name) {
        alert('Please enter your name.');
        return false;
    }
    
    if (!email || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    if (!message) {
        alert('Please enter a message.');
        return false;
    }
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    event.target.reset();
    
    return false;
}


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


document.addEventListener('DOMContentLoaded', function() {
    // Handle mobile menu button
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    mobileBtn.addEventListener('click', toggleMobileMenu);

    document.addEventListener('click', function(event) {
        const nav = document.getElementById('nav-menu');
        if (!nav.contains(event.target) && !mobileBtn.contains(event.target)) {
            nav.classList.remove('active');
        }
    });

    // Handle form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});