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
    // interests: "Financial Intermediation, Asset Pricing and applications of Machine Learning in Finance",
    
    // Bio paragraph
    bio: "I am a PhD candidate in Finance at the Swiss Finance Institute and USI Lugano. My research focuses on the intersection of financial intermediation, asset pricing, and applications of machine learningin finance.",
    
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
            coauthors: "with John Doe and Jane Smith",
            abstract: "We estimate the stochastic discount factor (SDF) by recovering the Sharpe-optimal nonlinear claim through a trading strategy in delta-hedged option portfolios. Our nonparametric approach leverages the classical duality between the minimum-variance SDF and the maximum Sharpe ratio portfolio, and comes with finite-sample performance guarantees, as well as a formal testing framework for the monotonicity and convexity of the SDF. We perform an empirical study in the S\&P 500 market and find heterogeneous shapes across different states of the world as measured by the price of volatility and the maturities of options. While SDF implied by monthly options are monotonically decreasing, their convexity/concavity is less pronounced.  Ultra-short ODTE options, on the contrary, exhibit a pronounced U-shape in higher-volatility states. Our empirical results are robust across various models of the information set.",
            // pdf: "LSDF.pdf",
            ssrn: "#",
            slides: "#",
            figure: "https://via.placeholder.com/250x180/f8f8f8/666?text=Figure+1",
            figureCaption: "Figure 1: Main Results"
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
    
    // Discussions/Blog posts
    discussions: [
        {
            title: "The Future of Quantitative Finance in the AI Era",
            date: "November 2024",
            description: "Thoughts on how artificial intelligence is reshaping quantitative finance and what it means for academic research and industry practice."
        },
        {
            title: "Market Microstructure and Retail Trading",
            date: "October 2024",
            description: "Analysis of recent trends in retail trading and their implications for market quality and price discovery."
        },
        {
            title: "Python vs R for Financial Econometrics",
            date: "September 2024",
            description: "A practical comparison of Python and R for financial econometrics, with emphasis on performance optimization and reproducibility."
        }
    ],
    
    // Teaching experience
    teaching: [
        {
            title: "Financial Data Science",
            role: "Teaching Assistant",
            semester: "Fall 2024",
            level: "Master's Level",
            description: "Advanced course covering machine learning applications in finance, including portfolio optimization, risk management, and algorithmic trading. Focus on Python implementation and practical applications using real financial data."
        },
        {
            title: "Introduction to Financial Markets",
            role: "Teaching Assistant",
            semester: "Spring 2024",
            level: "Bachelor's Level",
            description: "Fundamental concepts in financial markets, covering equity markets, fixed income, derivatives, and market microstructure. Emphasis on connecting theoretical concepts with real-world applications."
        },
        {
            title: "Empirical Asset Pricing",
            role: "Guest Lecturer",
            semester: "Fall 2023",
            level: "PhD Level",
            description: "Guest lectures on machine learning methods in empirical asset pricing, covering topics such as regularization, cross-validation, and interpretable ML for factor discovery."
        }
    ],
    
    // Footer
    footer: {
        copyright: "© 2025 Emanuele Luzzi",
        lastUpdated: "September 2024"
    }
};