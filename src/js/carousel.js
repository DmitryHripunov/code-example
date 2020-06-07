const mySiema = new Siema({
    selector: '.portfolio__list-js',
    easing: 'ease-out',
    perPage: {
        320: 1,
        880: 2,
        1211: 3
    },
    loop: true,
});

document.querySelector('.works-gallery__button_prev-js').addEventListener('click', () => mySiema.prev());
document.querySelector('.works-gallery__button_next-js').addEventListener('click', () => mySiema.next());

startPaginationElem.addEventListener('click', () => mySiema.goTo(0));
centerPaginationElem.addEventListener('click', () => mySiema.goTo(4));
endPaginationElem.addEventListener('click', () => mySiema.goTo(5));
