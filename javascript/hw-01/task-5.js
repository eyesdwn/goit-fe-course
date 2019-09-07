'use strict';

let countryEntered = prompt('Укажите страну доставки.');
const country = countryEntered.toLowerCase();


switch (country) {
    case 'китай':
    alert(`Доставка в ${country} будет стоить 100 кредитов`);
    break;

    case 'чили':
    alert(`Доставка в ${country} будет стоить 250 кредитов`);
    break;

    case 'австралия':
    alert(`Доставка в ${country} будет стоить 170 кредитов`);
    break;

    case 'индия':
    alert(`Доставка в ${country} будет стоить 80 кредитов`);
    break;

    case 'ямайка':
    alert(`Доставка в ${country} будет стоить 120 кредитов`);
    break;

    default:
    alert('В вашей стране доставка недоступна');
}







































// let country = prompt('Укажите вашу страну доставки.');
// // const country = countryEntered.toLowerCase();
// country.toLowerCase();
// let message;



// switch (country) {
//     case 'китай':
//     message = `Доставка в Китай будет стоить 100 кредитов`;
//     break;
//     case 'чили':
//     message = `Доставка в Чили будет стоить 250 кредитов`;
//     break;
//     case 'австралия':
//     message = `Доставка в Австралию будет стоить 170 кредитов`;
//     break;
//     case 'индия':
//     message = `Доставка в Индию будет стоить 80 кредитов`;
//     break;
//     case 'ямайка':
//     message = `Доставка на Ямайку будет стоить 120 кредитов`;
//     break;
//     default:
//     message = 'В вашей стране доставка недоступна';
// }

// alert(message);