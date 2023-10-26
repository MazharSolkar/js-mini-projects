import { hideLoading } from './toggleLoading.js';
import getElement from './getElement.js';

const detailsContainer = getElement('.details-container');

const setDrinkDetailContainer = (data) => {
	hideLoading();
	const drink = data.drinks[0];
	const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
	const list = [
		drink.strIngredient1,
		drink.strIngredient2,
		drink.strIngredient3,
		drink.strIngredient4,
		drink.strIngredient5,
	];

	const ingredientList = list
		.map((item) => {
			if (!item) return;
			return `<li>${item}</li>`;
		})
		.join('');

	detailsContainer.innerHTML = `
  <section class="single-drink w-[90vw] max-w-[1100px] grid gap-8 md:grid-cols-2 md:place-items-center md:mt-20">
    <img
      class="drink-img h-[400px] w-full object-cover rounded-lg"
      src="${image}"
      alt=""
      srcset="" />
    <article class="drink-info">
      <h2 class="drink-name text-3xl text-gray-800 font-bold my-2">${name}</h2>
      <p class="drink-desc text-xl text-gray-700 mb-2">${desc}</p>
      <h1 class="text-xl text-gray-800 font-bold mb-2">Ingredients</h1>
      <ul class="drink-ingredients mb-8 text-gray-700 text-xl">${ingredientList}</ul>
      <a
        href="index.html"
        class="bg-purple-500 px-4 py-2 rounded-lg text-white"
        >All cocktails</a
      >
    </article>
  </section>`;
	// console.log(drink, list);
};

export default setDrinkDetailContainer;
