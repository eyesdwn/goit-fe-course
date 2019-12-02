'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setNewColor(arr) {
  let newColor = randomIntegerFromInterval(0, arr.length);
  document.body.style.backgroundColor = colors[newColor];
}

let colorInterval;
let isActive = false;

function changeBackgroundColor(e) {
  // console.log(e.target);

  if (e.target.dataset.action === 'start' && isActive === false) {
    colorInterval = setInterval(() => setNewColor(colors), 1000);
    isActive = true;
  } else if (e.target.dataset.action === 'stop') {
    clearInterval(colorInterval);
    isActive = false;
  }
}

document.body.addEventListener('click', changeBackgroundColor);
