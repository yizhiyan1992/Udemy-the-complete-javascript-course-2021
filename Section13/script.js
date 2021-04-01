'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//creating and inserting elements
const header = document.querySelector('header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  "we use cookies for......<button class='btn btn--close--cookie'> Got it!</button>";
header.prepend(message);
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//styles
message.style.backgroundColor = '#37383d';
message.style.setProperty('background-color', 'white');
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(message.style.color);
console.log(getComputedStyle(message)['width']);
message.style.width =
  Number.parseFloat(getComputedStyle(message).width) + 30 + 'px';
//document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.class);
console.log(logo.className);
console.log(logo.getAttribute('class'));
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

/*
const test = document.querySelector('.features__header');
console.log(
  'get the distance between the element to the current view port',
  test.getBoundingClientRect()
);
console.log(
  'get the current coordinates of the view port',
  window.pageXOffset,
  window.pageYOffset
);
console.log(
  'get current browser size',
  document.documentElement.clientHeight,
  document.documentElement.clientWidth
);
*/
const scrollBtn = document.querySelector('.btn--scroll-to');
scrollBtn.addEventListener('click', function (e) {
  const target = document.querySelector('.section__description');
  const viewportX = window.pageXOffset;
  const viewportY = window.pageYOffset;
  const rel = target.getBoundingClientRect();
  //console.log(rel.top, rel.left);//method 1: scroll by
  //window.scrollBy({ top: rel.top, left: 0, behavior: 'smooth' });// method 2: scroll to

  //window.scrollTo({
  //  top: viewportY + rel.top,
  //  left: rel.left,
  //  behavior: 'smooth',
  //});
  target.scrollIntoView({ behavior: 'smooth' }); //method 3
});

//add and remove eventlistener
const h1 = document.querySelector('h1');
const func1 = function () {
  alert('just trying the mouseenter event handler!');
  h1.removeEventListener('mouseenter', func1);
};
h1.addEventListener('mouseenter', func1);
