burgerBtnElem.addEventListener('click', function (e) {
    e.preventDefault();

    navMenuElem.classList.toggle('menu-open');

    if (this.getAttribute('aria-expanded') == 'false') {
        this.setAttribute('aria-expanded', 'true'),
            this.setAttribute('aria-label', 'закрыть навигацию');
    } else {
        this.setAttribute('aria-expanded', 'false'),
            this.setAttribute('aria-label', 'открыть навигацию');
    }
});