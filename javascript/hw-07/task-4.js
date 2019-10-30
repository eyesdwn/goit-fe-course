'use strict';

// const counterWrapper = document.querySelector('#counter');
// const valueElement = document.querySelector('#value');
// valueElement.textContent = 0;

// counterWrapper.addEventListener('click', (e) => {
//   const action = e.target.getAttribute('data-action');
//   console.log(action);

//   if(action === "increment") {
//     valueElement.textContent = +valueElement.textContent + 1;
//   } else if(action === "decrement") {
//     valueElement.textContent = +valueElement.textContent - 1;
//   }; 
// });

const counter = document.querySelector('#counter');
const value = document.querySelector('#value');

const actions = {
state: {
value: 0,
},
decrement() {
this.state.value -= 1;
},
increment() {
this.state.value += 1;
},
};

const changeValue = ({ target }) => {
actions[target.dataset.action]();
value.textContent = actions.state.value;
};

counter.addEventListener('click', changeValue);