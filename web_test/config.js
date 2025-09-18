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
    interests: "Financial Intermediation, Asset Pricing, Machine Learning",
    
    // Bio paragraph
    bio: "AOOO I am a PhD candidate in Finance at the Swiss Finance Institute and USI Lugano. My research focuses on the intersection of financial intermediation, asset pricing, and machine learning applications in finance, with particular emphasis on market microstructure and financial econometrics.",
    
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
            title: "The Impact of Machine Learning on Market Microstructure: Evidence from High-Frequency Trading",
            coauthors: "with John Doe and Jane Smith",
            abstract: "This paper examines how machine learning algorithms have transformed market microstructure in modern financial markets. Using a comprehensive dataset of high-frequency trading activity, we document significant changes in price discovery, liquidity provision, and market efficiency following the widespread adoption of ML-based trading strategies. Our findings suggest that while ML enhances price efficiency in normal market conditions, it may amplify volatility during periods of market stress. We develop a theoretical framework that captures these dual effects and provides testable implications for regulatory policy.",
            pdf: "paper1.pdf",
            ssrn: "#",
            slides: "#",
            figure: "https://via.placeholder.com/250x180/f8f8f8/666?text=Figure+1",
            figureCaption: "Figure 1: Main Results"
        },
        {
            title: "Intermediary Asset Pricing in the Age of Big Data",
            coauthors: "Solo authored",
            abstract: "I study how financial intermediaries' use of alternative data and machine learning affects asset prices and market dynamics. Building on the intermediary asset pricing framework, I show that data-driven strategies create new channels of risk transmission across markets. The model predicts that intermediaries with superior data processing capabilities earn higher risk-adjusted returns but also contribute to systemic fragility. Empirical tests using proprietary data from major financial institutions support these predictions, revealing a fundamental trade-off between individual firm performance and market stability.",
            pdf: "paper2.pdf",
            appendix: "#",
            figure: "https://via.placeholder.com/250x180/f8f8f8/666?text=Figure+2",
            figureCaption: "Figure 2: Model Predictions"
        },
        {
            title: "Deep Learning and Cross-Sectional Asset Pricing: A New Frontier",
            coauthors: "with Maria Garcia",
            abstract: "We develop a novel deep learning framework for understanding cross-sectional variation in expected returns. Unlike traditional factor models, our approach allows for complex, non-linear interactions between firm characteristics and risk premia. The model uncovers previously hidden patterns in the data and generates out-of-sample Sharpe ratios that significantly exceed those of existing methods. We provide economic interpretation of the learned representations and show how they relate to fundamental sources of systematic risk. Preliminary results suggest that machine learning can bridge the gap between empirical asset pricing and economic theory.",
            comingSoon: true,
            figure: "https://via.placeholder.com/250x180/f8f8f8/666?text=Figure+3",
            figureCaption: "Figure 3: Network Architecture"
        }
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