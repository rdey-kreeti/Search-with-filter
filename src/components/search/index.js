import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

const SearchBar = ({searchValue, handleSearch}) => {
  return (
    <section className="search">
      <input className="search__input" type="text"  value={searchValue} onChange={handleSearch} placeholder="Search"/>
    </section>
  )
}

SearchBar.proptypes = {
  searchValue: PropTypes.string,
  handleSearch: PropTypes.func.isRequired
}

export default SearchBar;