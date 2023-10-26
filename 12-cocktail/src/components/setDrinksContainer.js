import getElement from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const setDrinksContainer = ({ drinks }) => {
	const drinksContainer = getElement('.drinks-container');
	const title = getElement('.title');
	if (!drinks) {
		// hide loading
		hideLoading();
		title.textContent = 'sorry, no drinks matched your search';
		drinksContainer.innerHTML = null;
		return;
	}
	const newDrinks = drinks
		.map((drink) => {
			const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
			return `				
    <!-- SINGLE DRINK -->
    <a href="drink.html" class="block w-full border-4">
      <article data-id="${id}" class="Cocktail relative">
        <img
          class="h-[200px] w-full object-cover"
          src="${image}"
          alt="${name}" />
        <h3
          class="bg-black text-white inline-block px-4 py-2 rounded absolute right-0 bottom-[-10px]">
          ${name}
        </h3>
      </article>
    </a>
    <!-- END SINGLE DRINK -->`;
		})
		.join('');
	// hide loading
	hideLoading();
	title.textContent = '';
	drinksContainer.innerHTML = newDrinks;
	return drinksContainer;
};

export default setDrinksContainer;
