'use strict';

const func1 = function (price = 99, number = 1, discount = 1) {
  return price * number * discount;
};

console.log(func1(undefined, 2, 0.8));

const flight = 'LH234';
const jonas = {
  name: 'JS',
  passport: 23453,
};

const checkIn = function (flight, passenger) {
  flight = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport) {
    //alert('checked in');
  } else {
    //alert('wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// callback function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(str);
  console.log(fn(str));
  console.log(fn.name);
};

transformer('JS is the best!', oneWord);
transformer('JS is the best!', upperFirstWord);

const greet = greeting => name => console.log(`${greeting} ${name}`);
const g = greet('hello');
console.log(typeof g);

const luf = {
  airline: 'luf',
  iata: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iata}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iata}`, name });
  },
};

luf.book(239, 'Jonas');
luf.book(635, 'JJJ');
console.log(luf);
const euroings = {
  name: 'Euro',
  iata: 'EW',
  bookings: [],
  book: luf.book,
};
euroings.book(444, 'JJJK');
euroings.book(555, 'JJJb');
console.log(euroings);

const book = luf.book;
// calling book will cause error, because here we assgin the luf.book to book. book is a regular function but not a method anymore. SO the this keyword is undefined now.
//book(233, 'kk');
// how to fix this problem?
book.call(euroings, 23, 'William');
// call is a method of a function, its first arguments is the obj that we want this keyword to refer, and the remaining arguments are the arguments in original function.
book.apply(euroings, [3453, 'Wang']);

const plan = {
  model: 'ak47',
  getModel() {
    console.log(this.model);
  },
};

// because for the event handler, this keyword refers the element that calls the events
document.querySelector('.buy').addEventListener('click', plan.getModel);
// how to solve this? use bind method
document
  .querySelector('.buy')
  .addEventListener('click', plan.getModel.bind(plan));

const poll = {
  registerNewAnswer() {
    const res = Number(
      prompt(`What is your favorite programming language?
        0: JS
        1: Python
        2: Rust)
        3: C++
        (wtrite option number)`)
    );
    if (typeof res === 'number' && res < this.answer.length) {
      this.answer[res] += 1;
    }
    console.log(this.answer);
  },
  answer: [0, 0, 0, 0],
  displayResults(arg = 's') {
    if (typeof arg === 'string') {
      console.log(`the result is ${this.answer.join(',')}`);
    } else {
      console.log(this.answer);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//iife
(function (a, b) {
  return a + b;
})(3, 4);

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();
booker();
booker();
console.dir(booker);
console.log(booker);

let f;
const gg = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
gg();
f();
h();
f();
console.dir(f);
// example2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are boarding all ${n} passengers`);
  }, 1000);
  console.log('will wait in', wait);
};
boardPassengers();
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
