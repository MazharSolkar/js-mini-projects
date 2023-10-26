const getElement = (selector) => {
	const element = document.querySelector(selector);
	return element;
	throw new Error(`no element ${selector} is selected`);
};

export default getElement;
