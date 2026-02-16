/**
 * Google Analytics Setup
 * Include this file to enable tracking
 */

(function() {
    // Google Analytics Measurement ID
    const GA_ID = 'G-23JF9BFV2J';
    
    // Dynamically load gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
    
    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', GA_ID);
})();
