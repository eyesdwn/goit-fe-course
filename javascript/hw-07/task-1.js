'use strict';

const categories = document.querySelector('#categories');

const countCategories = [...categories.querySelectorAll('li.item')];
console.log(`В списке ${countCategories.length} категории`);

const getCategoryInfo = (e) => {
  const categoryTitle = e.querySelector('h2');
  const items = e.querySelectorAll('li').length;
  console.log(`Категория: ${categoryTitle.innerText}`);
  console.log(`Количество элементов: ${items}`);
};

countCategories.forEach(e => {
  getCategoryInfo(e)
});