# Why DOMContentLoaded Event

```js
window.addEventListener('DOMContentLoaded', () => {
	setBtnContainer();
});
```

The purpose of this event listener is to ensure that your setBtnContainer() function is called when the DOM (Document Object Model) has finished loading. When the DOM is ready, it means that all the HTML elements on the page have been parsed and are available for manipulation through JavaScript.
