import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { search } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  margin: 1rem;
`;

const Text = styled.span`
  margin-right: 1rem;
  font-weight: bold;
`;

const SearchIcon = styled.i`
  position: absolute;
  cursor: pointer;
`;

// visibility will be shown differently according to the status of search browser
// if browser is open, input is visible, else input is hidden
const Input = styled.input`
  all: unset;
  border-bottom: 2px solid white;
  padding-left: 1.5rem;
  padding-bottom: 0.5rem;
  visibility: ${prop => (prop.isOpen === true ? 'visible' : 'hidden')};
`;

const Search = ({ value, isOpen, handleSubmit, handleChange, searchButton }) => (
  <Container>
    <Text>Search</Text>
    <form onSubmit={handleSubmit}>
      <SearchIcon className="fas fa-search" onClick={searchButton} />
      <Input value={value} onChange={handleChange} isOpen={isOpen} />
    </form>
  </Container>
);

Search.propTypes = {
  value: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchButton: PropTypes.func.isRequired
};

export default Search;