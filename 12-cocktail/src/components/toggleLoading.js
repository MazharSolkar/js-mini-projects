import getElement from './getElement.js';

const loading = getElement('.loading');

export const showLoading = () => {
	loading.classList.remove('hidden');
};
export const hideLoading = () => {
	loading.classList.add('hidden');
};
