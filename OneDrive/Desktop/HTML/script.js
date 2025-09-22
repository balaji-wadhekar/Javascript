// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
});

// Search button functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchValue = document.getElementById('searchInput').value.trim();
    if (searchValue) {
        alert(`Searching for: ${searchValue}`);
    } else {
        alert("Please enter a food name to search.");
    }
});

// Newsletter form submission
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value.trim();
    if (email && email.includes('@')) {
        alert(`Thanks for subscribing, ${email}!`);
        document.getElementById('newsletterForm').reset();
    } else {
        alert("Please enter a valid email address.");
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
