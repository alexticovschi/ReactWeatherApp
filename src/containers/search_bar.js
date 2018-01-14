import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
	constructor(props) {
		super(props);

		// the value of the input is going to be mapped to this.state.term
		this.state = { term: '' };

		// this instance of SearchBar has a function called onInputChange
		// bind onInputChange function to SearchBar and replace onInputChange with 
		// a new bound instance of this function
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		// console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	// prevents the form from submitting
	onFormSubmit(event) {
		event.preventDefault();

		// Go and fetch weather data
		// # Whenever the user clicks submit or they press ENTER, it will call the action 
		//   creator with the search term that they entered; then the state will be set to
		//   empty string, which will cause the component to rerender 
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					className="form-control" 
					placeholder="Get a five-day forecast in your favourite cities"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  } 
}

// Hook up the action creator fetchWeather to the SearchBar container
function mapDispatchToProps(dispatch) {
	// # Whenever the action creator is called and return an action,
	//   bind action creators with dispatch, make sure that that action flows down
	//   into the middleware and then the reducers inside redux application
	return bindActionCreators({ fetchWeather }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);