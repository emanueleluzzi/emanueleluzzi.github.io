/**
 * POPULATE WEBSITE FROM CONFIG
 */

document.addEventListener('DOMContentLoaded', function() {

    if (typeof CONFIG === 'undefined') {
        console.error('CONFIG not found. Make sure config.js is loaded before populate.js');
        return;
    }

    // ===================================
    // POPULATE INTRO SECTION
    // ===================================
    document.querySelector('.nav-name').textContent = CONFIG.name;
    document.querySelector('.intro h1').textContent = CONFIG.name;
    document.querySelector('.intro .subtitle').textContent = CONFIG.title;
    document.querySelector('.intro .affiliation').textContent = CONFIG.affiliation;
    document.querySelector('.profile-image').src = CONFIG.profileImage;
    document.querySelector('.profile-image').alt = CONFIG.name;

    if (CONFIG.interests) {
        document.querySelector('.intro .interests').innerHTML =
            `<strong>Research Interests:</strong> ${CONFIG.interests}`;
    } else {
        const interestsEl = document.querySelector('.intro .interests');
        if (interestsEl) interestsEl.style.display = 'none';
    }

    document.querySelector('.intro .bio').textContent = CONFIG.bio;

    const contactLinksDiv = document.querySelector('.contact-links');
    contactLinksDiv.innerHTML = '';
    if (CONFIG.links.email)    contactLinksDiv.innerHTML += `<a href="${CONFIG.links.email}">Email</a>`;
    if (CONFIG.links.linkedin) contactLinksDiv.innerHTML += `<a href="${CONFIG.links.linkedin}" target="_blank">LinkedIn</a>`;
    if (CONFIG.links.github)   contactLinksDiv.innerHTML += `<a href="${CONFIG.links.github}" target="_blank">GitHub</a>`;
    if (CONFIG.links.cv)       contactLinksDiv.innerHTML += `<a href="pdf/${CONFIG.links.cv}" target="_blank">CV</a>`;

    // ===================================
    // HELPER: build a paper block
    // ===================================
    function buildPaperHTML(paper) {
        let linksHTML = '';
        if (paper.comingSoon) {
            linksHTML = '<span style="color: #999;"> </span>';
        } else {
            if (paper.pdf)      linksHTML += `<a href="${paper.pdf}" target="_blank">PDF</a>`;
            if (paper.ssrn)     linksHTML += `<a href="${paper.ssrn}" target="_blank">SSRN</a>`;
            if (paper.slides)   linksHTML += `<a href="ppt/${paper.slides}" target="_blank">Slides</a>`;
            if (paper.appendix) linksHTML += `<a href="${paper.appendix}" target="_blank">Appendix</a>`;
        }

        return `
            <div class="paper-item" onclick="togglePaper(this)">
                <div class="paper-title-section">
                    <div class="paper-title">${paper.title}</div>
                    ${paper.status ? `<div class="paper-status">${paper.status}</div>` : ''}
                    <div class="paper-coauthors">${paper.coauthors}</div>
                    ${paper.conference ? `<div class="paper-conference">${paper.conference}</div>` : ''}
                    ${paper.prizes ? `<div class="paper-prizes">${paper.prizes}</div>` : ''}
                </div>
                <div class="paper-footer-row">
                    <span class="expand-icon">More ›</span>
                    <div class="paper-footer-links">${linksHTML}</div>
                </div>
                <div class="paper-details">
                    <div class="paper-content">
                        <div class="paper-text">
                            ${paper.abstract ? `<div class="abstract-text">${paper.abstract}</div>` : ''}
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
    }

    // ===================================
    // POPULATE WORKING PAPERS
    // ===================================
    const papersList = document.querySelector('.papers-list');
    if (papersList) {
        papersList.innerHTML = CONFIG.papers.map(buildPaperHTML).join('');
    }

    // ===================================
    // POPULATE WORK IN PROGRESS
    // ===================================
    const wipList = document.querySelector('.wip-list');
    if (wipList) {
        wipList.innerHTML = CONFIG.workInProgress.map(buildPaperHTML).join('');
    }

    // ===================================
    // POPULATE DISCUSSIONS
    // ===================================
    const discussionsContent = document.querySelector('.discussions-content');
    if (discussionsContent) {
        discussionsContent.innerHTML = CONFIG.discussions.map(discussion => `
            <div class="discussion-item">
                <span class="discussion-title">${discussion.title}</span>
                <span class="discussion-date">— ${discussion.date}</span>
                ${discussion.ppt ? `<a href="ppt/${discussion.ppt}" target="_blank" class="discussion-link">slides</a>` : ''}
                ${discussion.description ? `<span class="discussion-desc">${discussion.description}</span>` : ''}
            </div>
        `).join('');
    }

    // ===================================
    // POPULATE TEACHING
    // ===================================
    const teachingContent = document.querySelector('.teaching-content');
    if (teachingContent) {
        teachingContent.innerHTML = CONFIG.teaching.map(course => `
            <div class="course-item">
                <span class="course-title">${course.title}</span>
                ${course.role ? `<span class="course-role">— ${course.role}</span>` : ''}
                <span class="course-details">— ${course.employer} | ${course.semester}${course.level ? ' | ' + course.level : ''}</span>
                ${course.description ? `<span class="course-description">${course.description}</span>` : ''}
            </div>
        `).join('');
    }

    // ===================================
    // POPULATE FOOTER
    // ===================================
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `${CONFIG.footer.copyright}. Last updated: ${CONFIG.footer.lastUpdated}.`;
    }

    // ===================================
    // UPDATE PAGE TITLE & META
    // ===================================
    document.title = CONFIG.seo.pageTitle;
    document.querySelector('meta[name="description"]').content = CONFIG.seo.description;
    document.querySelector('meta[name="keywords"]').content = CONFIG.seo.keywords;

});