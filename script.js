/*jslint browser:true*/
//Tell JSLint that document global variable is allowed
// Typewriter effect for hero message
const text = "Mature. Reliable. Early riser.";
const speed = 100; // Delay in milliseconds between each character
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index += 1;
        setTimeout(typeWriter, speed);
    }
}
// Start when page loads
window.onload = typeWriter;

// Get the "Back to Top" button
const backToTopBtn = document.getElementById("backToTop");

// Show button when user scrolls down a certain amount
window.onscroll = function () {
    if (window.scrollY > 300) { // Show when scrolled 300px
        backToTopBtn.style.display = "block";
    } else { // Hide the button
        backToTopBtn.style.display = "none";
    }
};

// Smooth scroll to top when button is clicked
backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
});

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburger.addEventListener("click", function () {
    navList.classList.toggle("active");
});

// Close menu when clicking on a nav link
navList.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        navList.classList.remove("active");
    }
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
        navList.classList.remove("active");
    }
});

// Function to handle form submission
function submitForm() {
    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validation to ensure all fields are filled
    if (name && email && message) {
        // Display personalized success message with user's name
        document.getElementById("responseMessage").style.display = "block";
        document.getElementById("responseMessage").textContent = "Thanks for reaching out, " + name + "!";

        // Clear the form after submission
        document.getElementById("contactForm").reset();
    } else {
        // Display error message if any field is empty
        document.getElementById("responseMessage").style.display = "block";
        document.getElementById("responseMessage").textContent = "Please fill in all fields.";
    }
}