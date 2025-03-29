// You can add any interactive JavaScript here
// For example, to handle form submissions, animations, etc.

// Example: Smooth scrolling for navigation links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});