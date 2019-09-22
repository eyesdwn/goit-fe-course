'use strict';

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');

    numbers.push(+input);
    console.log(numbers);
}   while (input !== null);

if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
    }
    }
    const message = `Общая сумма чисел равна ${total}`;
    alert(message);