modalBtnElem.forEach((button) => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    bodyElem.classList.toggle('modal-open');

    if (modalElem.getAttribute('aria-modal') == 'false') {
        modalElem.setAttribute('aria-modal', 'true'),
        modalElem.setAttribute('aria-hidden', 'false');
    } else {
        modalElem.setAttribute('aria-modal', 'false'),
        modalElem.setAttribute('aria-hidden', 'true');
    }

    focusFieldElem.focus();
  });
});

//клик Escape
document.addEventListener('keydown', function (e) {
  if (e.target === "Escape" || e.target === "Esc" || e.keyCode === 27) {
    bodyElem.classList.remove('modal-open');
    modalContentElem.reset();
    modalElem.setAttribute('aria-modal', 'false'),
      modalElem.setAttribute('aria-hidden', 'true');
  };
});


//кнопка закрыть модальное окно
modalCloseElem.addEventListener('click', function(e) {
  e.preventDefault()

  bodyElem.classList.remove('modal-open');
  modalContentElem.reset();
  modalElem.setAttribute('aria-modal', 'false'),
  modalElem.setAttribute('aria-hidden', 'true');
});

//клик вне модального окна
modalElem.addEventListener('click', function(e) {
  if (!e.target.closest('.modal-content-js')) {

    bodyElem.classList.remove('modal-open');
    modalContentElem.reset();
    modalElem.setAttribute('aria-modal', 'false'),
    modalElem.setAttribute('aria-hidden', 'true');
  };
});

// маска для телефона
inputMask.addEventListener('keydown', function (event) {
  if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
     event.preventDefault() 
  }
  let mask = '+7 111 111-11-11'; // Задаем маску

  if (/[0-9\+\ \-\(\)]/.test(event.key)) {

    let currentString = this.value;
    let currentLength = currentString.length;
    if (/[0-9]/.test(event.key)) {
      if (mask[currentLength] == '1') {
        this.value = currentString + event.key;
      } else {
        for (var i = currentLength; i < mask.length; i++) {
          if (mask[i] == '1') {
            this.value = currentString + event.key;
            break;
          }
          currentString += mask[i];
        }
      }
    }
  }
});