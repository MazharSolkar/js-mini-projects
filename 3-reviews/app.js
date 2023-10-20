import { get } from './selector.js';

// local reviews data
const reviews = [
	{
		id: 1,
		name: 'susan smith',
		job: 'web developer',
		img: 'https://www.course-api.com/images/people/person-1.jpeg',
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: 'anna johnson',
		job: 'web designer',
		img: 'https://www.course-api.com/images/people/person-2.jpeg',
		text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
		id: 3,
		name: 'peter jones',
		job: 'intern',
		img: 'https://www.course-api.com/images/people/person-4.jpeg',
		text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
		id: 4,
		name: 'bill anderson',
		job: 'the boss',
		img: 'https://www.course-api.com/images/people/person-3.jpeg',
		text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
];

// select elements
const image = get('#image');
const author = get('#author');
const job = get('#job');
const info = get('#info');
const btn_container = get('#button-container');

let currentItem = 0;

const setCurrentItem = (newCurrentItem) => {
	// NORMAL APPROACH
	/* ===============================================================
	if (newCurrentItem < 0) {
		currentItem = reviews.length - 1;
	} else if (newCurrentItem > reviews.length - 1) {
		currentItem = 0;
	} else {
		currentItem = newCurrentItem;
	}
	==================================================================
	*/

	// RECURSIVE APPROACH
	// (first if condition is base case to avoid unneccessary resursive call)
	if (newCurrentItem >= 0 && newCurrentItem < reviews.length) {
		currentItem = newCurrentItem;
	} else {
		if (newCurrentItem < 0) {
			setCurrentItem(reviews.length - 1);
		} else {
			setCurrentItem(0);
		}
	}

	const item = reviews[currentItem];
	image.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
};

window.addEventListener('DOMContentLoaded', () => {
	setCurrentItem(0);
});

btn_container.addEventListener('click', (e) => {
	if (e.target.id === 'prev-btn') {
		setCurrentItem(currentItem - 1);
	} else if (e.target.id === 'next-btn') {
		setCurrentItem(currentItem + 1);
	} else if (e.target.id === 'random-btn') {
		setCurrentItem(Math.floor(Math.random() * reviews.length));
	}
});
