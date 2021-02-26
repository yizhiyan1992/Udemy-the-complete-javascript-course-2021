'use strict';

const player0Background = document.querySelector('.player--0');
const player1Background = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dicePic = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current1El = document.querySelector('#current--0');
//start condition
let currentScore, activePlayer, playing, scores;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  dicePic.classList.add('hidden');
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  player0Background.classList.add('player--active');
  player1Background.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  //swithc the player
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Background.classList.toggle('player--active');
  player1Background.classList.toggle('player--active');
};
//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (!playing) return;
  // generate a random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display dice
  dicePic.classList.remove('hidden');
  console.log(dice);
  dicePic.src = `dice-${dice}.png`;
  // check for the dice number
  if (dice !== 1) {
    // accumylate the score to the current player
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  if (!playing) return;
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // check if the score is higher than 100
  if (scores[activePlayer] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    playing = false;
    dicePic.classList.add('hidden');
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
