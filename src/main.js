'use strict';

// slider
const slider = document.querySelector('.slider');
const photoContainer = document.querySelector('.testemonials__slider');

const nextButton = document.querySelector('.slider__button-right');
const previousButton = document.querySelector('.slider__button-left');

let position = 0;

nextButton.addEventListener('click', nextPhoto);
previousButton.addEventListener('click', prevPhoto);

function nextPhoto() {
  const photoContainerWidth = photoContainer.clientWidth;
  let photos;

  if (photoContainerWidth <= 1000 && photoContainerWidth >= 800) {
    photos = 2;
  } else if (photoContainerWidth <= 700 && photoContainerWidth > 400) {
    photos = 3;
  } else {
    photos = 6;
  }

  if (position <= -((photos - 1) * photoContainerWidth)) {
    return;
  }

  position -= photoContainerWidth;

  slider.style.transform = `translateX(${position}px)`;
}

function prevPhoto() {
  const photoContainerWidth = photoContainer.clientWidth;

  if (position >= 0) {
    return;
  }

  position += photoContainerWidth;

  slider.style.transform = `translateX(${position}px)`;
}

// link for contact

const bookButton = document.querySelector('.header__button');

bookButton.addEventListener('click', () => (
  window.location = '#contact'
));
