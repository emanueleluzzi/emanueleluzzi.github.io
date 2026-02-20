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
    
    // Research interests (only if defined in config)
    if (CONFIG.interests) {
        document.querySelector('.intro .interests').innerHTML = 
            `<strong>Research Interests:</strong> ${CONFIG.interests}`;
    } else {
        // Hide the interests element if not defined
        const interestsEl = document.querySelector('.intro .interests');
        if (interestsEl) interestsEl.style.display = 'none';
    }
    
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
    if (CONFIG.links.cv) {
        contactLinksDiv.innerHTML += `<a href="pdf/${CONFIG.links.cv}" target="_blank">CV</a>`;
    }
    
    // ===================================
    // POPULATE WORKING PAPERS
    // ===================================
    
    const papersList = document.querySelector('.papers-list');
    if (papersList) {
        papersList.innerHTML = '';
        
        CONFIG.papers.forEach((paper, index) => {
            // Build paper links HTML
            let linksHTML = '';
            if (paper.comingSoon) {
                linksHTML = '<span style="color: #999;">Coming Soon</span>';
            } else {
                if (paper.pdf) linksHTML += `<a href="${paper.pdf}" target="_blank">PDF</a>`;
                if (paper.ssrn) linksHTML += `<a href="${paper.ssrn}" target="_blank">SSRN</a>`;
                if (paper.slides) linksHTML += `<a href="ppt/${paper.slides}" target="_blank">Slides</a>`;
                if (paper.appendix) linksHTML += `<a href="${paper.appendix}" target="_blank">Appendix</a>`;
            }
            
            // Create paper HTML
            const paperHTML = `
             <div class="paper-item" onclick="togglePaper(this)">
                <div class="paper-title-section">
            <div class="paper-title">${paper.title}</div>
            ${paper.status ? `<div class="paper-status">${paper.status}</div>` : ''}
            <div class="paper-coauthors">${paper.coauthors}</div>
            ${paper.prizes ? `<div class="paper-prizes">${paper.prizes}</div>` : ''}
             </div>
             <div class="paper-footer-row">
            <span class="expand-icon">More ›</span>
            <div class="paper-links">${linksHTML}</div>
             </div>
                <div class="paper-details">
            <div class="paper-content">
                <div class="paper-text">
                    ${paper.conference ? `<div class="paper-conference" style="margin-bottom:12px;">${paper.conference}</div>` : ''}
                    <div class="abstract-label">Abstract</div>
                    <div class="abstract-text">${paper.abstract}</div>
                </div>
                ${paper.figure ? `
                <div class="paper-figure">
                    <img src="${paper.figure}" alt="Paper Figure">
                    ${paper.figureCaption ? `<div class="figure-caption">${paper.figureCaption}</div>` : ''}
                </div>
                ` : ''}
                 </div>
                </div>
            </div>
`       ;
            
            papersList.innerHTML += paperHTML;
        });
    }
    
    // ===================================
    // POPULATE WORK IN PROGRESS
    // ===================================
    
    const wipList = document.querySelector('.wip-list');
    if (wipList) {
        wipList.innerHTML = '';
        
        CONFIG.workInProgress.forEach((paper, index) => {
            // Build paper links HTML
            let linksHTML = '';
            if (paper.comingSoon) {
                linksHTML = '<span style="color: #999;"> </span>';
            } else {
                if (paper.pdf) linksHTML += `<a href="${paper.pdf}" target="_blank">PDF</a>`;
                if (paper.ssrn) linksHTML += `<a href="${paper.ssrn}" target="_blank">SSRN</a>`;
                if (paper.slides) linksHTML += `<a href="ppt/${paper.slides}" target="_blank">Slides</a>`;
                if (paper.appendix) linksHTML += `<a href="${paper.appendix}" target="_blank">Appendix</a>`;
            }
            
            // Create paper HTML
            const paperHTML = `
                <div class="paper-item" onclick="togglePaper(this)">
                    <div class="paper-title-section">
                        <div class="paper-title">${paper.title}</div>
                        ${paper.status ? `<div class="paper-status">${paper.status}</div>` : ''}
                        <div class="paper-coauthors">${paper.coauthors}</div>
                        ${paper.prizes ? `<div class="paper-prizes">${paper.prizes}</div>` : ''}
                    </div>
                    <div class="paper-footer-row">
                        <span class="expand-icon">More ›</span>
                        <div class="paper-links">${linksHTML}</div>
                    </div>
                    <div class="paper-details">
                        <div class="paper-content">
                            <div class="paper-text">
                                ${paper.conference ? `<div class="paper-conference" style="margin-bottom:12px;">${paper.conference}</div>` : ''}
                                ${paper.abstract ? `
                                <div class="abstract-label">Abstract</div>
                                <div class="abstract-text">${paper.abstract}</div>
                                ` : ''}
                            </div>
                            ${paper.figure ? `
                            <div class="paper-figure">
                                <img src="${paper.figure}" alt="Paper Figure">
                                ${paper.figureCaption ? `<div class="figure-caption">${paper.figureCaption}</div>` : ''}
                            </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
                        
            wipList.innerHTML += paperHTML;
        });
    }
    
    // ===================================
    // POPULATE DISCUSSIONS
    // ===================================
    
    const discussionsContent = document.querySelector('.discussions-content');
    if (discussionsContent) {
        discussionsContent.innerHTML = '';
        
        CONFIG.discussions.forEach(discussion => {
            const discussionHTML = `
                <div class="discussion-item">
                    <div class="discussion-title">
                        ${discussion.title}
                         ${discussion.ppt ? `<a href="ppt/${discussion.ppt}" target="_blank" class="paper-links" style="margin-top:0;"><span>Slides</span></a>` : ''}
                    </div>
                    <div class="discussion-date">${discussion.date}</div>
                    ${discussion.description ? `<p>${discussion.description}</p>` : ''}
                </div>
            `;
            discussionsContent.innerHTML += discussionHTML;
        });
    }
    
    // ===================================
    // POPULATE TEACHING
    // ===================================
    
    const teachingContent = document.querySelector('.teaching-content');
    if (teachingContent) {
        teachingContent.innerHTML = '';
        
        CONFIG.teaching.forEach(course => {
            const courseHTML = `
                <div class="course-item">
                    <div class="course-title">${course.title}</div>
                     ${course.role ? `<div class="course-role">${course.role}</div>` : ''}
                    <div class="course-details">${course.employer} | ${course.semester}${course.level ? ' | ' + course.level : ''}</div>
                    ${course.description ? `<div class="course-description">${course.description}</div>` : ''}
                </div>
            `;
            teachingContent.innerHTML += courseHTML;
        });
    }
    
    // ===================================
    // POPULATE FOOTER
    // ===================================
    
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `${CONFIG.footer.copyright}. Last updated: ${CONFIG.footer.lastUpdated}.`;
    }
    
    // ===================================
    // UPDATE PAGE TITLE
    // ===================================
    
    document.title = CONFIG.seo.pageTitle;
    document.querySelector('meta[name="description"]').content = CONFIG.seo.description;
    document.querySelector('meta[name="keywords"]').content = CONFIG.seo.keywords;
    
});