// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';
if (x === 23) console.log(23);

const func1 = x => x + 6;
console.log();
console.log('hellO! automatically');

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: 10,
  };
  console.warn(measurement.value);
  //B _) find the error
  console.table(measurement);
  //c ) fix the error
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) identify the bug
console.log(measureKelvin());

for (let i = 0; i < 5; i++) {
  //debugger;
  console.log('This is just testing the debugger tool' + ` (iteration ${i})`);
}

*/
//coding challenge
const pringForecast = function (arr) {
  let res = '...';
  for (let i = 0; i < arr.length; i++) {
    let tempS = `${arr[i]}C in ${i + 1} days...`;
    res += tempS;
  }
  return res;
};

let res = pringForecast([17, 21, 23]);
console.log(res);
