## Why DOMContentLoaded Event

```js
window.addEventListener('DOMContentLoaded', () => {
	setBtnContainer();
});
```

The purpose of this event listener is to ensure that your setBtnContainer() function is called when the DOM (Document Object Model) has finished loading. When the DOM is ready, it means that all the HTML elements on the page have been parsed and are available for manipulation through JavaScript.

## forEach() vs map() and querySelectorAll

### `querySelectorALl`

- return nodeList.

### `forEach`

- doesn't return new array, modifies existing array.
- forEach() method is also available on nodeList.

### `map`

- returns new array, doesn't modify existing array.
- array method. can't be applied on nodeList directly, that's why we need to convert nodeList into array first for using map() method on it.

## `Example`

```js
// querySelectorAll returns nodeList.
const nodeList = document.querySelectorAll('.item');
const nodeList2 = document.querySelectorAll('.item');

// Using forEach
nodeList.forEach((element, index) => {
	return `Item ${index + 1}`;
});

console.log(nodeList);

// Using map
const newArray = [...nodeList2];
// const newArray = Array.from(newArray);

newArray.map((element, index) => {
	return `Item ${index + 1}`;
});

console.log(newArray); // Output: ["Item 1", "Item 2", "Item 3"]
```
