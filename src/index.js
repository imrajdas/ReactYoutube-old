 import React from 'react';
 import ReactDOM from 'react-dom';
 import SearchBar from './components/search_bar';
// create a new component
// const API_KEY = 'AIzaSyCZmWzJYmQHbf_YG4nYHYhKl9Y-HDOEnBw';
const App = ()=>{
  return (
  <div>
    <SearchBar/>
  </div>
);
}
ReactDOM.render(<App></App>,document.querySelector('.container'));
