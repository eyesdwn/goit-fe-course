"use strict";


const formatString = function(string) {
    const shortString = string.slice(0, 41);

    if(string.length <= 40) {
        return console.log(string);
    } else {
        return console.log(`${shortString}...`);
    }
};

formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
// // вернется форматированная строка
formatString('Curabitur ligula sapien, tincidunt non.')
// // вернется оригинальная строка

