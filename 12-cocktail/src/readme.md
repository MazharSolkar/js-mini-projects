```js
//
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// search by cocktail name
const searchURL =
	'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

// single cocktail details (will also use for navigation)
const detailsURL =
	'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007';
```

## Directly importing module without exporting it.

- If you directly import module without exporting it.
- It will directly execute in the file or place where you imported it.

eg:

`searchForm.js`

```js
console.log('I will direclty execute');
```

`app.js`

```js
import './searchForm.js';
```

output :

```bash
I will directly execute.
```
