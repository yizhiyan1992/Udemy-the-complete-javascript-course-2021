'use strict';

const layer = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.close-modal');
const modalButtons = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  layer.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  layer.classList.add('hidden');
};
// add event handler for each modal
for (let i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener('click', openModal);
}
modalCloseBtn.addEventListener('click', closeModal);
layer.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
