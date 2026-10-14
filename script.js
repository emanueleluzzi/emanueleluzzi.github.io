/**
 * Academic Portfolio Website - JavaScript Functionality
 * Author: Emanuele Luzzi
 */

// ===================================
// UTILITY FUNCTIONS
// ===================================

function togglePaper(element) {
    if (!element) {
        console.error('togglePaper: element is null or undefined');
        return;
    }
    element.classList.toggle('expanded');
    const isExpanded = element.classList.contains('expanded');
    const icon = element.querySelector('.expand-icon');
    if (icon) {
        icon.textContent = isExpanded ? 'Less ‹' : 'More ›';
    }

    // Opening a paper means the reader wants to read it: bring it to them.
    if (isExpanded) {
        centerInView(element);
    }
}

/**
 * Scroll so `element` sits centred in the visible area below the fixed nav.
 * If it is taller than that area, align its top just under the nav instead,
 * so the title is never scrolled out of sight.
 */
function centerInView(element) {
    const nav = document.querySelector('nav');
    const navHeight = nav ? nav.offsetHeight : 0;
    const visible = window.innerHeight - navHeight;
    const rect = element.getBoundingClientRect();

    const offset = rect.height <= visible
        ? (visible - rect.height) / 2   // fits: centre it
        : 16;                           // too tall: top just under the nav

    const target = window.scrollY + rect.top - navHeight - offset;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: Math.max(0, target), behavior: reduceMotion ? 'auto' : 'smooth' });
}

function toggleMobileNav() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) {
        console.error('toggleMobileNav: nav-links element not found');
        return;
    }
    navLinks.classList.toggle('mobile-open');
    
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.classList.toggle('active');
    }
}

// ===================================
// EVENT LISTENERS
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // 1. MOBILE NAVIGATION
    // ===================================
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.querySelector('.nav-links');
            if (mobileMenu && mobileMenu.classList.contains('mobile-open')) {
                mobileMenu.classList.remove('mobile-open');
            }
        });
    });
    
    document.addEventListener('click', (event) => {
        const hamburger = document.querySelector('.hamburger');
        const navLinksMenu = document.querySelector('.nav-links');
        
        if (hamburger && navLinksMenu && 
            !hamburger.contains(event.target) && 
            !navLinksMenu.contains(event.target) &&
            navLinksMenu.classList.contains('mobile-open')) {
            navLinksMenu.classList.remove('mobile-open');
        }
    });
    
    // ===================================
    // 1b. NAME IN THE NAV -> BACK TO TOP
    // ===================================

    // Scrolls to the very top rather than to #home, which would stop short by
    // the height of the fixed nav. preventDefault keeps a stray "#" out of the URL.
    const navName = document.querySelector('.nav-name');
    if (navName) {
        navName.addEventListener('click', e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===================================
    // 2. SMOOTH SCROLLING - FIXED
    // ===================================
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" with no id
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Get the actual nav height dynamically
                const nav = document.querySelector('nav');
                const navHeight = nav ? nav.offsetHeight + 20 : 80; // Add 20px buffer
                const targetPosition = targetSection.offsetTop - navHeight;
                
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
    
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');
        
        const scrollPosition = window.scrollY + 100;
        
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && 
                scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(link => {
            link.style.fontWeight = '400';
            link.classList.remove('active');
            
            if (link.getAttribute('href') === '#' + currentSection) {
                link.style.fontWeight = '500';
                link.classList.add('active');
            }
        });
    }
    
    let scrollTimer;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            updateActiveNavigation();
        }, 50);
    });
    
    updateActiveNavigation();
    
    // ===================================
    // 4. PAPER EXPANSION WITH KEYBOARD
    // ===================================
    
    // Title-only cards have no expandable panel, so they get no button semantics
    const paperItems = document.querySelectorAll('.paper-item:not(.paper-item-static)');
    paperItems.forEach(paper => {
        paper.setAttribute('tabindex', '0');
        paper.setAttribute('role', 'button');
        paper.setAttribute('aria-expanded', 'false');
        
        paper.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePaper(this);
                
                const isExpanded = this.classList.contains('expanded');
                this.setAttribute('aria-expanded', isExpanded);
            }
        });
        
        paper.addEventListener('click', function() {
            const isExpanded = this.classList.contains('expanded');
            this.setAttribute('aria-expanded', isExpanded);
        });
    });
    
    // ===================================
    // 5. PRINT STYLES
    // ===================================
    
    window.addEventListener('beforeprint', () => {
        document.body.classList.add('printing');
        document.querySelectorAll('.paper-item').forEach(paper => {
            paper.classList.add('expanded');
        });
    });
    
    window.addEventListener('afterprint', () => {
        document.body.classList.remove('printing');
    });
    
});