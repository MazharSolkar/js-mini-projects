import { getElement } from './utils.js';
const burger = getElement('#burger');
const links = getElement('#links');

burger.addEventListener('click', () => {
	links.classList.toggle('hidden');
});

const cartIcon = getElement('.cart-icon');
const cartSection = getElement('.cart-section');
const closeCartIcon = getElement('.close-cart-icon');

cartIcon.addEventListener('click', () => {
	cartSection.classList.toggle('hidden');
});

closeCartIcon.addEventListener('click', () => {
	cartSection.classList.add('hidden');
});
