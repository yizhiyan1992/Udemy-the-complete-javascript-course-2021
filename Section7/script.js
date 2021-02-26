'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// refactoring the code
const setMessage = function (contain) {
  document.querySelector('.message').textContent = contain;
};

const ele = document.querySelector('.btn.check');

ele.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // this step is to prevent the case that click the button without entering a number first

  if (score > 1) {
    if (guess === 0) {
      //document.querySelector('.message').textContent = 'must enter a number';
      setMessage('must enter a number');
      // when the player wins
    } else if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      setMessage('correct number!');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = score;
    } else {
      setMessage(guess > secretNumber ? 'too high!' : 'too low');
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You lose the game!';
    document.querySelector('.score').textContent = 0;
  }
});

//set again button
const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function () {
  document.querySelector('.message').textContent = 'start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
