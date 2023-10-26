import getElement from './getElement.js';
import home from '../pages/home.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = getElement('.search-form');
const input = getElement('[name="drink"]');
const section = getElement('.section-center');

input.addEventListener('keyup', (e) => {
	e.preventDefault();
	section.innerHTML = null;
	const value = input.value;
	if (value === '') {
		home(baseURL);
		return;
	}
	home(`${baseURL}${value}`);
});
