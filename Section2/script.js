let js = '1amazing';
let js2;
if (js === 'amazing') alert("javascript is FUN!");

console.log(typeof "hahah");
console.log(typeof js2);
const firstName = 'Jonas';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a' + year + birthYear;
console.log(jonas);
const jonasNew = `I am a teacher, my name is ${jonas}`;
console.log(jonasNew);
console.log('String with \n\
multiple \n\
lines.');
console.log(`string with 
multiple
lines.`);

const MarkBMI = 27.3;
const JoeBMI = 26.4;
if (MarkBMI > JoeBMI) {
    console.log(`Mark has higher BMI, which is ${MarkBMI}.`);
} else {
    console.log(`Joe has higher BMI, which is ${JoeBMI},`);
}

console.log(typeof Number("15531"));
console.log(typeof String(122312));

console.log('12' + 1 - 4);
//const cf = confirm("Is that what you want?");
//console.log(typeof cf);
//const prpm = prompt("please enter your name");
//console.log(prpm);

const hasLicense = true;
const hasVision = true;
const isTired = true;
console.log(hasLicense && hasVision);
console.log(hasLicense || hasVision);
console.log(hasLicense || hasVision || isTired);

const cost = 275;
let tip = (cost >= 50 && cost <= 300) ? cost * 0.15 : cost * 0.2;
console.log(`The bill was ${cost}, and the tip was ${tip}. The total is ${cost + tip}`);

