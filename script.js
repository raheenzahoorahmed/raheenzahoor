// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to cards when they come into view
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Add active class to current navigation item
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Random Facts functionality
const factText = document.getElementById('fact-text');
const factType = document.getElementById('fact-type');
const newFactBtn = document.getElementById('new-fact-btn');

// Cloudflare Worker URL
const API_URL = 'https://resume-worker.raheen-zahoor13.workers.dev';

async function fetchRandomFact() {
    try {
        factText.textContent = 'Loading...';
        factType.textContent = '';
        
        const response = await fetch(`${API_URL}/random`);
        const data = await response.json();
        
        factText.textContent = data.content;
        factType.textContent = `Type: ${data.type.charAt(0).toUpperCase() + data.type.slice(1)}`;
    } catch (error) {
        factText.textContent = 'Failed to load fact. Please try again later.';
        factType.textContent = '';
        console.error('Error fetching random fact:', error);
    }
}

// Initial load
fetchRandomFact();

// Add click event listener to the button
newFactBtn.addEventListener('click', fetchRandomFact); 