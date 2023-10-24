import data from './data.js';

let people = [...data];

const slidesContainer = document.querySelector('#slides-container');
console.log(slidesContainer);

slidesContainer.innerHTML = people
	.map((person, index) => {
		let position = 'active';
		if (index > 0) {
			position = 'next';
		}
		if (index === people.length - 1) {
			position = 'last';
		}
		return `
  <article data-id="${index}" class="card bg-base-100 shadow-xl h-[500px] slide ${position}">
    <figure class="px-10 pt-10">
      <img
        src="${person.img}"
        alt="${person.name}"
        class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title text-xl font-semibold text-yellow-600">${person.name}</h2>
      <p class="text-xl">${person.text}<p>
    </div>
</article>
  `;
	})
	.join('');

const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');

const goToNextSlide = (btn) => {
	let activeSlide = document.querySelector('.active');
	let lastSlide = document.querySelector('.last');
	let nextSlide;

	activeSlide.classList.remove('active');
	lastSlide.classList.remove('last');
	if (btn === 'next') {
		nextSlide =
			activeSlide.nextElementSibling || slidesContainer.firstElementChild;

		activeSlide.classList.add('last');
		lastSlide.classList.add('next');
		nextSlide.classList.remove('next');
		nextSlide.classList.add('active');
	} else if (btn === 'prev') {
		nextSlide =
			lastSlide.previousElementSibling || slidesContainer.lastElementChild;

		activeSlide.classList.add('next');
		lastSlide.classList.add('active');
		nextSlide.classList.remove('next');
		nextSlide.classList.add('last');
	}
	console.log(nextSlide);
};

nextBtn.addEventListener('click', () => goToNextSlide('next'));
prevBtn.addEventListener('click', () => goToNextSlide('prev'));
