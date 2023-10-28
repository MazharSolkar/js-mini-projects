let allProducts = JSON.parse(localStorage.getItem('allProducts'));

const addAllProductsToLocalStorage = (products) => {
	allProducts = products.map((product) => {
		const {
			id,
			fields: { featured, name, price, company, colors, image: img },
		} = product;
		const image = img[0].thumbnails.large.url;
		return { id, featured, name, price, company, colors, image };
	});
	localStorage.setItem('allProducts', JSON.stringify(allProducts));
};

export { allProducts, addAllProductsToLocalStorage };
