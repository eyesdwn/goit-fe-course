'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let enteredPassword = prompt('Пожалуйста, введите пароль');

if (enteredPassword == null) {
    message = 'Отменено пользователем';
} else if (enteredPassword == ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещён, неверный пароль!';
}

alert(message);