'use strict'

var mapToggler = document.querySelector('.contacts__map"');
var map = document.querySelector('.contacts__map-full-screen');


mapToggler.addEventListener('click', function () {
  map.classList.remove('visually-hidden');
})
