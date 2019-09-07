'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let numberOfDroids = prompt('Сколько дроидов вы хотите купить?');
let totalPrice = numberOfDroids * pricePerDroid;
let message;
let creditsLeft = credits - totalPrice;

if (numberOfDroids == null) {
    message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} else  {
    message = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${creditsLeft} кредитов.`;
}

alert(message);