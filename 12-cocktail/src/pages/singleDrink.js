import fetchDrinks from '../components/fetchDrinks.js';
import setDrinkDetailContainer from '../components/setDrinkDetailsContainer.js';

const detailsURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleDrink = async () => {
	const id = localStorage.getItem('drink');
	if (!id) {
		window.location.replace('index.html');
		// return;
	}
	const drink = await fetchDrinks(`${detailsURL}${id}`);
	setDrinkDetailContainer(drink);
};

window.addEventListener('DOMContentLoaded', singleDrink);
