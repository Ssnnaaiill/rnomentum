import React, { Component } from 'react';
import Search from './Search';

class SearchContainer extends Component {
  

  /**
   * SearchContainerState
   * Default state of search component
   * Search with given value in chrome google
   * - value: given search keyword
   * - isOpen: chrome browser for searching with given value is open
   * @param value
   * @param isOpen
   */
  
   state = {
    value: '',
    isOpen: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    // submitted value will be redirected to url address with query
    window.location.href = `https://www.google.com/search?q=${this.state.value}&oq=${this.state.value}&aqs=chrome..69i57.14453j0j0&sourceid=chrome&ie=UTF-8`;
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  searchButton = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { value, isOpen } = this.state;
    return (
      <Search
        value={value}
        isOpen={isOpen}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        searchButton={this.searchButton}
      />
    );
  }
}

export default SearchContainer;