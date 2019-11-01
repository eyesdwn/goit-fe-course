'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// input.addEventListener('input', (e) => {
//   if(input.value !== '') {
//     output.textContent = input.value;
//   } else output.textContent = 'незнакомец';
// });

input.addEventListener('input', () => {
  output.textContent = input.value || 'незнакомец';
  });
