import fetchDrinks from '../components/fetchDrinks.js';
import setDrinksContainer from '../components/setDrinksContainer.js';
import setDrinkIdToLocalStorage from '../components/setDrinkIdToLocalStorage.js';
const home = async (url) => {
	// fetch drinks
	const data = await fetchDrinks(url);
	// console.log('home.js: ', data);

	// display drinks
	// const drinksContainer = await setDrinksContainer(data)
	const drinksContainer = setDrinksContainer(data);
	if (drinksContainer) {
		setDrinkIdToLocalStorage(drinksContainer);
	}
	// console.log(sectionContainer);
};

export default home;

/*
=========
	video - 367. Cocktails - set drink

	const drinksContainer = await setDrinksContainer(data)
	if you are dynamically adding <div class="section-center"></div>

	const drinksContainer = setDrinksContainer(data)
	if there is already <div class="section-center"></div> in your html.

========= 
*/
