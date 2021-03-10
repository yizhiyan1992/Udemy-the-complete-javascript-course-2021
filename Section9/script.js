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
