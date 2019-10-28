'use strict';

const inputFontSizeControl = document.querySelector('#font-size-control');
const textToChange = document.querySelector('#text');

inputFontSizeControl.addEventListener('input', (e) => {
textToChange.setAttribute('style', `font-size:${inputFontSizeControl.value}px`);
 });