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

message.style.width =
  Number.parseFloat(getComputedStyle(message).width) + 30 + 'px';
//document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');

console.log(logo.getAttribute('class'));
const link = document.querySelector('.twitter-link');

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
/*
const h1 = document.querySelector('h1');
const func1 = function () {
  alert('just trying the mouseenter event handler!');
  h1.removeEventListener('mouseenter', func1);
};
h1.addEventListener('mouseenter', func1);
*/

//bubbling
/*
const navBar = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelector('.nav__link');

const getRand = function () {
  return Math.trunc(Math.random() * 255) + 1;
};
const randomColor = function () {
  return `rgb(${getRand()},${getRand()},${getRand()})`;
};

console.log(randomColor());
navBar.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
navLinks.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  e.stopPropagation();
});
navLink.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
*/

//event delegation
/*
document.querySelectorAll('.nav__link').forEach(function (ele) {
  ele.addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});
*/
const links = document.querySelector('.nav__links');
links.addEventListener('click', function (e) {
  e.preventDefault();
  // this step is important! sometimes we may click other child elements.
  if (e.target.className === 'nav__link') {
    const target = e.target.getAttribute('href');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  }
});

//DOM traversing
/*
const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
//going upward
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.backgroundColor = 'orangered';
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
*/

//Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//use event delegation
tabsContainer.addEventListener('click', function (e) {
  //we use the closest here is because in the button element, there is a span element, and sometimes we could click the span instead of the button element itself.
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return; //guard clause, in case that we clicked other margin region in tabsContainer

  //active tab
  tabs.forEach(function (ele) {
    ele.classList.remove('operations__tab--active');
  });
  tabsContent.forEach(ele =>
    ele.classList.remove('operations__content--active')
  );
  clicked.classList.add('operations__tab--active');
  //active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade-out animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(ele => {
      if (ele !== link) {
        ele.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

// generate the sticky nav bar using scroll event listener.(not recommended!~)
/*
const target = document.querySelector('#section--1');
const distance = target.getBoundingClientRect().top;
window.addEventListener('scroll', function () {
  if (window.pageYOffset >= distance) {
    document.querySelector('.nav').classList.add('sticky');
  }
});
*/
//intersection observer API

//const section = document.querySelector('#section--1');
//const obsCallback = function (entries, observer) {
//  entries.forEach(entry => {
//    console.log(entry);
//  });
//};
//const obsOptions = {
//  root: null,
//  threshold: 0.1,
//};
//const observer = new IntersectionObserver(obsCallback, obsOptions);
//observer.observe(section);

const hearder = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//revealing element on scroll (IntersectionObserver API+CSS)
const sectionFunc = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionIO = new IntersectionObserver(sectionFunc, {
  root: null,
  threshold: 0.15,
});
const sections = document.querySelectorAll('.section');
sections.forEach(function (section) {
  section.classList.add('section--hidden');
  sectionIO.observe(section);
});

//lazy loading
const imgs = document.querySelectorAll('img[data-src]');
console.log(imgs);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target); //when we dont need this observation, cancel it.
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgs.forEach(function (img) {
  imgObserver.observe(img);
});

//slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
//const slider = document.querySelector('.slider');
//slider.style.transform = 'scale(0.5)';
//slider.style.overflow = 'visible';
let curSlide = 0;
const maxSlide = slides.length;
const dotContainer = document.querySelector('.dots');

const createDots = function () {
  slides.forEach((s, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide='${i}'></button>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%`;
  });
};
goToSlide(0);
activateDot(0);
//next slide

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  console.log(new Date());
});
window.addEventListener('load', function () {
  console.log(new Date());
});
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log('?');
  return false;
});
