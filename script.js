
function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});


// Add animation on scroll
const sections = document.querySelectorAll('.grid-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Sort events by date
upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

// Dynamically populate upcoming events
const upcomingEventsSection = document.getElementById('upcoming-events');
const gridContainer = upcomingEventsSection.querySelector('.grid-container');

upcomingEvents.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('grid-item');
    eventCard.innerHTML = `
        <h3>${event.title}</h3>
        <p>Date: ${event.date}</p>
        <p>${event.description}</p>
    `;
    gridContainer.appendChild(eventCard);
});
