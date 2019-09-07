'use strict';

let input;
let total = 0;

while (true) {
    input = prompt('Введите целое число.');

    if (input === null) {
        break;
    }

    input = Number(input);

    if (input <= 0) {
        break;
    }

    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        break;
    }

    total += input;
}

alert(`Общая сумма чисел равна ${total}`);

