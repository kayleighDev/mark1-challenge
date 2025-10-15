function applyVariantE_Redesign() {
    const blockElement = document.querySelector('#lp-pom-block-414');

    if (blockElement && !document.getElementById('key-benefits-list')) {
        const benefitHTML = `
            <style>
                #key-benefits-list {
                    position: absolute;
                    top: 150px;
                    left: 46%;
                    transform: translateX(-85%);
                    width: 90%;
                    max-width: 450px;
                    z-index: 5; /* keep below navbar */
                    background-color: white;
                    padding: 52px 48px;
                    border-radius: 12px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
                    transition: all 0.4s ease;
                    margin-top: 120px;
                    list-style: none;
                    font-size: 17px;
                    line-height: 2.3;
                    color: #222;
                    opacity: 0;
                    animation: fadeUp 0.8s ease forwards;
                }

                #key-benefits-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    margin-bottom: 22px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                #key-benefits-list li:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                    padding-bottom: 0;
                }

                #key-benefits-list .icon {
                    font-size: 22px;
                    flex-shrink: 0;
                    color: #16a34a;
                    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.1));
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translate(-85%, 40px); }
                    to { opacity: 1; transform: translate(-85%, 0); }
                }

                /* ===== RESPONSIVE FIX ===== */
                @media (max-width: 768px) {
                    #key-benefits-list {
                        position: absolute;
                        top: 420px; /* PUSH IT BELOW HERO IMAGE */
                        left: 50%;
                        transform: translateX(-50%);
                        width: 92%;
                        max-width: 380px;
                        padding: 24px 20px;
                        border-radius: 10px;
                        margin-top: 450px;
                        box-shadow: 0 6px 18px rgba(0,0,0,0.05);
                        font-size: 15px;
                        line-height: 1.9;
                        margin-left: 145px;
                        margin-botton: 70px;
                    }
                }

                @media (max-width: 480px) {
                    #key-benefits-list {
                        top: 380px; /* slightly less for smaller phones */
                        width: 95%;
                        padding: 20px 18px;
                        border-radius: 8px;
                        font-size: 14.5px;
                    }
                }
            </style>

            <ul id="key-benefits-list">
                <li>
                    <span class="icon">✅</span>
                    <span><strong>Guaranteed Memory Recall</strong> and optimized high-performance learning for every topic.</span>
                </li>
                <li>
                    <span class="icon">🧠</span>
                    <span><strong>Zero-Effort Retention:</strong> acquire and retain knowledge with minimal review time.</span>
                </li>
                <li>
                    <span class="icon">🚀</span>
                    <span><strong>Rapid Progress:</strong> accelerate your study and mastery speed by over 50%.</span>
                </li>
                <li>
                    <span class="icon">📈</span>
                    <span><strong>Adaptive Optimization:</strong> AI-driven learning adjusts automatically to your strengths and weaknesses.</span>
                </li>
            </ul>
        `;

        document.body.insertAdjacentHTML('beforeend', benefitHTML);

        window.CFQ = window.CFQ || [];
        window.CFQ.push({ emit: 'variantRendered' });
        return true;
    }
    return false;
}

let observer = null;
function checkAndRun() {
    if (applyVariantE_Redesign()) {
        if (observer) observer.disconnect();
    } else if (!observer) {
        observer = new MutationObserver(checkAndRun);
        observer.observe(document.body, { childList: true, subtree: true });
    }
}
checkAndRun();
