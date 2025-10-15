function applyVariantB_Final() {
    const injectionTarget = document.querySelector('main > div.relative');
    const secondHeadlineLine = document.querySelector('h1[class*="headline-xl"] + *');

    if (injectionTarget && !document.getElementById('how-it-works-section-final')) {

        if (secondHeadlineLine) {
            secondHeadlineLine.style.display = 'none';
        }

        const newSectionHTML = `
            <style>
                /* ONLY STYLE THE HOW IT WORKS SECTION */
                #how-it-works-section-final {
                    width: 100%;
                    padding: 60px 20px 0px 20px;
                    text-align: center;
                    color: #333;
                    background-color: white;
                    position: relative;
                    z-index: 100;
                }

                #how-it-works-section-final h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 55px;
                    color: #333;
                }

                .pyramid-wrapper {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    justify-items: center;
                    padding: 0 20px;
                }

                .top-card {
                    width: 100%;
                    max-width: 320px;
                    background: #f0fff0;
                    border: 1px solid #d1ffd1;
                    border-radius: 14px;
                    padding: 28px 24px;
                    transition: all 0.3s ease;
                }

                .top-card:hover {
                    transform: translateY(-3px);
                    border-color: #22c55e;
                    box-shadow: 0 6px 14px rgba(34,197,94,0.12);
                }

                .top-card span {
                    display: block;
                    font-size: 36px;
                    margin-bottom: 10px;
                    color: #333;
                }

                .top-card h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 8px;
                    color: #333;
                }

                .top-card p {
                    font-size: 1rem;
                    color: #444;
                    line-height: 1.5;
                }

                @media (max-width: 768px) {
                    .pyramid-wrapper {
                        grid-template-columns: 1fr;
                    }
                }
            </style>

            <div id="how-it-works-section-final">
                <h2>How It Works: Streamline Your Finances</h2>
                <div class="pyramid-wrapper">
                    <div class="top-card">
                        <span>📊</span>
                        <h3>PLAN</h3>
                        <p>Set smart spending limits and issue cards with instant, clear controls.</p>
                    </div>
                    <div class="top-card">
                        <span>💳</span>
                        <h3>SPEND</h3>
                        <p>Use physical or virtual cards and handle vendor payments easily and securely.</p>
                    </div>
                    <div class="top-card">
                        <span>💰</span>
                        <h3>SAVE</h3>
                        <p>Automate receipt collection and reconciliation to maximize cashback and efficiency.</p>
                    </div>
                </div>
            </div>
        `;

        injectionTarget.insertAdjacentHTML('afterend', newSectionHTML);

        window.CFQ = window.CFQ || [];
        window.CFQ.push({ emit: 'variantRendered' });
        return true;
    }
    return false;
}

let observer = null;
function checkAndRun() {
    if (applyVariantB_Final()) {
        if (observer) observer.disconnect();
    } else if (!observer) {
        observer = new MutationObserver(checkAndRun);
        observer.observe(document.body, { childList: true, subtree: true });
    }
}
checkAndRun();