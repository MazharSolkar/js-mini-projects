import { products } from './products.js';

const searchBtns = document.querySelector('#search-btns');
console.log(searchBtns);

const setSearchBtns = () => {
	const btns = ['all', ...new Set(products.map((product) => product.company))];
	console.log(btns);

	searchBtns.innerHTML = btns
		.map(
			(btn) => `
  <button class="btn block text-gray-500 hover:text-gray-900 mb-2" data-id="${btn}">
    ${btn}
  </button>`
		)
		.join('');
};

setSearchBtns();

let filteredProducts = [...products];
// console.log(filteredProducts);

const productsContainer = document.querySelector('#products-container');

const setProductsContainer = () => {
	// when none of the products title matches the search string.
	if (filteredProducts.length < 1) {
		productsContainer.innerHTML = `<h1 class="text-3xl font-bold text-red-500">Sorry, no products matched your search 😞</h1>`;
		return;
	}
	//
	productsContainer.innerHTML = filteredProducts
		.map(
			(product) =>
				`
    <article class="w-[500px] lg:w-full rounded-lg shadow-lg text-center">
      <img
          class="h-[250px] w-full object-cover rounded-lg"
          src="${product.image}"
          alt="${product.title}" />
      <h1 id="title" class="py-2 text-gray-500">${product.title}</h1>
      <p class="text-gray-700 font-semibold">₹ ${product.price}</p>
  </article>`
		)
		.join('');
};

setProductsContainer();

//* FILTER BASED ON SEARCH TERM
const searchInput = document.querySelector('#search');

searchInput.addEventListener('keyup', (e) => {
	const inputValue = e.target.value.toLowerCase();
	if (inputValue === '') {
		filteredProducts = [...products];
	} else {
		filteredProducts = products.filter((product) =>
			product.title.toLowerCase().includes(inputValue)
		);
	}
	setProductsContainer();
});

//* FILTER BASED ON COMPANY NAME
searchBtns.addEventListener('click', (e) => {
	const clickedBtn = e.target;

	if (clickedBtn.tagName !== 'BUTTON') return;

	console.log(clickedBtn.textContent);

	if (clickedBtn.dataset.id === 'all') {
		filteredProducts = [...products];
	} else {
		filteredProducts = products.filter(
			(product) => product.company === clickedBtn.dataset.id
		);
		console.log(filteredProducts);
	}
	searchInput.value = '';
	setProductsContainer();
});
