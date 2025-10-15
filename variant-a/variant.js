function applyVariantA() {
    const headline = document.querySelector('h1[class*="headline-xl"]');

    if (headline) {
        headline.innerHTML = 'The Spend Management Platform Built for Total Control and Maximum Savings.';
        
        window.CFQ = window.CFQ || [];
        window.CFQ.push({ emit: 'variantRendered' });
        return true;
    }
    return false;
}

function observeDOM() {
    if (applyVariantA()) {
        if (observer) observer.disconnect();
        return;
    }
    if (!observer) {
        let observer = new MutationObserver(observeDOM);
        const config = { childList: true, subtree: true, attributes: true };
        observer.observe(document.body, config);
    }
}

let observer = null;
observeDOM();