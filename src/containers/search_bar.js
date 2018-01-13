import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		// the value of the input is going to be mapped to this.state.term
		this.state = { term: '' };

		// this instance of SearchBar has a function called onInputChange
		// bind onInputChange function to SearchBar and replace onInputChange with 
		// a new bound instance of this function
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

  render() {
    return (
      <form className="input-group">
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