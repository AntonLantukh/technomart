'use strict'

var mapToggler = document.querySelector('.contacts__map');
var mapClose = document.querySelector('.contacts__map-close');
var map = document.querySelector('.contacts__map-full-screen');


mapToggler.addEventListener('click', function () {
  event.preventDefault();
  map.classList.remove('visually-hidden');
})

mapClose.addEventListener('click', function () {
  event.preventDefault();
  map.classList.add('visually-hidden');
})
