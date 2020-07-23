import React from 'react';
import PropTypes from 'prop-types';

import './search.scss';

const Search = ({ value, setValue, searchCity }) => (
  <header className="search__header">
    <nav className="search__nav">
      <a className="search__link" href="">Home</a>
    </nav>
    <form
      className="search__form"
      onSubmit={(e) => {
        e.preventDefault();
        searchCity();
      }}
    >
      <input
        className="search__input"
        type="text"
        placeholder="Votre ville ..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="search__btn" type="submit">Search</button>
    </form>
  </header>
);

Search.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  searchCity: PropTypes.func.isRequired,
};

export default Search;
