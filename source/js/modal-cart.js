'use strict'

var cartTogglers = document.querySelectorAll('.good__button--buy');
var cartClose = document.querySelector('.modal-cart__close');
var cart = document.querySelector('.modal-cart');
var overlay = document.querySelector('.modal-overlay')

cartTogglers.forEach(function(item, i, arr) {
  item.addEventListener('click', function () {
    event.preventDefault();
    cart.classList.remove('visually-hidden');
    overlay.classList.remove('visually-hidden');
  })
});

cartClose.addEventListener('click', function () {
  event.preventDefault();
  cart.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
})
