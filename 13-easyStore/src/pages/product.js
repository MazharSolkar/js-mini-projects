import '../toggleNavAndSidebar.js';
import { getElement } from '../utils.js';
import { allProducts } from '../addAllProductsToLocalStorage.js';
import customtomFetch from '../customFetch.js';
import setProductDetails from '../setProductDetails.js';

import { singleProductUrl } from '../utils.js';

const onInitialLoad = async () => {
	const productContainer = getElement('.product-container');

	const searchParams = new URLSearchParams(window.location.search);
	const id = searchParams.get('id');

	const productDetails = await customtomFetch(`${singleProductUrl}${id}`);

	if (!productDetails) return;
	setProductDetails(productContainer, productDetails);

	const loading = getElement('.loading');
	loading.classList.add('hidden');
};

onInitialLoad();
