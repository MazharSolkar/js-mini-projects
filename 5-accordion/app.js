const questions = document.querySelectorAll('.question');

// console.log(questions);

questions.forEach((question) => {
	const btn = question.querySelector('.btn');
	const answer = question.querySelector('.ans');

	btn.addEventListener('click', () => {
		answer.classList.toggle('hidden');
	});
});

// Below code will hide all other opened answers if I open another answer.

/*
const questions = document.querySelectorAll('.question');

//  console.log(questions);

questions.forEach((question) => {
	const btn = question.querySelector('.btn');
	const answer = question.querySelector('.ans');

	btn.addEventListener('click', () => {
		questions.forEach((question) => {
			const ans = question.querySelector('.ans');
			if (ans !== answer) {
				ans.classList.add('hidden');
			}
		});

		answer.classList.toggle('hidden');
	});
});
*/
