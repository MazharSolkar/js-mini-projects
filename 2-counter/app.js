const countSpan = document.querySelector('#count-span');
const btnContainer = document.querySelector('.btn-container');

let count = 0;

const setCount = (newCount) => {
	count = newCount;
	countSpan.innerHTML = count;

	countSpan.classList.toggle('text-red-500', count < 0);
	countSpan.classList.toggle('text-green-500', count > 0);
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
