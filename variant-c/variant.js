function applyVariantC_Premium() {
    const bannerHTML = `
        <style>
            #social-proof-banner-premium {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 9999;
                background: linear-gradient(90deg, #76a9fb, #0984bb); /* darker sky blue tones */
                border-bottom: 2px solid #2458c9;
                padding: 14px 10px;
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                color: #ffffff; /* white text for contrast */
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                opacity: 0;
                transform: translateY(-100%);
                animation: slideDown 0.5s ease-out forwards;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }

            /* Premium Star Icon */
            #social-proof-banner-premium .star {
                font-size: 20px;
                background: linear-gradient(45deg, #ffd700, #ffae00, #ffdf70);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: inline-block;
                filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
            }

            /* Gradient blue link */
            #social-proof-banner-premium a {
                color: #fff;
                text-decoration: none;
                font-weight: 600;
                margin-left: 6px;
                transition: opacity 0.2s ease, text-decoration 0.2s ease;
            }

            #social-proof-banner-premium a:hover {
                opacity: 0.85;
                text-decoration: underline;
            }

            @keyframes slideDown {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @media (max-width: 600px) {
                #social-proof-banner-premium {
                    font-size: 14px;
                    padding: 12px 8px;
                    flex-direction: column;
                    gap: 4px;
                }
            }
        </style>

        <div id="social-proof-banner-premium">
            <span class="star">★</span>
            Trusted by <strong>10,000+ businesses</strong>.
            <a href="#">View Case Studies →</a>
        </div>
    `;

    const body = document.querySelector('body');

    if (body && !document.getElementById('social-proof-banner-premium')) {
        body.insertAdjacentHTML('afterbegin', bannerHTML);
        body.style.paddingTop = '60px';
        window.CFQ = window.CFQ || [];
        window.CFQ.push({ emit: 'variantRendered' });
        return true;
    }
    return false;
}

// Universal Observer Setup
let observer = null;
function checkAndRun() {
    if (applyVariantC_Premium()) {
        if (observer) observer.disconnect();
    } else if (!observer) {
        observer = new MutationObserver(checkAndRun);
        observer.observe(document.body, { childList: true, subtree: true });
    }
}
checkAndRun();
