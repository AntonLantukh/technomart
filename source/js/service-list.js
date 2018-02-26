'use strict'

var sliderDeliveryToggle = document.querySelector('.service-list__element--delivery');
var sliderGuaranteeToggle = document.querySelector('.service-list__element--guarantee');
var sliderCreditToggle = document.querySelector('.service-list__element--credit');

var slideDelivery = document.querySelector('.service__element--delivery');
var slideGuarantee = document.querySelector('.service__element--guarantee');
var slideCredit = document.querySelector('.service__element--credit');

var buttonDelivery = document.querySelector('.service-list__button--delivery');
var buttonGuarantee = document.querySelector('.service-list__button--guarantee');
var buttonCredit = document.querySelector('.service-list__button--credit');


sliderDeliveryToggle.addEventListener('click', function () {
  if (slideDelivery.classList.contains('visually-hidden')) {
    sliderDeliveryToggle.classList.add('service-list__element--active');
    buttonDelivery.classList.add('service-list__button--active');

    sliderGuaranteeToggle.classList.remove('service-list__element--active');
    sliderCreditToggle.classList.remove('service-list__element--active');
    buttonGuarantee.classList.remove('service-list__button--active');
    buttonCredit.classList.remove('service-list__button--active');

    slideDelivery.classList.remove('visually-hidden');
    slideGuarantee.classList.add('visually-hidden');
    slideCredit.classList.add('visually-hidden');
  }
});

sliderGuaranteeToggle.addEventListener('click', function () {
  if (slideGuarantee.classList.contains('visually-hidden')) {
    sliderGuaranteeToggle.classList.add('service-list__element--active');
    buttonGuarantee.classList.add('service-list__button--active');

    sliderDeliveryToggle.classList.remove('service-list__element--active');
    sliderCreditToggle.classList.remove('service-list__element--active');
    buttonDelivery.classList.remove('service-list__button--active');
    buttonCredit.classList.remove('service-list__button--active');

    slideGuarantee.classList.remove('visually-hidden');
    slideDelivery.classList.add('visually-hidden');
    slideCredit.classList.add('visually-hidden');
  }
});

sliderCreditToggle.addEventListener('click', function () {
  if (slideCredit.classList.contains('visually-hidden')) {
    sliderCreditToggle.classList.add('service-list__element--active');
    buttonCredit.classList.add('service-list__button--active');

    sliderGuaranteeToggle.classList.remove('service-list__element--active');
    sliderDeliveryToggle.classList.remove('service-list__element--active');
    buttonGuarantee.classList.remove('service-list__button--active');
    buttonDelivery.classList.remove('service-list__button--active');

    slideCredit.classList.remove('visually-hidden');
    slideDelivery.classList.add('visually-hidden');
    slideGuarantee.classList.add('visually-hidden');
  }
});
