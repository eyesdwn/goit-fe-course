'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы'
];

const listElement = document.querySelector('#ingredients');

const tempList = document.createElement('div');

ingredients.forEach(e => {
  const li = document.createElement('li');
  li.innerText = e;
  tempList.appendChild(li);
});

listElement.insertAdjacentHTML('beforeend', tempList.innerHTML);