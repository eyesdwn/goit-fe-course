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
const tempList = document.createDocumentFragment();

ingredients.forEach(e => {
  const li = document.createElement('li');
  li.innerText = e;
  tempList.appendChild(li);
});

listElement.append(tempList);