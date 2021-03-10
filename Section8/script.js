'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      output = 'New outPut!';
      // this function is defined in the block. it is a block-scoped function (only true in stric mode)
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

console.log(me);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(1, 2));
//console.log(addExpr(1, 2));
//console.log(addArrow(1, 2));
function addDecl(a, b) {
  return a + b;
}

//both of them are not correct, but with different reasons
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(4, 5);
var addArrow = (x, y) => x + y;

// the error caused by hoisting! the numProducts here is undefined.
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

// the window object
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // this is undefined (simply call the function)
  console.log(this);
};
calcAge();

const calcAgeArrow = birthYear => {
  2037 - birthYear;
  // this is window (arrow function)
  console.log(this);
};
calcAgeArrow();

const jonas = {
  age: 34,
  birthYear: 1992,
  calcAge: function (x) {
    // this points to jonas object
    return 2037 - this.birthYear;
  },
};
console.log(jonas.calcAge());
const matina = {
  birthYear: 2003,
};
matina.calcAge = jonas.calcAge; // method borrowing
console.log(matina.calcAge());

const funct = matina.calcAge;
// now we get the error, because this is the undefined now.
//funct();
*/
const arr = [1, 2, 3];
let [x, y, z] = arr;
console.log(x, y, z);
// switch the value
[x, y] = [y, x];
console.log(x, y, z);

const restaurant = {
  name: 'chipollet',
  hours: '9:00am-10:00pm',
  tags: ['spicy', 'mexico', 'burritos'],
};

//destruct the obejct
const { name, tags } = restaurant;
console.log(name, tags);
// asign the property with new names
const { name: restName, tags: brand } = restaurant;
console.log(restName, brand);
//set default value
const { name: restName2 = 'noName', tags: brand2 = [] } = restaurant;

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 45 };
({ a, b } = obj); //new to add parenthesis, otherwise JS will treat it as block code

//spread operator
const newArr = [1, 2, 3, 4, 5, 6, 6, 6];
console.log(...newArr);
const arr1 = [1, 2, 3, 4, 5, 6, 6, 6];
const arr2 = [1, 2, 3, 4, 5, 6, 6, 6];
// shallow copy
const arrCopy = [...arr1];
//concatenate two arrays
const arr3 = [...arr1, ...arr2];
console.log(arr3.length);
const s = 'iterableTest';
console.log([...s]);

function orderNow(time, price, items) {
  console.log(time);
  console.log(price);
  console.log(items);
}

const order = ['12:00', 46, ['fries', 'burger']];
orderNow(...order);
console.log({ ...restaurant });

function makePizza(mainIngredient, ...sides) {
  console.log(mainIngredient);
  console.log(sides);
}

makePizza('salami', 'onion', 'green pepper', 'olive');

//coding challenge
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//challenge 2: Odd of victory Bayern Munich: 1.33
const scored = game.scored;
for (const item of scored.entries()) {
  console.log(`goal ${item[0]}: ${item[1]}`);
}
const odds = game.odds;
let avg = 0;
let count = 0;
for (const item of Object.values(odds)) {
  avg += item;
  count += 1;
}
console.log(avg / count);
for (const item of Object.keys(odds)) {
  const keyName = game[item];
  console.log(`odd of ${keyName ?? 'draw'} : ${odds[item]}`);
}

const [player1, player2] = game.players;
const [gk1, ...fieldPlayers1] = player1;
const [gk2, ...fieldPlayers2] = player2;
const allPlayers = [...fieldPlayers1, ...fieldPlayers2];
const playerFinal = [...player1, 'Thiago', 'inho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;

function printGoals(...m) {
  for (let i = 0; i < m.length; i++) {
    console.log(m[i]);
  }
}
printGoals('alice', 'mary', 'xiaoming');
team1 < team2 && console.log('team1 win');
team1 > team2 && console.log('team2 win');

for (const player of player1) {
  console.log(player);
}
for (const [i, j] of player1.entries()) {
  console.log(i, j);
}

const openHour = '12:00-16:00';
const bar = {
  name: 'Vivian',
  address: 'xxxxxx',
  openHour,
  checkout(...m) {
    let sum = 0;
    for (let i = 0; i < m.length; i++) {
      sum += m[i];
    }
    return sum;
  },
};
console.log(bar);
console.log(bar.checkout(12, 23, 43));

console.log(bar['name']);
console.log(bar?.name?.firstName);
console.log(bar?.checkout(12, 14));
console.log(5 && 7);
console.log(0 || 7);
console.log(0 ?? 7);

bar?.name?.firstName ?? console.log('the method does not exist.');

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const obj3 = Object.assign(obj1, obj2);
console.log(obj1, obj2, obj3);

const set = new Set();
set.add('a');
set.add('b');
set.add('c');
console.log(set.size);
console.log(set.has('b'));
set.delete('c');
set.delete('d');

const map = new Map();
map.set('a', 'allong');
map.set('b', 'banana');
console.log(map);
console.log(map.get('a'));
map.delete('a');
console.log(map.size);
const map2 = new Map(Object.entries(game));
console.log(map2);
console.log([...map2]); //spread the map into array
console.log([...map2.keys()]);
console.log([...map2.values()]);
console.log(map2.size);
for (const [key, val] of map2) {
  console.log(key, val);
}
let aa;
console.log(aa);

// coding challenge #3
/*
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const values = [...new Set(gameEvents.values())];
console.log(values);
gameEvents.delete(64);
for (const [key, val] of gameEvents) {
  let event = key < 45 ? 'First HALF' : 'SECOND HALF';
  console.log(`[${event}] ${key}: ${val}`);
}

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(airline.indexOf('r'));
console.log(airline.slice(2));

const checkMiddleSeat = function (seat) {
  const c = seat.slice(-1);
  if (c === 'B' || c === 'E') {
    return true;
  }
  return false;
};
console.log(checkMiddleSeat('11B'));
console.log('aloha '.repeat(4));
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const convertCamelCase = function (str) {
  const strTrimmed = str.trim();
  const strTrimmedList = strTrimmed.split('_');
  for (let i = 0; i < strTrimmedList.length; i++) {
    strTrimmedList[i] = strTrimmedList[i].toLowerCase();
    if (i != 0) {
      strTrimmedList[i] = strTrimmedList[i].replace(
        strTrimmedList[i][0],
        strTrimmedList[i][0].toUpperCase()
      );
    }
  }
  return strTrimmedList.join('');
};
console.log(convertCamelCase('underscore_case'));
console.log(convertCamelCase(' first_name'));
console.log(convertCamelCase('Some_Variable '));
console.log(convertCamelCase('  calculate_AGE'));
console.log(convertCamelCase('delayed_departure'));

/*
///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

*/
///////////////////////////////////////
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsArr = flights.split('+');
console.log(flightsArr);
const parseInfo = function (str) {
  const strs = str.split(';');
  let res = '';
  res += strs[0].split('_').join(' ');
  res = res + 'from' + ' ' + strs[1].slice(0, 3).toUpperCase() + ' ';
  res = res + 'to' + ' ' + strs[2].slice(0, 3).toUpperCase() + ' ';
  res = res + '(' + strs[3].replace(':', 'h') + ')';
  return res.trim();
};
for (const flight of flightsArr) {
  console.log(parseInfo(flight));
}
