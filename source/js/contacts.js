'use strict'

var mapToggler = document.querySelector('.contacts__map');
var mapClose = document.querySelector('.contacts__map-close');
var map = document.querySelector('.contacts__map-full-screen');
var overlay = document.querySelector('.modal-overlay')


mapToggler.addEventListener('click', function () {
  event.preventDefault();
  map.classList.remove('visually-hidden');
  overlay.classList.remove('visually-hidden');

})

mapClose.addEventListener('click', function () {
  event.preventDefault();
  map.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
})
