
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

// Fetch upcoming events data (from PDF)
const upcomingEvents = [
    {
        title: "UI/UX Designing Workshop",
        date: "5th February 2025",
        description: "Learn the fundamentals of UI/UX design and get hands-on experience with Figma."
    },
    {
        title: "Open Source Workshop",
        date: "27th February 2025",
        description: "Explore the world of open-source development and learn how to contribute effectively."
    },
    
    {
        title: "IoT-Powered Smart Robot Car Workshop",
        date: "5th - 6th March 2025",
        description: "Build a smart robotic car using ESP8266/ESP32 and essential electronic components."
    },
    {
        title: "MLSA Logic League 1.0",
        date: "7th March 2025",
        description: "A competitive programming event featuring debugging and coding contests."
    },
    {
        title: "Vedic Coding",
        date: "10th March 2025",
        description: "Integrate traditional Vedic mathematical algorithms with modern programming techniques."
    },
    {
        title: "ModelCraft: Hands-on ML Workshop",
        date: "12th March 2025",
        description: "Work on a guided AI/ML project and implement a real-world solution."
    },
    {
        title: "Data Duel - AI/ML Showdown",
        date: "13th March 2025",
        description: "Test your AI/ML knowledge and model-building capabilities in this competitive event."
    },
    {
        title: "Cybersecurity Unplugged",
        date: "15th March 2025",
        description: "An insightful session with a seasoned Cybersecurity Expert."
    }
];

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