import axios from 'axios';

const API_KEY = 'b5246f37b9656b9f177c519ad3a129d4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&=${city},us`;
	// take the url with the particular search city and make a get request
	const request = axios.get(url);

  return {
		type: FETCH_WEATHER, // create an action with the type of FETCH_WEATHER
		payload: request // additional data that describes this particular action
  };
}