'use strict'

var slider = document.querySelector('.slider');

var sliderFirstToggle = document.querySelector('.slider__toggle--first');
var sliderSecondToggle = document.querySelector('.slider__toggle--second');

var sliderArrowLeft = document.querySelector('.slider__arrow--left');
var sliderArrowRight = document.querySelector('.slider__arrow--right');

var sliderElementFirst = document.querySelector('.slider__element--first');
var sliderElementSecond = document.querySelector('.slider__element--second');

sliderFirstToggle.addEventListener('click', function () {
  if (!slider.classList.contains('slider--first')) {
    slider.classList.remove('slider--second');
    slider.classList.add('slider--first');
    sliderElementSecond.classList.add('visually-hidden');
    sliderElementFirst.classList.remove('visually-hidden');
  }
});

sliderSecondToggle.addEventListener('click', function () {
  if (!slider.classList.contains('slider--second')) {
    slider.classList.remove('slider--first');
    slider.classList.add('slider--second');
    sliderElementFirst.classList.add('visually-hidden');
    sliderElementSecond.classList.remove('visually-hidden');
  }
});

sliderArrowLeft.addEventListener('click', function () {
  if (!slider.classList.contains('slider--first')) {
    slider.classList.remove('slider--second');
    slider.classList.add('slider--first');
    sliderElementSecond.classList.add('visually-hidden');
    sliderElementFirst.classList.remove('visually-hidden');
  }
});

sliderArrowRight.addEventListener('click', function () {
  if (!slider.classList.contains('slider--second')) {
    slider.classList.remove('slider--first');
    slider.classList.add('slider--second');
    sliderElementFirst.classList.add('visually-hidden');
    sliderElementSecond.classList.remove('visually-hidden');
  }
});
