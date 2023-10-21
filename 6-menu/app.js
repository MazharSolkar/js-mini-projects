import menu from './menu.js';

const btnContainer = document.querySelector('.btn-container');
const itemsContainer = document.querySelector('.items-container');

const setBtnContainer = () => {
	//* 1 - GET UNIQUE CATEGORIES USING REDUCE FUNCTION
	const btns = menu.reduce(
		(values, item) => {
			if (!values.includes(item.category)) {
				values.push(item.category);
			}
			return values;
		},
		['all']
	);

	//* 2 - SET APPROACH FOR GETTING UNIQUE CATEGORIES.
	/*
	 const btns = ['all', ...new Set(menu.map((item) => item.category))];
	*/

	btnContainer.innerHTML = btns
		.map(
			(btn) =>
				`
		<button
				data-category=${btn}
				class="text-xl font-semibold text-yellow-600 px-4 py-2 border border-yellow-600 rounded-lg mx-2">
				${btn}
    </button>`
		)
		.join('');

	btnContainer.addEventListener('click', (e) => {
		if (e.target.tagName !== 'BUTTON') return;

		// I wrote above code because I don't want e.target to trigger when I click on other tags than Button.

		const clickedCategory = e.target.dataset.category;

		const btns = btnContainer.querySelectorAll('button');
		btns.forEach((btn) => btn.classList.remove('bg-yellow-600', 'text-white'));

		e.target.classList.add('bg-yellow-600', 'text-white');

		const filterdMenu = menu.filter(
			(item) => item.category === clickedCategory
		);

		if (clickedCategory === 'all') {
			setItemsContainer(menu);
		} else {
			setItemsContainer(filterdMenu);
		}
	});
};

const setItemsContainer = (menu) => {
	itemsContainer.innerHTML = menu
		.map(
			(item) =>
				`
			<article class="w-[350px] h-[420px]">
				<!-- IMAGE -->
				<img
					class="border-4 border-yellow-600 rounded-xl w-full h-[250px] object-cover"
					src="${item.img}"
					alt="" />
				<!-- HEADER -->
				<div class="font-semibold text-2xl mt-4 flex justify-between">
					<h1 class="">${item.title}</h1>
					<h3 class="text-yellow-600">$ ${item.price}</h3>
				</div>
				<!-- NAME & PRICE -->
				<div class="h-[2px] bg-gray-400 mt-1 mb-2"></div>
				<!-- DESCRIPTION -->
				<p class="text-xl">${item.desc}</p>
			</article>
			`
		)
		.join('');
};

window.addEventListener('DOMContentLoaded', () => {
	setBtnContainer();
	setItemsContainer(menu);
});
