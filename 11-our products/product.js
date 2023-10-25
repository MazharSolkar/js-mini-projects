const url = 'https://course-api.com/react-store-single-product';

const productContainer = document.querySelector('#product-container');

const fetchProductDetails = async () => {
	try {
		productContainer.innerHTML =
			'<h4 class="text-xl text-green-500">Loading... </h4>';

		// console.log('window.location.search: ', window.location.search);
		const params = new URLSearchParams(window.location.search);
		const id = params.get('id');

		const response = await fetch(`${url}?id=${id}`);
		const data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		productContainer.innerHTML = `<h1 class="text-xl text-red-500">There was a problem loading the product. Please try again later</h1>`;
	}
};

const setProductContainer = (details) => {
	const { images, name, company, price, colors, description } = details;

	const colorList = colors
		.map(
			(color) =>
				`<span class="inline-block w-[20px] h-[20px] rounded-full mr-2" style="background: ${color}"></span>`
		)
		.join('');
	productContainer.innerHTML = `
  <!-- PRODCT IMAGE -->
  <img
    src="${images[0].url}"
    class="w-full h-[400px] object-cover rounded-lg"
    alt="" />
  <!-- PRODCUT DETAILS -->
  <div>
    <h1 class="title my-2 text-3xl text-gray-900">${name}</h1>
    <h2 class="mb-2 text-xl text-gray-500">${company}</h2>
    <h3 class="text-gray-800 mb-2">${price}</h3>
    <h4 class="colors mb-2">
			${colorList}
    </h4>
    <p class="description mb-3">
			${description}
    </p>
    <button
      class="back-btn bg-purple-600 text-white px-2 py-1 rounded-md">
      Add to Cart
    </button>
  </div>`;
};

const onInitialLoad = async () => {
	const details = await fetchProductDetails();
	setProductContainer(details);
};

onInitialLoad();
