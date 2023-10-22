const articles = document.querySelectorAll('article');
const btnsContainer = document.querySelector('#btns-container');
const btns = document.querySelectorAll('.btn');

btnsContainer.addEventListener('click', (e) => {
	if (e.target.tagName !== 'SPAN') return;

	[...articles].forEach((article) => article.classList.add('hidden'));

	const clickedTab = e.target.id;
	// console.log(clickedTab);

	const tab = [...articles].find(
		(article) => article.dataset.title === clickedTab
	);

	tab.classList.remove('hidden');
});
