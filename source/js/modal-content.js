'use strict'

var popupToggler = document.querySelector('.contacts__button');
var popupClose = document.querySelector('.modal-popup__close');
var popup = document.querySelector('.modal-popup');

popupToggler.addEventListener('click', function () {
  event.preventDefault();
  popup.classList.remove('visually-hidden');
})

popupClose.addEventListener('click', function () {
  event.preventDefault();
  popup.classList.add('visually-hidden');
})
