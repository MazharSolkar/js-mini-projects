import home from './pages/home.js';
import './components/searchForm.js';
// directly imported searchForm module, that's why it will directly be executed in this file without invokation.

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

window.addEventListener('DOMContentLoaded', () => {
	home(url);
});
