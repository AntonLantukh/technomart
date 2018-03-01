'use strict'

var popupToggler = document.querySelector('.contacts__button');
var popupClose = document.querySelector('.modal-popup__close');
var popup = document.querySelector('.modal-popup');
var overlay = document.querySelector('.modal-overlay')

popupToggler.addEventListener('click', function () {
  event.preventDefault();
  popup.classList.remove('visually-hidden');
  overlay.classList.remove('visually-hidden');
})

popupClose.addEventListener('click', function () {
  event.preventDefault();
  popup.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
})
