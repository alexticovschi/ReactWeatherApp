import { FETCH_WEATHER } from '../actions/index';

// a reducer that takes an action
// the default state is an array
export default function(state = [], action) {
  // if the city is nonexistent, return the state
  if(action.error) {
    return state;
  }

  switch (action.type) {
    case FETCH_WEATHER:
      // make a new array, put action.data inside of it and then take all the inside entries 
      // of the variable state, and insert it into new outside array
      return [ action.payload.data, ...state ];
  }

  return state;
}