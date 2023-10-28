import './src/toggleNavAndSidebar.js';

import customFetch from './src/customFetch.js';
import { allProductsUrl, getElement } from './src/utils.js';
import {
	addAllProductsToLocalStorage,
	allProducts,
} from './src/addAllProductsToLocalStorage.js';

const initialLoad = async () => {
	const products = await customFetch(allProductsUrl);

	if (!products) return;
	// if products are fetched successfully then only I will execute code below the line.

	addAllProductsToLocalStorage(products);

	const featuredProducts = allProducts.filter(
		(product) => product.featured === true
	);
	// console.log(featuredProducts);

	const featuredProductsContainer = getElement('.featured-products-container');
	featuredProductsContainer.innerHTML = featuredProducts.map((product) => {
		const { id, name, image, price } = product;
		return `

	  <article class="single-product rounded-lg shadow-lg border-4 border-black w-[350px] m-4">
        <img
        class="object-cover h-[200px] w-full"
        src="${image}"
        alt="" />
	    <h1 class="product-title text-gray-500 my-4">${name}</h1>
	    <p class="product-price text-gray-700 font-bold">₹ ${price * 10}</p>
	  </article>
	  `;
	});
};

window.addEventListener('DOMContentLoaded', initialLoad);
