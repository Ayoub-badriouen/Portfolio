document.addEventListener("DOMContentLoaded", () => {
    // Typewriter Effect
    const typewriter = document.getElementById("typewriter");
    const text = "Welcome to my Portfolio!";
    let index = 0;
    function type() {
        if (index < text.length) {
            typewriter.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

// Smooth Scrolling for internal links only
document.querySelectorAll("nav a").forEach(anchor => {
    const href = anchor.getAttribute("href");
    if (href.startsWith("#")) { // only internal anchors
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});


    // Form Submission Handling
    document.getElementById("contact-form").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
    });

    // Three.js Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});

// Add this to the existing DOMContentLoaded event
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  });