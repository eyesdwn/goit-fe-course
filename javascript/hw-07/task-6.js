'use strict';

const input = document.querySelector('#validation-input');

input.addEventListener('blur', (e) => {
   if(input.value.length === +input.dataset.length) {
      input.classList.add('valid');
      input.classList.remove('invalid')
   } else {
     input.classList.add('invalid');
     input.classList.remove('valid');
   }
});
