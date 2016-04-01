import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAA-ERrI_WMXvzcH4bsXRVnb7328q0jqpw'

const App = () => {
    return (
    <div>
      <SearchBar />
    </div>
  )
};
ReactDOM.render(<App/>, document.querySelector('.container'));
