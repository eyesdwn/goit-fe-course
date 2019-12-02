'use strict';

const delay = ms =>
  new Promise(resolve => {
    setTimeout(logger(ms), ms);
  });

const logger = ms => console.log(`Resolved after ${ms}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
