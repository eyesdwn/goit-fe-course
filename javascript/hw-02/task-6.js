'use strict';

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Enter a number');

    numbers.push(+input);
    console.log(numbers);
}   while (input !== null);

 for(const number of numbers) {
    if(input === null) {
        total += number;
    }
  console.log(`total is ${total}`)
 };