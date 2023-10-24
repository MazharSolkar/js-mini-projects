const apiUrl = 'https://icanhazdadjoke.com/';
const requestHeaders = {
	headers: {
		Accept: 'application/json',
		'User-Agent': 'learning app',
	},
};

const randomJokeButton = document.querySelector('#random-btn');
const jokeContainer = document.querySelector('#joke-container');

randomJokeButton.addEventListener('click', () => fetchRandomJoke());

const fetchRandomJoke = async () => {
	jokeContainer.innerHTML = 'Loading...';

	try {
		const response = await fetch(apiUrl, requestHeaders);
		console.log(response);

		// respone objects status property is not equal to 200
		// throw new Error will terminate the program there and then no need of adding return.
		if (response.status !== 200) {
			throw new Error('Failed to fetch joke from the server');
		}

		const data = await response.json();
		jokeContainer.innerHTML = data.joke;
		//
	} catch (error) {
		console.error(error);
		jokeContainer.textContent = 'There was an error...';
	}
};

// Initial fetch when the page loads
fetchRandomJoke();
