for (let anchorElem of anchorsElem) {
    anchorElem.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionElem = anchorElem.getAttribute('href');
        document.querySelector('' + sectionElem).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        navMenuElem.classList.remove('menu-open');
        burgerBtnElem.setAttribute('aria-expanded', 'false');
        burgerBtnElem.setAttribute('aria-label', 'открыть навигацию');

    });
};