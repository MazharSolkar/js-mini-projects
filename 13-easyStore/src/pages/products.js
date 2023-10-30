import '../toggleNavAndSidebar.js';
import { getElement } from '../utils.js';
import { allProducts } from '../addAllProductsToLocalStorage.js';
import setProductsContainer from '../setProductsContainer.js';

const productsContainer = getElement('.products-container');
const companiesContainer = getElement('.companies-container');
const notFoundContainer = getElement('.not-found-container');
const searchInput = getElement('.search-input');

const companiesBtns = [
	'all',
	...new Set(allProducts.map((product) => product.company)),
];

companiesContainer.innerHTML = companiesBtns
	.map(
		(company) => `
<button
  data-id="${company}"
  class="block hover:bg-orange-400 hover:text-white px-4 rounded-lg py-[1px] mb-2 text-gray-700 text-xl ml-2">
  ${company}
</button>
`
	)
	.join('');

setProductsContainer(productsContainer, allProducts);

const loading = getElement('.loading');
loading.classList.add('hidden');

companiesContainer.addEventListener('click', (e) => {
	if (e.target.tagName !== 'BUTTON') return;

	let clickedCompany = e.target.dataset.id;
	if (clickedCompany.toLowerCase() === 'all') {
		setProductsContainer(productsContainer, allProducts);
	} else {
		const filteredProducts = allProducts.filter(
			(product) =>
				product.company.toLowerCase() === clickedCompany.toLowerCase()
		);
		setProductsContainer(productsContainer, filteredProducts);
	}
	searchInput.value = '';
});

// ============Debounced Search ====================

const debounce = (func, delay) => {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
};

const handleSearchInput = (searchValue) => {
	const searchedProducts = allProducts.filter((product) =>
		product.name.toLowerCase().includes(searchValue)
	);
	if (searchedProducts.length === 0) {
		productsContainer.innerHTML = `<div class="text-4xl text-red-400 md:col-span-2 lg:col-span-3">No Products Found</div>`;
		return;
	}
	console.log(searchValue);
	setProductsContainer(productsContainer, searchedProducts);
};

const debouncedHandleSearchInput = debounce(handleSearchInput, 300);

// input is similar to onChange event of react
searchInput.addEventListener('input', (e) => {
	debouncedHandleSearchInput(e.target.value.toLowerCase());
});
