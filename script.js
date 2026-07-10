document.addEventListener('DOMContentLoaded', () => {
    // Add shadow to nav on scroll
    const nav = document.getElementById('top-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle logic
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Quick mobile menu implementation for prototype
    mobileToggle.addEventListener('click', () => {
        const isExpanded = navLinks.style.display === 'flex';
        
        if (isExpanded) {
            navLinks.style.display = 'none';
            // reset to original styles
            navLinks.style.position = '';
            navLinks.style.top = '';
            navLinks.style.left = '';
            navLinks.style.right = '';
            navLinks.style.backgroundColor = '';
            navLinks.style.flexDirection = '';
            navLinks.style.padding = '';
            navLinks.style.boxShadow = '';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '64px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = 'var(--colors-canvas)';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = 'var(--spacing-lg) var(--spacing-xxl)';
            navLinks.style.boxShadow = 'var(--shadow-card)';
        }
    });

    // Handle resize to reset mobile menu state
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            navLinks.style.display = 'flex';
            navLinks.style.position = '';
            navLinks.style.top = '';
            navLinks.style.left = '';
            navLinks.style.right = '';
            navLinks.style.backgroundColor = '';
            navLinks.style.flexDirection = '';
            navLinks.style.padding = '';
            navLinks.style.boxShadow = '';
        } else if (navLinks.style.position !== 'absolute') {
            navLinks.style.display = 'none';
        }
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // close mobile menu if open
                if (window.innerWidth <= 1024) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
});
