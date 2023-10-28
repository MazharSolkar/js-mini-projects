const customFetch = async (url) => {
	const response = await fetch(url);
	// if (response.ok) {
	const data = await response.json();
	// }
	return data;
};

export default customFetch;
