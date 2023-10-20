const countSpan = document.querySelector('#count-span');
const btnContainer = document.querySelector('.btn-container');

let count = 0;

const setCount = (newCount) => {
	countSpan.classList.toggle('text-red-500', newCount < 0);
	countSpan.classList.toggle('text-green-500', newCount > 0);

	count = newCount;
	countSpan.innerHTML = count;
};

btnContainer.addEventListener('click', (e) => {
	if (e.target.id === 'decrease') {
		setCount(count - 1);
	} else if (e.target.id === 'increase') {
		setCount(count + 1);
	} else if (e.target.id === 'reset') {
		setCount(0);
	}
});
