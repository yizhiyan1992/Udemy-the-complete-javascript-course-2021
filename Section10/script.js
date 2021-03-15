'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const display = function (acc) {
  containerMovements.innerHTML = '';
  acc.movements.forEach(function (mov, i) {
    const depositOrWithdraw = mov < 0 ? 'withdrawal' : 'deposit';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${depositOrWithdraw}">
            ${i} ${depositOrWithdraw}
          </div>
          <div class="movements__date">${''}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const creatAccounts = function (accArr) {
  const generateId = function (userName) {
    const nameArr = userName.toLowerCase().split(' ');
    const initials = nameArr.map(ele => ele[0]).join('');
    return initials;
  };
  accArr.forEach(function (ele) {
    ele.username = generateId(ele.owner);
  });
};
creatAccounts(accounts);

const calcPrintBalance = function (acc) {
  const balance = acc.movements.reduce((accu, ele) => accu + ele, 0);
  //const balance = movements.reduce((accu, ele) => (accu > ele ? accu : ele), -1000000); //return the max value
  labelBalance.textContent = `${balance} EUR`;
  acc.balance = balance;
};

const calcIncome = function (acc) {
  const totalIncome = acc.movements.reduce(
    (accu, ele) => (ele >= 0 ? accu + ele : accu),
    0
  );
  labelSumIn.textContent = totalIncome;
};

const calcOutput = function (acc) {
  const totalIncome = acc.movements.reduce(
    (accu, ele) => (ele <= 0 ? accu + ele : accu),
    0
  );
  labelSumOut.textContent = Math.abs(totalIncome);
};

const calcInterest = function (acc) {
  const rate = acc.rate;
  const interest = acc.movements
    .map(ele => ele * rate)
    .filter(ele => ele >= 1)
    .reduce((accu, ele) => accu + ele, 0);
  labelSumInterest.textContent = interest;
};

const updateUI = function (acc) {
  // display movements
  display(acc);
  calcPrintBalance(acc);
  // display balance
  calcIncome(acc);
  calcOutput(acc);
  calcInterest(acc);
  // display summary
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    ele => ele.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  //need to take care about the input user is undefined (not found)
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('Log In');
    // clear the input
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    // display UI and message
    labelWelcome.textContent = `Welcome back! ${currentAccount.owner}`;
    containerApp.style.opacity = '100%';
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    ele => ele.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  // always need to check the validity of the data

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiveAcc &&
    receiveAcc.username !== currentAccount.username
  ) {
    console.log('transfer valid');
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const user = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  inputCloseUsername.value = inputClosePin.value = '';
  console.log(user === currentAccount.username, pin === currentAccount.pin);
  if (user === currentAccount.username && pin === currentAccount.pin) {
    const delIndex = accounts.findIndex(
      ele => ele.username === currentAccount.username
    );
    console.log(delIndex);
    accounts.splice(delIndex, 1);
    console.log(accounts);
    containerApp.style.opacity = 0;
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2, 4));
console.log(arr);
console.log(arr.splice(2));
console.log(arr);
let arr2 = ['a', 'b', 'c'];
arr2.reverse();
console.log(arr2);
let arrConcat = arr.concat(arr2);
console.log(arr);

const map = new Map([
  ['key1', 1],
  ['key2', 2],
  ['key3', 3],
]);
map.forEach(function (val, key, map) {
  console.log(key, val);
});

// Coding Challenge #1


Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function (arr1, arr2) {
  const arr1Copy = arr1.slice(1, -1);
  const allDogs = arr1.concat(arr2);
  allDogs.forEach(function (val, idx) {
    if (val < 3) {
      console.log(`Dog number ${idx} is an adult, and is ${val} years old`);
    } else {
      console.log(`Dog number ${idx} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const eurToUSD = 1.1;
// we can also use arrow function

//const movTrans = account1.movements.map(function (ele) {
//  return ele * eurToUSD;
//});
const movTrans = account1.movements.map(ele => ele * eurToUSD);
console.log(movTrans);

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(test.filter(ele => ele > 5));
console.log(test);
*/

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = function (arr) {
  const adultAge = arr
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(ele => ele > 18);
  return adultAge;
};
const newAge = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(newAge.reduce((accu, ele) => accu + ele, 0) / newAge.length);
*/

const nestedArr = [6, 5, [4, 3, [2, 1]], 1, [2, 2]];
console.log(nestedArr.flat(2));
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements.flat().reduce((accu, ele) => accu + ele, 0));
