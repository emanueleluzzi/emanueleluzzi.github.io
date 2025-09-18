/**
 * Academic Portfolio Website - JavaScript Functionality
 * Author: Emanuele Luzzi
 * 
 * This file contains all interactive functionality for the website:
 * 1. Paper abstract toggling (expand/collapse)
 * 2. Mobile navigation menu
 * 3. Smooth scrolling
 * 4. Active navigation highlighting
 */

// ===================================
// UTILITY FUNCTIONS
// ===================================

/**
 * Toggles the expanded state of a research paper item
 * @param {HTMLElement} element - The paper item element clicked
 */
function togglePaper(element) {
    // Check if element exists (defensive programming)
    if (!element) {
        console.error('togglePaper: element is null or undefined');
        return;
    }
    
    // Toggle the 'expanded' class to show/hide abstract
    element.classList.toggle('expanded');
    
    // Optional: Close other papers when opening a new one
    // Uncomment the following lines if you want accordion behavior
    /*
    const allPapers = document.querySelectorAll('.paper-item');
    allPapers.forEach(paper => {
        if (paper !== element && paper.classList.contains('expanded')) {
            paper.classList.remove('expanded');
        }
    });
    */
}

/**
 * Toggles the mobile navigation menu visibility
 */
function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    
    if (!navLinks) {
        console.error('toggleMobileNav: nav-links element not found');
        return;
    }
    
    // Toggle the mobile menu visibility
    navLinks.classList.toggle('mobile-open');
    
    // Optional: Animate hamburger icon
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.classList.toggle('active');
    }
}

// ===================================
// EVENT LISTENERS
// ===================================

/**
 * Initialize all event listeners when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // 1. MOBILE NAVIGATION
    // ===================================
    
    // Close mobile menu when clicking on a navigation link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.querySelector('.nav-links');
            if (mobileMenu && mobileMenu.classList.contains('mobile-open')) {
                mobileMenu.classList.remove('mobile-open');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const hamburger = document.querySelector('.hamburger');
        const navLinksMenu = document.querySelector('.nav-links');
        
        // Check if click is outside menu and hamburger
        if (hamburger && navLinksMenu && 
            !hamburger.contains(event.target) && 
            !navLinksMenu.contains(event.target) &&
            navLinksMenu.classList.contains('mobile-open')) {
            navLinksMenu.classList.remove('mobile-open');
        }
    });
    
    // ===================================
    // 2. SMOOTH SCROLLING
    // ===================================
    
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed navigation
                const navHeight = 80; // Adjust based on your nav height
                const targetPosition = targetSection.offsetTop - navHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // 3. ACTIVE NAVIGATION HIGHLIGHTING
    // ===================================
    
    /**
     * Highlights the current section in navigation based on scroll position
     */
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');
        
        // Get current scroll position
        const scrollPosition = window.scrollY + 100; // Offset for better detection
        
        // Find which section is currently in view
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && 
                scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update navigation item styles
        navItems.forEach(link => {
            // Reset all links to default weight
            link.style.fontWeight = '400';
            link.classList.remove('active');
            
            // Highlight current section link
            if (link.getAttribute('href') === '#' + currentSection) {
                link.style.fontWeight = '500';
                link.classList.add('active');
            }
        });
    }
    
    // Update active navigation on scroll
    let scrollTimer;
    window.addEventListener('scroll', () => {
        // Debounce scroll event for better performance
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            updateActiveNavigation();
        }, 50);
    });
    
    // Initial call to set active navigation
    updateActiveNavigation();
    
    // ===================================
    // 4. PAPER EXPANSION WITH KEYBOARD
    // ===================================
    
    // Allow keyboard navigation for papers (Enter/Space to expand)
    const paperItems = document.querySelectorAll('.paper-item');
    paperItems.forEach(paper => {
        // Make papers keyboard accessible
        paper.setAttribute('tabindex', '0');
        paper.setAttribute('role', 'button');
        paper.setAttribute('aria-expanded', 'false');
        
        // Handle keyboard events
        paper.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePaper(this);
                
                // Update aria-expanded
                const isExpanded = this.classList.contains('expanded');
                this.setAttribute('aria-expanded', isExpanded);
            }
        });
        
        // Update aria-expanded on click as well
        paper.addEventListener('click', function() {
            const isExpanded = this.classList.contains('expanded');
            this.setAttribute('aria-expanded', isExpanded);
        });
    });
    
    // ===================================
    // 5. LAZY LOADING IMAGES (Optional)
    // ===================================
    
    /**
     * Implements lazy loading for images to improve performance
     */
    function setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }
    
    // Uncomment if you want to use lazy loading
    // setupLazyLoading();
    
    // ===================================
    // 6. PRINT STYLES (Optional)
    // ===================================
    
    // Add print-friendly class when printing
    window.addEventListener('beforeprint', () => {
        document.body.classList.add('printing');
        // Expand all papers for printing
        document.querySelectorAll('.paper-item').forEach(paper => {
            paper.classList.add('expanded');
        });
    });
    
    window.addEventListener('afterprint', () => {
        document.body.classList.remove('printing');
    });
    
});

// ===================================
// PERFORMANCE MONITORING (Optional)
// ===================================

/**
 * Simple performance monitoring for debugging
 * Uncomment to use in development
 */
/*
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
    
    // Log any slow resources
    const resources = window.performance.getEntriesByType('resource');
    const slowResources = resources.filter(r => r.duration > 500);
    if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources);
    }
});
*/