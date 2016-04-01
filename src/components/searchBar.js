import React, { Component } from 'react'; // curly braces is like setting a new var

class SearchBar extends Component {// define a class called searchBar and give it functionality that React.Component has
  constructor(props){ //called evertime a new instance of the component is called
    super(props); //calling parent method
    this.state = {term: ''};//initializing the state, also includes properties
   }
  render () { //still a function
    return (
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})}/>
      </div>
    );
  }
}

export default SearchBar;
