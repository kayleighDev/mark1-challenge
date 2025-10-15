function applyVariantF() {
    const stickyBarHTML = `
    <div id="exit-intent-bar" style="background-color: #f04e23; color: white; padding: 15px; text-align center;
    position: fixed; bottom: 0; left: 0; width: 100%; z-index: 9999; box-shadow: 0 -2px 10px rgba(0,0,0,0.3);">
    <p style="margin: 0; display: inline-block; font-size: 18px; font-weight: 700;">Limited Time Offer: Don't Leave Without Your Free Lesson!</p>
            <a href="#" style="background-color: white; color: #f04e23; text-decoration: none; padding: 8px 20px; border-radius: 5px; margin-left: 20px; font-weight: 700; display: inline-block;">Start Your Free Trial Now!</a>
        </div>
    `;
    const body = document.querySelector('body'); 
    
    if (body && !document.getElementById('exit-intent-bar')) {
        body.insertAdjacentHTML('beforeend', stickyBarHTML);
        window.CFQ = window.CFQ || [];
        window.CFQ.push({ emit: 'variantRendered' });
        return true;
    }
    return false;
}
let observer = null;
function checkAndRun() {
    if (applyVariantF()) {
        if (observer) observer.disconnect();
    } else if (!observer) {
        observer = new MutationObserver(checkAndRun);
        observer.observe(document.body, { childList: true, subtree: true });
    }
}
checkAndRun();