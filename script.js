document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling functionality for nav links and buttons
    const links = document.querySelectorAll("nav a, .btn");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            // Check if the link is to the CV page
            if (link.getAttribute('href') === 'cv.html') {
                return; // Do nothing and exit if it's the CV link
            }
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute("href"); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Find the target element
            if (targetSection) { // Ensure the target section exists
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the first slide
showSlide(currentSlide);
