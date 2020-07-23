import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './search.scss';
import FormSearch from './FormSearch';

const Search = ({ value, setValue, searchCity }) => (
  <header className="search__header">
    <nav className="search__nav">
      <NavLink to="/">Météo du jour</NavLink>
      <NavLink to="/next-days">Les prochains jours</NavLink>
      <NavLink to="favorite">Villes favorites</NavLink>
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
