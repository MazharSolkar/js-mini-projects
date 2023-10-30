export const allProductsUrl =
	'https://course-api.com/javascript-store-products';
export const singleProductUrl =
	'https://course-api.com/javascript-store-single-product?id=';

export const getElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw new Error(`check ${selector} , failed to select element`);
};
