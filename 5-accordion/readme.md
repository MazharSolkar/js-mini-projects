`index.html`

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://cdn.tailwindcss.com"></script>
		<title>Document</title>
	</head>
	<body>
		<div class="max-w-4xl">
			<!-- Header -->
			<h1 class="text-5xl text-center">Frequently Asked Questions</h1>
			<!-- single item -->
			<article class="question">
				<div>
					<!-- question section -->
					<div class="flex justify-between">
						<h1>Do You Accept All Major Credit Cards?</h1>
						<button class="btn">➕</button>
					</div>
					<!-- answer section -->
					<p class="ans hidden">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
						iusto ad quae quos eveniet facere ducimus molestias quaerat dolor
						debitis. Quis, at excepturi!
					</p>
				</div>
			</article>
			<!-- single item -->
			<article class="question">
				<div>
					<!-- question section -->
					<div class="flex justify-between">
						<h1>Do You Accept All Major Credit Cards?</h1>
						<button class="btn">➕</button>
					</div>
					<!-- answer section -->
					<p class="ans hidden">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
						iusto ad quae quos eveniet facere ducimus molestias quaerat dolor
						debitis. Quis, at excepturi!
					</p>
				</div>
			</article>
		</div>
		<script src="./app.js"></script>
	</body>
</html>
```

`output`
![image](https://github.com/john-smilga/javascript-basic-projects/assets/86589812/71ef82d3-c6d8-4c68-897c-9ac959bbc186)

```js
const questions = document.querySelectorAll('.question');

// console.log(questions);

questions.forEach((question) => {
	const btn = question.querySelector('.btn');
	const answer = question.querySelector('.ans');

	btn.addEventListener('click', () => {
		answer.classList.toggle('hidden');
	});
});
```

- When I click on ➕ button it should close answer of that particular question.
- In javascript to achieve this I will first select all the questions.
- Then in each question I will look for btn & answer.
  (This way I can limit the search for btn and answer to that particular question only.)
- Then I will add eventListener on btn when it is clicked i will toggle hide class on answer

> Now I want to all the other answers to close when I open one answer.

- to achieve this I will write below code.

```js
const questions = document.querySelectorAll('.question');

// console.log(questions);

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
```
