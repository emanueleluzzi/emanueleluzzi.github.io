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
    visiting: "Visiting Scholar, Boston University Questrom School of Business (2026–27)",
    email: "emanuele.luzzi@usi.ch",
    profileImage: "images/round_image.png",
    
    seo: {
        pageTitle: "Emanuele Luzzi",    
        description: "PhD candidate in Finance at Swiss Finance Institute and USI Lugano, visiting Boston University Questrom. Asset pricing, behavioral finance, machine learning.",
        keywords: "Emanuele Luzzi, Emanuele, Luzzi, Finance PhD, PhD, Asset Pricing, Asset Management, Behavioral Finance, Delegated Asset Management, Subjective Beliefs, Beliefs, Financial Econometrics, Financial Intermediation, Machine Learning, Swiss Finance Institute, Swiss, Finance, Institute, Job Market, Lugano, JMP, USI Lugano, Boston University, Questrom, Visiting Scholar"
    },

    // Research interests (displayed as a bulleted list)
    interests: [
        "Asset Pricing",
        "Behavioral Finance",
        "Asset Management",
        "Financial Econometrics"
    ],
    
    // Bio paragraph
    bio:  "My research infers the beliefs and preferences of investors and intermediaries from the returns they earn and the portfolios they hold, using structural estimation and machine learning.",
    
    // Contact links
    links: {
        email: "mailto:emanuele.luzzi@usi.ch",
        linkedin: "https://www.linkedin.com/in/emanuele-luzzi-6bb39a124/",
        // github: "https://github.com/emanueleLuzzi",
        cv: "cv.pdf"
    },
    
    // Research papers
    papers: [
        {
            title: "Tradable Recovery",
            coauthors: "with Paul Schneider and Rohan Sen",
            abstract: "We estimate the stochastic discount factor (SDF) through a trading strategy in delta-hedged option portfolios. We find that investor risk preferences, as revealed by the shape of the SDF, vary systematically across volatility regimes and progressively across option maturities.",
            pdf: "",
            status: "", 
            prizes: "", 
            conference: [
                "Frontiers of Factor Investing (FoFi), Lancaster University",
                "University of Geneva, Brown-Bag",
                "Financial Econometrics and Machine Learning (FinEML), Erasmus University Rotterdam",
                "Society for Financial Econometrics (SoFiE), ESSEC",
                "Queen Mary, PhD Student Workshop",
                "USI Lugano, Brown-Bag",
                "SFI, PhD Student Workshop"
            ],
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
            title: "Flow Hedging and Revealed Beliefs",
            coauthors: "Solo authored",
            status: "",
            conference: [
                "USI Lugano"
            ],
            abstract: "",
            prizes: "",
            slides: "",
            comingSoon: true,
            figure: "",
            figureCaption: ""
        },
        {
            title: "Optimal Variance Swaps",
            coauthors: "with Paul Schneider and Rohan Sen",
            status: "", 
            conference: [
                "Society for Financial Econometrics (SoFiE), University of Macau",
                "SFI Research Days, Gerzensee",
                "Financial Econometrics in the Age of Big Data [Poster], HKUST"
            ],
            abstract: "Which variance swap best captures the preferences of a mean-variance investor? Variance swaps, such as the trading strategy replicating the VIX, are problematic in an investment context. We estimate the option portfolio weights and the hedge ratios replicating variance swaps that are optimal with respect to the Sharpe ratio nonparametrically.",
            prizes: "", 
            slides: "",
            comingSoon: true,
            figure: "images/OptVSWAP_paper_pic.png",
            figureCaption: ""
        },
    ],
    
    // Discussions/Blog posts
    discussions: [
    {
        title: "Option-Implied Elasticity of Intertemporal Substitution",
        authors: "D. Hager, M. Jehli",
        date: "SFI Research Days 2026, Gerzensee",
        description: "",
        ppt: "Option EIS - Discussion.pdf"
    },
    {
        title: "Machine Learning Mutual Fund Flows",
        authors: "J. Fausch, M. Frigg, S. Ruenzi, F. Weigert",
        date: "EUROFIDAI-ESSEC Paris December Finance 2025",
        description: "",
        ppt: "Machine Learning Mutual Fund Flows - Discussion.pdf"
    },
    {
        title: "Corporate Earnings Calls and Analyst Beliefs",
        authors: "Giuseppe Matera",
        date: "SFI PhD Workshop 2025",
        description: "",
        ppt: "Corporate Earnings - Discussion.pdf"
    },
    {
        title: "Double Machine Learning for Static Panel Data with Instrumental Variables",
        authors: "A. Baiardi, P. Clarke, A. Naghi, A. Polselli",
        date: "Queen Mary, PhD Student Workshop 2025",
        description: "",
        ppt: "DML - Discussion.pdf"
    },
    {
        title: "Heterogeneous Beliefs Recovery",
        authors: "Julien Hugonnier, Darius Nik Nejad",
        date: "SFI PhD Workshop 2024",
        description: "",
        ppt: "Heterogenous Beliefs Recovery - Discussion.pdf"
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
            title: "Arbitrage Pricing",
            role: "Teaching Assistant",
            employer: "USI Lugano | M.Sc. Finance",
            semester: "2026",
            level: "",
            description: ""
        },

        {
            title: "Computer Science",
            role: "Teaching Assistant",
            employer: "USI Lugano | B.Sc. Economics",
            semester: "2024",
            level: "",
            description: ""
        },
        {
            title: "Math",
            role: "Teaching Assistant",
            employer: "USI Lugano | B.Sc. Economics",
            semester: "2023",
            level: "",
            description: ""
        },
        {
            title: "Game Theory",
            role: "Teaching Assistant",
            employer: "Ulm University | M.Sc. Finance",
            semester: "2019",
            level: "",
            description: ""
        }
    ],
    
    // Footer
    footer: {
        copyright: "© 2025 Emanuele Luzzi",
        lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    }
};