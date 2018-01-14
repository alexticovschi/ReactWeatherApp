import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';


const rootReducer = combineReducers({
  // responsible for the weather part of the state
  weather: WeatherReducer
});

export default rootReducer;
