document.addEventListener('DOMContentLoaded', function() {
  
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  setTimeout(function() {
    document.body.classList.add('loaded');
    
    const headings = document.querySelectorAll('h1, h2');
    
    headings.forEach((heading, index) => {
      setTimeout(() => {
        heading.style.opacity = '1';
      }, 300 * index);
    });
  }, 1000);

  const teamMembers = document.querySelectorAll('.team-member');
  
  teamMembers.forEach(member => {
    member.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.4)';
    });
    
    member.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
  
}); 