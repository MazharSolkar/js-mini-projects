const url = 'https://course-api.com/react-store-products';

const productsContainer = document.querySelector('#products-container');

const fetchProducts = async () => {
	productsContainer.innerHTML = `<h1 class="text-xl text-green-600">Loading...</h1>`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		productsContainer.innerHTML = `<h1>Failed to fetch products</h1>`;
	}
};

const setProductsContainer = (products) => {
	productsContainer.innerHTML = products
		.map((product) => {
			const { id, name, image, price } = product;
			// console.log(id);
			return `
			<a href="product.html?id=${id}" class="block w-full rounded-lg shadow-lg bg-white">
          <article class="product">
              <img class="rounded-lg object-cover h-[200px] w-full"
                src="${image}"
                alt="${name}"
                srcset="" />
              <h1 class="text-center text-gray-500 text-xl my-1">
                ${name}
              </h1>
              <p class="text-center text-gray-700 font-bold">₹ ${Math.floor(
								price / 10
							)}</p>
          </article>
			</a>`;
		})
		.join('');
};

const onInitialLoad = async () => {
	const products = await fetchProducts();
	// console.log(products);
	setProductsContainer(products);
};

onInitialLoad();
// OR BELOW WAY
// window.addEventListener('DOMContentLoaded', () => onInitialLoad());
