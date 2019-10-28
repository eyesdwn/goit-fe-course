'use strict';

const counterWrapper = document.querySelector('#counter');
const valueElement = document.querySelector('#value');
valueElement.textContent = 0;

counterWrapper.addEventListener('click', (e) => {
  const action = e.target.getAttribute('data-action');
  console.log(action);

  if(action === "increment") {
    valueElement.textContent = +valueElement.textContent + 1;
  } else if(action === "decrement") {
    valueElement.textContent = +valueElement.textContent - 1;
  }; 
});