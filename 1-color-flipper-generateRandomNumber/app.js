const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// #f15025

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

const getRandomNumber = () => Math.floor(Math.random() * hex.length);

btn.addEventListener('click', () => {
	let hexColor = '#';
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()];
	}
	color.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
});

/**
 * Math.random() give us o.49530... random value.
 * Math.random() ==> Output : 0.243, 0.56434, 0.98556
 *
 * I want to generate values from 0 to hex.length(16)
 * If i multiply Math.random() with hex.length it will generate random value between 0.something to 15.something.
 * Math.random() * colors.length ==> output : 0.2343, 0.4545, 1.0484, 3.0564, 2.4654
 *
 * I will use Math.floor to normalize the value as i dont want value after decimal point.
 * Math.floor(Math.random() * colors.length) ==> output : 0, 2, 1, 3, 4, 8
 *
 */
