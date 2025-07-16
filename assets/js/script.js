// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Background on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.value, .adventure-card, .video-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Video Controls
document.addEventListener('DOMContentLoaded', function() {
    // Pause hero video when not in viewport
    const heroVideo = document.querySelector('.hero-video iframe');
    
    const videoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Video is in viewport - could resume autoplay
                console.log('Hero video in viewport');
            } else {
                // Video is out of viewport - could pause
                console.log('Hero video out of viewport');
            }
        });
    }, { threshold: 0.5 });
    
    if (heroVideo) {
        videoObserver.observe(heroVideo);
    }
});

// Form Handling (if contact form is added)
function handleContactForm(event) {
    event.preventDefault();
    // Add form submission logic here
    console.log('Contact form submitted');
}

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function() {
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
});

// Performance Optimization
window.addEventListener('load', function() {
    // Remove loading animations after page load
    document.body.classList.add('loaded');
});

// Error Handling for Video Loading
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('iframe');
    
    videos.forEach(video => {
        video.addEventListener('error', function() {
            console.log('Video failed to load:', video.src);
            // Could add fallback image or message here
        });
    });
});