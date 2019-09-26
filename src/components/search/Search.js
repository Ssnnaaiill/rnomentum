import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// search component is fixed at left top
const Container = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  margin: 1rem;
`;

const Text = styled.span`
  margin-right: 1rem;
  font-weight: bold;
`;

const SearchIcon = styled.div`
  position: absolute;
  cursor: pointer;
`;

// display of input slot will be shown differently according to the status of search browser
const Input = styled.input`
  all: unset;
  border-bottom: 1px solid #fff;
  padding-left: 1.5rem;
  padding-bottom: 0.5rem;
  display: ${prop => (prop.isOpen === true ? 'block' : 'none')};

  /* Fadein Animations */
  animation: fadein 0.5s;
  -moz-animation: fadein 0.5s;
  -webkit-animation: fadein 0.5s;
  -o-animation: fadein 0.5s;
`;

const Search = ({ value, isOpen, handleSubmit, handleChange, searchButton }) => (
  <Container>
    <Text>Search</Text>
    <form onSubmit={handleSubmit}>
      <SearchIcon onClick={searchButton}><FontAwesomeIcon icon={faSearch} /></SearchIcon>
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