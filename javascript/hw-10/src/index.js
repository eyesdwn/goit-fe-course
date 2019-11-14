import { Theme } from './helpers/theme';
import cards from './menu.json';
import cardTemplate from './templates/card.hbs';

import './styles.css';

const refs = {
  menu: document.querySelector('.js-menu'),
};

buildMenuCards(cards);

function buildMenuCards(cards) {
  const markup = cards.map(card => cardTemplate(card)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}

const checkBox = document.querySelector('.js-switch-input');
checkBox.setAttribute('type', 'checkbox');

checkBox.addEventListener('change', changeTheme);

const themeMode = localStorage.getItem('theme');
document.body.classList.add(themeMode);
themeMode === Theme.DARK && (checkBox.checked = true);

function changeTheme(e) {
  if (e.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    document.body.classList.add(Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    document.body.classList.add(Theme.LIGHT);
  }
}
