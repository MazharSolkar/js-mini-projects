const setProductDetails = (productContainer, productDetails) => {
	const {
		id: prod_id,
		fields: { colors, company, description, image, name, price },
	} = productDetails;
	const img = image[0].thumbnails.large.url;
	const productColors = colors
		.map(
			(color) => `<span
	class="color h-[20px] w-[20px] p-2 rounded-full mr-2" style="background-color: ${color}"></span>`
		)
		.join('');
	productContainer.innerHTML = `			
	<img
	class="rounded-lg h-[500px] w-[100%] obect-cover"
	src="${img}"
	alt="Product_Image" />
<div data-id="${prod_id}" class="details-wrapper">
	<h1 class="product-title text-3xl text-gray-800 font-semibold mb-1">
		${name}
	</h1>
	<h2 class="company text-xl text-gray-600">By IKEA</h2>
	<h3 class="price text-gray-800 font-bold my-2">₹ ${price}</h3>
	<div class="colors-container flex mb-2">
	${productColors}
	</div>
	<p class="descritpion text-gray-600">
${description}
	</p>
	<button
		class="add-to-cart bg-orange-400 text-white rounded-lg px-4 py-2 my-4 capitalize">
		Add to Cart
	</button>
</div>`;
};

export default setProductDetails;
