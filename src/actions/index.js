import axios from 'axios';

const API_KEY = 'b5246f37b9656b9f177c519ad3a129d4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// # The user enters the search term, submits the form that calls the action creator fetchWeather;
// # fetchWeather takes a city(search term) as an argument;
// # then the url is created with a city and an ajax GET request is made with axios;
// # axios returns a promise(data structure that doesn't actually yet contain the request data);
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	// take the url with the particular search city and make a get request
	const request = axios.get(url);

	console.log('Request:', request);

  return {
		type: FETCH_WEATHER, // create an action with the type of FETCH_WEATHER
		payload: request // additional data that describes this particular action; a promise is returned as a payload
  };
}