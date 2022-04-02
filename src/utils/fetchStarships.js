import { URL_STARSHIPS } from '../constants';

export const fetchStarships = async () => {
	const response = await fetch(URL_STARSHIPS, { method: 'GET' });
	const data = await response.json();
	console.log(data.results);
	return data.results;
};
