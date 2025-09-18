Academic Portfolio Website - Setup Guide
📁 File Structure

Your website is now organized into separate, manageable files:

your-website/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and design
├── script.js           # Interactive functionality
├── config.js           # (Optional) Easy content updates
├── README.md           # This file
│
├── images/            # Your images folder
│   └── pp3.png        # Your profile picture
│
└── papers/            # Your research papers (PDFs)
    ├── paper1.pdf
    └── paper2.pdf

🚀 Quick Start

    Create a folder for your website on your computer
    Save all the files (index.html, styles.css, script.js) in this folder
    Create an images folder and add your profile picture (pp3.png)
    Open index.html in your web browser to view your website

📝 How to Update Content
Method 1: Direct HTML Editing (Simple)

    Open index.html in any text editor
    Look for the commented sections like <!-- RESEARCH SECTION -->
    Update the text between the HTML tags
    Save and refresh your browser

Method 2: Using Configuration File (Recommended)

    Edit config.js to update all your content in one place
    This keeps your data separate from the presentation
    Requires adding a small script to populate the HTML from config

🎨 Customizing the Design
Colors

Edit the CSS variables in styles.css:
css

:root {
    --primary-color: #2c3e50;    /* Change main color */
    --link-color: #2980b9;        /* Change link color */
    --light-gray: #f5f5f5;        /* Change background color */
}

Fonts

Change the font-family in styles.css:
css

body {
    font-family: 'Your-Font-Here', sans-serif;
}

Layout Width

Adjust the maximum width in styles.css:
css

:root {
    --max-width: 900px;  /* Change to your preference */
}

🔧 Features Explained
1. Expandable Research Papers

    Click on any paper to expand/collapse the abstract
    Controlled by togglePaper() function in script.js
    Smooth animations via CSS transitions

2. Mobile-Responsive Navigation

    Hamburger menu appears on mobile devices
    Controlled by toggleMobileNav() function
    Breakpoint at 768px width

3. Smooth Scrolling

    Clicking navigation links smoothly scrolls to sections
    Accounts for fixed navigation bar height

4. Active Section Highlighting

    Current section is highlighted in navigation as you scroll
    Updates dynamically based on scroll position

📱 Mobile Optimization

The website automatically adapts to mobile devices:

    Navigation becomes a hamburger menu
    Content stacks vertically
    Font sizes adjust for readability
    Touch-friendly interaction areas

🚀 Deployment Options
GitHub Pages (Free)

    Create a GitHub repository
    Upload all files
    Enable GitHub Pages in repository settings
    Your site will be at: username.github.io/repository-name

University Server

    Access your university web space (usually via FTP/SFTP)
    Upload all files to the public_html folder
    Your site will be at: university.edu/~yourusername

Netlify (Free)

    Go to netlify.com
    Drag and drop your website folder
    Get instant deployment with a custom URL

🐛 Troubleshooting
Images not showing?

    Check that image paths in HTML match your folder structure
    Ensure image files are in the correct folder
    Use relative paths (e.g., images/pp3.png not /images/pp3.png)

JavaScript not working?

    Make sure script.js is linked correctly in index.html
    Check browser console for errors (F12 → Console tab)
    Ensure you're not opening the file with file:// protocol for some features

Styling looks wrong?

    Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
    Check that styles.css is linked correctly
    Verify no typos in CSS class names

💡 Advanced Customizations
Adding a New Section

    Add HTML structure in index.html:

html

<section id="newsection">
    <h2>New Section</h2>
    <!-- Your content -->
</section>

    Add navigation link:

html

<a href="#newsection">New Section</a>

    Style in styles.css if needed

Adding Google Analytics

    Get your Google Analytics ID
    Add before </head> in index.html:

html

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>

Adding More Papers

Simply duplicate a paper item structure in the HTML and update the content:
html

<div class="paper-item" onclick="togglePaper(this)">
    <!-- Copy and modify paper structure -->
</div>

📞 Need Help?

    HTML/CSS Reference: MDN Web Docs
    JavaScript Help: JavaScript.info
    Web Development: W3Schools

📄 License

This template is free to use and modify for your academic portfolio.

Pro Tip: Always test your website in multiple browsers (Chrome, Firefox, Safari) and on mobile devices to ensure compatibility!
