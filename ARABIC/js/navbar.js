let isVisible = false; // Track menu visibility

// Toggle menu visibility on mobile view
function toggleMenu() {
    isVisible = !isVisible;
    const menuDetail = document.getElementById("toggle-menu-detail");
    const menuIcon = document.getElementById("menu-icon");

    if (isVisible) {
        menuDetail.style.display = "block";
        menuIcon.className = "fas fa-times menu-icon"; // Change icon to close (X)
    } else {
        menuDetail.style.display = "none";
        menuIcon.className = "fas fa-bars menu-icon"; // Change icon back to menu (bars)
    }
}

// Smooth scroll function
function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    let startTime = null;

    function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animateScroll);
}

// Handle link click for smooth scrolling
function handleScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) smoothScroll(targetElement, 1000);
}

// Send a message via WhatsApp
function sendMessage() {
    const phoneNumber = "919074919005";
    const message = "Hello, Blue Meem!";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
