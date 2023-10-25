# search query parameter;

```bash
https://vanilla-js-store.netlify.app/product.html?id=rec43w3ipXvP28vog
```

- To add query parameter first we add `?`.
- After question mark we write search query parameter.
- If you want to add more search query parameter then use & symbol.

# adding more than one search query parameter

```bash
https://vanilla-js-store.netlify.app/product.html?id=rec43w3ipXvP28vog&name=mazhar&lname=solkar
```

# How to get search params from url

```js
const url = 'https://course-api.com/react-store-single-product';

const productContainer = document.querySelector('#product-container');

const fetchProductDetails = async () => {
	try {
		productContainer.innerHTML = '<h4>Loading... </h4>';

		// ========================================================
		// console.log('window.location.search: ', window.location.search);
		// output : window.location.search:  ?id=recoW8ecgjtKx2Sj2

		const params = new URLSearchParams(window.location.search);
		const id = params.get('id');
		// ========================================================
		const response = await fetch(`${url}?id=${id}`);
		const data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		productContainer.innerHTML = `<h1>There was a problem...</h1>`;
	}
};
```
