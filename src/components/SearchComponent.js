import React, { Component } from 'react';
import "./styles.css"

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <input type="text" className="searchTerm" placeholder="What are you looking for?"></input>
        <button className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
  }
}

export default Search;
