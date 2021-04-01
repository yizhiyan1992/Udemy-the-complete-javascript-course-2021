const box4 = document.createElement('span');
box4.textContent = 'box4';
box4.id = 'b4';
const boxes = document.getElementById('box');

boxes.append(box4);
const box5 = box4.cloneNode(true);
box5.id = 'b5';
box5.textContent = 'box5';
boxes.prepend(box5);
const box6 = box4.cloneNode(true);
box6.textContent = 'box6';
box6.id = 'b6';
boxes.before(box6);
const box3 = document.getElementById('b3');
box3.remove();
document.querySelector('#clock').style.color = 'white';
const showTime = function () {
  const clock = document.querySelector('#counter');
  const time = new Date();
  clock.style.color = 'white';
  clock.textContent = ` ${time.getHours()}:${time.getMinutes()}:${String(
    time.getSeconds()
  ).padStart(2, 0)}`;
};

setInterval(showTime, 1000);

const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('innerMost');

outer.addEventListener('click', function () {
  console.log('this is outer!');
});
middle.addEventListener('click', function () {
  console.log('this is middle!');
});
inner.addEventListener('click', function () {
  console.log('this is inner!');
});
