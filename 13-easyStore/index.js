import './src/toggleNavAndSidebar.js';

import customFetch from './src/customFetch.js';
import { allProductsUrl, getElement } from './src/utils.js';
import {
	addAllProductsToLocalStorage,
	allProducts,
} from './src/addAllProductsToLocalStorage.js';
import setProductsContainer from './src/setProductsContainer.js';

const initialLoad = async () => {
	const products = await customFetch(allProductsUrl);

	if (!products) return;
	// if products are fetched successfully then only I will execute code below the line.

	addAllProductsToLocalStorage(products);
	const loading = getElement('.loading');
	loading.classList.add('hidden');

	const featuredProducts = allProducts.filter(
		(product) => product.featured === true
	);
	// console.log(featuredProducts);

	const featuredProductsContainer = getElement('.featured-products-container');
	setProductsContainer(featuredProductsContainer, featuredProducts);
};
window.addEventListener('DOMContentLoaded', initialLoad);
