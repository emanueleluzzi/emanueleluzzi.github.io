/**
 * WEBSITE CONTENT CONFIGURATION
 * 
 * Edit this file to update your website content.
 * No need to touch the HTML!
 */

const CONFIG = {
    // Your basic information
    name: "Emanuele Luzzi",
    title: "PhD Candidate in Finance",
    affiliation: "Swiss Finance Institute @ USI Lugano",
    email: "emanuele.luzzi@usi.ch",
    profileImage: "images/round_image.png",
    
    // Research interests (will be displayed as comma-separated)
    interests: "Financial Intermediation, Asset Pricing",
    
    // Bio paragraph
    bio: "I am a PhD candidate in Finance at the Swiss Finance Institute and USI Lugano. My research focuses on financial intermediation, asset pricing, and applications of machine learning in finance.",
    
    // Contact links
    links: {
        email: "mailto:emanuele.luzzi@usi.ch",
        linkedin: "https://www.linkedin.com/in/emanuele-luzzi-6bb39a124/",
        github: "https://github.com/emanueleLuzzi",
        cv: "cv.pdf"
    },
    
    // Research papers
    papers: [
        {
            title: "Learning the Stochastic Discount Factor via Nonparametric Option Portfolios",
            coauthors: "with Paul Schneider and Rohan Sen",
            abstract: "We estimate the stochastic discount factor (SDF) by recovering the Sharpe-optimal nonlinear claim through a trading strategy in delta-hedged option portfolios. Our nonparametric approach leverages the classical duality between the minimum-variance SDF and the maximum Sharpe ratio portfolio, and comes with finite-sample performance guarantees, as well as a formal testing framework for the monotonicity and convexity of the SDF. We perform an empirical study in the S\&P 500 market and find heterogeneous shapes across different states of the world as measured by the price of volatility and the maturities of options. While SDF implied by monthly options are monotonically decreasing, their convexity/concavity is less pronounced.  Ultra-short ODTE options, on the contrary, exhibit a pronounced U-shape in higher-volatility states. Our empirical results are robust across various models of the information set.",
            pdf: "",
            status: "", 
            prizes: "", 
            conference: "FinEML (Erasmus) 2025, SoFiE (ESSEC) 2025, Queen Mary PhD Student Workshop 2025, USI Lugano Brown-Bag Seminar 2025, SFI PhD Student Workshop 2024", 
            ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5634612",
            slides: "",
            figure: "images/LSDFvNPO paper_pic.png",
            figureCaption: ""
        },
        // {
        //     title: "Intermediary Asset Pricing in the Age of Big Data",
        //     coauthors: "Solo authored",
        //     abstract: "I study how financial intermediaries' use of alternative data and machine learning affects asset prices and market dynamics. Building on the intermediary asset pricing framework, I show that data-driven strategies create new channels of risk transmission across markets. The model predicts that intermediaries with superior data processing capabilities earn higher risk-adjusted returns but also contribute to systemic fragility. Empirical tests using proprietary data from major financial institutions support these predictions, revealing a fundamental trade-off between individual firm performance and market stability.",
        //     pdf: "paper2.pdf",
        //     appendix: "#",
        //     figure: "https://via.placeholder.com/250x180/f8f8f8/666?text=Figure+2",
        //     figureCaption: "Figure 2: Model Predictions"
        // },
    ],

     // Work in Progress
    workInProgress: [
        {
            title: "Optimal Variance Swaps",
            coauthors: "with Paul Schneider, Rohan Sen, and Marc Van Uffelen",
            status: "", 
            conference: "", 
            abstract: "",
            prizes: "", 
            comingSoon: true,
            // figure: "images/placeholder.png",
            // figureCaption: "Figure: Preliminary Results"
        },
    ],
    
    // Discussions/Blog posts
    discussions: [
    {
        title: "Corporate Earnings Calls and Analyst Beliefs",
        date: "SFI PhD Workshop 2025",
        description: "",
        ppt: "Corporate Earnings - Discussion.pdf"  // Add your filename here
    },
    {
        title: "Heterogeneous Beliefs Recovery",
        date: "SFI PhD Workshop 2024",
        description: "",
        ppt: "Heterogenous Beliefs Recovery - Discussion.pdf"  // Add your filename here
    },
],
        // {
        //     title: "Python vs R for Financial Econometrics",
        //     date: "September 2024",
        //     description: "A practical comparison of Python and R for financial econometrics, with emphasis on performance optimization and reproducibility."
        // }
    
    // Teaching experience
    teaching: [
        {
            title: "Computer Science for Economists II",
            role: "Teaching Assistant",
            employer: "USI Lugano",
            semester: "Fall 2024",
            level: "",
            description: ""
        },
        {
            title: "Mathematics: Real Analysis",
            role: "Teaching Assistant",
            employer: "USI Lugano",
            semester: "Fall 2023",
            level: "",
            description: ""
        },
        {
            title: "Advanced Game Theory",
            role: "Teaching Assistant",
            employer: "Ulm University",
            semester: "Spring 2019",
            level: "",
            description: ""
        }
    ],
    
    // Footer
    footer: {
        copyright: "© 2025 Emanuele Luzzi",
        lastUpdated: "October 2025"
    }
};