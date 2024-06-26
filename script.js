document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar
    var navbar = document.querySelector('.navbar');
    
    // Function to add or remove the 'scrolled' class
    function handleScroll() {
        if (window.scrollY > 50) { // Adjust the value as needed
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
});

