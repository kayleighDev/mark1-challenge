function applyVariantD_Ultimate() {
    const newImageUrl = 'https://i.pinimg.com/1200x/18/95/10/1895106284edc6c9104a3383b49388f4.jpg';
    const oldImage = document.querySelector('body img');
    const injectionPoint = document.querySelector('#lp-pom-block-414');

    if (injectionPoint && !document.getElementById('new-hero-image-wrapper')) {
        
        const imageWrapperHTML = `
            <style>

                #lp-pom block-414{
                    margin-bottom: 0 !important;
                    padding-bottom: 0 !important;
                }

                #new-hero-image-wrapper {
                    position: absolute;
                    top: 150px;
                    left: 46%;
                    transform: translateX(-85%);
                    width: 80%;
                    max-width: 547px;
                    z-index: 10000;
                    background-color: white;
                    padding: 10px;
                    border-radius: 10px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
                    transition: all 0.4s ease;
                    margin-top: 40px;
                }

                #new-hero-image-wrapper img {
                    width: 100%;
                    height: 570px;
                    display: block;
                    border-radius: 8px;
                    object-fit: cover;
                }

                /* ===== RESPONSIVE STYLES ===== */
                @media (max-width: 1024px) {
                    #new-hero-image-wrapper {
                        transform: translateX(-50%);
                        top: 120px;
                        width: 90%;
                        max-width: 520px;
                    }

                    #new-hero-image-wrapper img {
                        height: 480px;
                    }
                }

                @media (max-width: 768px) {
                    #new-hero-image-wrapper {
                        position: relative;
                        top: 0;
                        left: 0;
                        transform: none;
                        width: 100%;
                        max-width: 100%;
                        background: transparent;
                        box-shadow: none;
                        padding: 0;
                        margin: 0;
                        border-radius: 0;
                        margin-top: -7px;
                    }

                    #new-hero-image-wrapper img {
                        width: 100%;
                        height: auto;
                        display: block;
                        border-radius: 0;
                        object-fit: cover;
                    }
                }

                @media (max-width: 480px) {
                    #new-hero-image-wrapper {
                        top: 0;
                        width: 100vw;
                        margin: 0;
                        padding: 0;
                    }

                    #new-hero-image-wrapper img {
                        border-radius: 0;
                        width: 100vw;
                        height: auto;
                        display: block;
                    }
                }
            </style>

            <div id="new-hero-image-wrapper">
                <img src="${newImageUrl}" alt="Hero Image" />
            </div>
        `;
        
        // 👇 Insert directly after the hero section — not at the top of <body>
        injectionPoint.insertAdjacentHTML('afterend', imageWrapperHTML);

        if (oldImage) {
            oldImage.style.display = 'none'; 
            if (oldImage.parentElement) oldImage.parentElement.style.display = 'none';
        }

        window.CFQ = window.CFQ || [];
        window.CFQ.push({ emit: 'variantRendered' });
        return true;
    }
    return false;
}

let observer = null;
function checkAndRun() {
    if (applyVariantD_Ultimate()) {
        if (observer) observer.disconnect();
    } else if (!observer) {
        observer = new MutationObserver(checkAndRun);
        observer.observe(document.body, { childList: true, subtree: true });
    }
}
checkAndRun();
