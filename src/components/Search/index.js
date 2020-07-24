import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './search.scss';
import FormSearch from './FormSearch';

const Search = ({ value, setValue, searchCity }) => (
  <header className="search__header">
    <nav className="search__nav">
      <NavLink to="/" exact className="search__link">Météo du jour</NavLink>
      <NavLink to="/next-days" className="search__link">Les prochains jours</NavLink>
      <NavLink to="favorite" className="search__link">Villes favorites</NavLink>
    </nav>
    <FormSearch value={value} setValue={setValue} searchCity={searchCity} />
  </header>
);

Search.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  searchCity: PropTypes.func.isRequired,
};

export default Search;
