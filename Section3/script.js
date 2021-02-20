'use strict';

/*
let hasLicense = false;
const passTest = true;

if (passTest) hasLicense = true;
if (hasLicense) console.log("i can drive.");

function logger() {
    console.log("my name is Jonas.");
}
// calling, invoking
logger();

function fruitProcessor(apples, oranges) {
    const juice = `${apples} apples mixed with ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(10, 2);
console.log(appleJuice);
console.log(Number(false));
console.log(Number(true));

const getAge = function (birthYear) {

    return 2021 - birthYear;
}
console.log(getAge(1992));
//arrow function
const arrowF = (x, y) => x + y;
console.log(arrowF(10, 20));

//coding challenge

const calcAverage = (x, y, z) => (x + y + z) / 3;
const avgD = calcAverage(44, 23, 71);
const avgK = calcAverage(65, 54, 49);
const checkWinner = function (avgD, avgK) {
    const winner = avgD > avgK ? "Dolphine" : "Koala";
    console.log(`${winner} win (${avgD} vs. ${avgK})`);
    return winner;
}
console.log(checkWinner(avgD, avgK));


const arr = new Array("alice", "fufu", "bobo");
arr.push('5');
arr.pop();
arr.pop();
console.log(typeof arr, arr.length);
console.log(arr.includes("alice"), arr.includes("fu"));
console.log(arr.indexOf("bobo"), arr.indexOf("fufu"));
arr.shift();
arr.unshift("jiujiu");
console.log(arr);

const calcTip = function (bill) {
    return (bill <= 300 && bill >= 50) ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const total = [];
for (let i = 0; i < bills.length; i++) {
    total.push(calcTip(bills[i]) + bills[i]);
}
console.log(total);



const obj1 = {
    name: "zy",
    age: 17,
    job: "teacher"
};
obj1.getSummary = function () {
    console.log(`${this.name}'s age is ${this.age}, and his/her job is ${this.job}`);
}

console.log(obj1);
const obj2 = {};
obj2.name = "lp";
obj2.age = 25;
console.log(obj2);
console.log(obj2.age, obj2['age'], obj2.gender);
console.log(obj1);
obj1.getSummary();
*/

//coding challenge
const mark = {
    name: "Mark Miller",
    mass: 78,
    height: 1.69
}
const john = {
    name: "John Smith",
    mass: 92,
    height: 1.95
}

const calcBMI = function (obj) {
    const BMI = obj.mass / obj.height ** 2;
    obj.BMI = BMI;
    return BMI;
}
calcBMI(mark);
calcBMI(john);
if (mark.BMI > john.BMI)
    console.log(`${mark.name}'s BMI (${mark.BMI}) is higher than ${john.name}'s BMI(${john.BMI})`);
else
    console.log(`${john.name}'s BMI (${john.BMI}) is higher than ${mark.name}'s BMI(${mark.BMI})`);


//roll the dice example
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(dice);
    dice = Math.trunc(Math.random() * 6) + 1;
}
