import '../toggleNavAndSidebar.js';
import { getElement } from '../utils.js';
import { allProducts } from '../addAllProductsToLocalStorage.js';

const productsContainer = getElement('.products-container');
productsContainer.innerHTML = allProducts
	.map((product) => {
		const { image, name, id, price } = product;
		return `
  <!-- SINGLE PRODUCT -->
  <article class="single-product rounded-lg shadow-lg border-4 border-black w-[350px] m-4 relative group">
        <img
        class="object-cover h-[200px] w-full"
        src="${image}"
        alt="" />
        <div class="btn-container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <button class="info-btn bg-orange-400 text-white rounded-full p-2 mr-2 hidden group-hover:inline-block"><i class="fa-solid fa-circle-info fa-fw"></i></button>
              <button data-id="${id}" class="info-btn bg-orange-400 text-white rounded-full p-2 hidden group-hover:inline-block"><i class="fa-solid fa-cart-plus fa-fw"></i></button>
              </div>
              <h1 class="product-title text-gray-500 my-1">${name}</h1>
              <p class="product-price text-gray-700 font-bold">₹ ${
								price * 10
							}</p>
              </article>`;
	})
	.join('');

const loading = getElement('.loading');
loading.classList.add('hidden');
