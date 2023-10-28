export const allProductsUrl =
	'https://course-api.netlify.app/api/javascript-store-products';
export const singleProductUrl =
	'https://course-api.netlify.app/api/javascript-store-single-product?id=rec43w3ipXvP28vog';

export const getElement = (selector) => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw new Error(`check ${selector} , failed to select element`);
};
