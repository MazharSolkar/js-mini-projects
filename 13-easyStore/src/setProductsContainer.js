const setProductsContainer = (productsContainer, products) => {
	productsContainer.innerHTML = products
		.map((product) => {
			const { image, name, id, price } = product;
			return `
<!-- SINGLE PRODUCT -->
<article class="single-product rounded-lg shadow-lg border-4 border-black relative group m-4 block">
      <img
      class="object-cover h-[200px] w-[400px]"
      src="${image}"
      alt="" />
      <div class="btn-container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <a href="product.html?id=${id}">
                  <button class="info-btn bg-orange-400 text-white rounded-full w-[40px] h-[40px] p-2 mr-2 hidden group-hover:inline-block"><i class="fa-solid fa-circle-info fa-fw"></i></button>
            </a>
            <button data-id="${id}" class="info-btn bg-orange-400 text-white rounded-full w-[40px] h-[40px] p-2 hidden group-hover:inline-block"><i class="fa-solid fa-cart-plus fa-fw"></i></button>
      </div>
      <h1 class="product-title text-gray-500 my-1">${name}</h1>
      <p class="product-price text-gray-700 font-bold">₹ ${price * 10}</p>
</article>`;
		})
		.join('');
};
export default setProductsContainer;
