import React from 'react';
import PropTypes from 'prop-types';

import './favoriteCities.scss';
import CardFavorite from './CardFavorite';

const FavoriteCities = ({ favoriteCities, setFavoriteCity }) => (
  <div className="favorite-cities">
    {favoriteCities.map((city, key) => (
      <CardFavorite {...city} setFavoriteCity={setFavoriteCity} key={key} />
    ))}
  </div>
);

FavoriteCities.propTypes = {
  favoriteCities: PropTypes.array.isRequired,
  setFavoriteCity: PropTypes.func.isRequired,
};

export default FavoriteCities;
