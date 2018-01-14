// a reducer that takes an action
// the default state is set to null
export default function(state = null, action) {
  console.log('Action received', action);
  return state;
}