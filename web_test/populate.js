/**
 * POPULATE WEBSITE FROM CONFIG
 * This script reads from config.js and fills the HTML with your content
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Check if CONFIG exists
    if (typeof CONFIG === 'undefined') {
        console.error('CONFIG not found. Make sure config.js is loaded before populate.js');
        return;
    }
    
    // ===================================
    // POPULATE INTRO SECTION
    // ===================================
    
    // Name and titles
    document.querySelector('.nav-name').textContent = CONFIG.name;
    document.querySelector('.intro h1').textContent = CONFIG.name;
    document.querySelector('.intro .subtitle').textContent = CONFIG.title;
    document.querySelector('.intro .affiliation').textContent = CONFIG.affiliation;
    
    // Profile image
    document.querySelector('.profile-image').src = CONFIG.profileImage;
    document.querySelector('.profile-image').alt = CONFIG.name;
    
    // Research interests
    document.querySelector('.intro .interests').innerHTML = 
        `<strong>Research Interests:</strong> ${CONFIG.interests}`;
    
    // Bio
    document.querySelector('.intro .bio').textContent = CONFIG.bio;
    
    // Contact links
    const contactLinksDiv = document.querySelector('.contact-links');
    contactLinksDiv.innerHTML = '';
    
    if (CONFIG.links.email) {
        contactLinksDiv.innerHTML += `<a href="${CONFIG.links.email}">Email</a>`;
    }
    if (CONFIG.links.linkedin) {
        contactLinksDiv.innerHTML += `<a href="${CONFIG.links.linkedin}" target="_blank">LinkedIn</a>`;
    }
    if (CONFIG.links.github) {
        contactLinksDiv.innerHTML += `<a href="${CONFIG.links.github}" target="_blank">GitHub</a>`;
    }
    
    // ===================================
    // POPULATE RESEARCH PAPERS
    // ===================================
    
    const papersList = document.querySelector('.papers-list');
    papersList.innerHTML = '';
    
    CONFIG.papers.forEach((paper, index) => {
        // Build paper links HTML
        let linksHTML = '';
        if (paper.comingSoon) {
            linksHTML = '<a href="#" target="_blank">Coming Soon</a>';
        } else {
            if (paper.pdf) linksHTML += `<a href="${paper.pdf}" target="_blank">PDF</a>`;
            if (paper.ssrn) linksHTML += `<a href="${paper.ssrn}" target="_blank">SSRN</a>`;
            if (paper.slides) linksHTML += `<a href="${paper.slides}" target="_blank">Slides</a>`;
            if (paper.appendix) linksHTML += `<a href="${paper.appendix}" target="_blank">Appendix</a>`;
        }
        
        // Create paper HTML
        const paperHTML = `
            <div class="paper-item" onclick="togglePaper(this)">
                <div class="paper-header">
                    <div class="paper-title-section">
                        <div class="paper-title">${paper.title}</div>
                        <div class="paper-coauthors">${paper.coauthors}</div>
                    </div>
                    <span class="expand-icon">›</span>
                </div>
                <div class="paper-details">
                    <div class="paper-content">
                        <div class="paper-text">
                            <div class="abstract-label">Abstract</div>
                            <div class="abstract-text">${paper.abstract}</div>
                            <div class="paper-links">${linksHTML}</div>
                        </div>
                        ${paper.figure ? `
                        <div class="paper-figure">
                            <img src="${paper.figure}" alt="Paper Figure">
                            <div class="figure-caption">${paper.figureCaption || ''}</div>
                        </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
        
        papersList.innerHTML += paperHTML;
    });
    
    // ===================================
    // POPULATE DISCUSSIONS
    // ===================================
    
    const discussionsContent = document.querySelector('.discussions-content');
    discussionsContent.innerHTML = '';
    
    CONFIG.discussions.forEach(discussion => {
        const discussionHTML = `
            <div class="discussion-item">
                <div class="discussion-title">${discussion.title}</div>
                <div class="discussion-date">${discussion.date}</div>
                <p>${discussion.description}</p>
            </div>
        `;
        discussionsContent.innerHTML += discussionHTML;
    });
    
    // ===================================
    // POPULATE TEACHING
    // ===================================
    
    const teachingContent = document.querySelector('.teaching-content');
    teachingContent.innerHTML = '';
    
    CONFIG.teaching.forEach(course => {
        const courseHTML = `
            <div class="course-item">
                <div class="course-title">${course.title}</div>
                <div class="course-details">${course.role} | ${course.semester} | ${course.level}</div>
                <div class="course-description">${course.description}</div>
            </div>
        `;
        teachingContent.innerHTML += courseHTML;
    });
    
    // ===================================
    // POPULATE FOOTER
    // ===================================
    
    const footer = document.querySelector('footer');
    footer.innerHTML = `${CONFIG.footer.copyright}. Last updated: ${CONFIG.footer.lastUpdated}.`;
    
    // ===================================
    // UPDATE PAGE TITLE
    // ===================================
    
    document.title = `${CONFIG.name} - ${CONFIG.title}`;
    
});