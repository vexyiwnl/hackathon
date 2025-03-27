// HackerBit Team Portfolio - JavaScript

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Retro text effect for headings
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h1, h2');
    
    headings.forEach(heading => {
        heading.style.opacity = '0';
        setTimeout(() => {
            heading.style.transition = 'opacity 0.5s ease';
            heading.style.opacity = '1';
        }, 300);
    });
    
    // Add retro hover effect to team members
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('leader') ? 
                'translateY(-30px)' : 'translateY(-10px)';
            this.style.boxShadow = this.classList.contains('leader') ? 
                '0 0 30px var(--accent)' : '0 0 20px rgba(255, 107, 107, 0.6)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('leader') ? 
                'translateY(-20px)' : 'translateY(0)';
            this.style.boxShadow = this.classList.contains('leader') ? 
                '0 0 15px var(--accent)' : 'none';
        });
    });
});

// Simple preloader
window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 500);
});

// Scroll reveal effect for sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Retro cursor effect (optional)
function createRetroCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('retro-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
}

// Uncomment the line below to enable the retro cursor effect
// createRetroCursor(); 