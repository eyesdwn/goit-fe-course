"use strict";

const checkForSpam = function(string) {
    const stringToCheck = string.toLowerCase();
    return stringToCheck.includes('spam') || stringToCheck.includes('sale');
};



console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true