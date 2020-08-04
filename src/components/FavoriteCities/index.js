import React from 'react';
import PropTypes from 'prop-types';

import './favoriteCities.scss';
import CardFavorite from './CardFavorite';

const FavoriteCities = ({ favoriteCities, setFavoriteCity }) => (
  <div className="favorite-cities">
    {favoriteCities.length !== 0
      && <h1 className="favorite-cities__title">Mes villes favorites</h1>}
    {favoriteCities.map((city, key) => (
      // eslint-disable-next-line react/no-array-index-key
      <CardFavorite {...city} setFavoriteCity={setFavoriteCity} key={key} />
    ))}
  </div>
);

FavoriteCities.propTypes = {
  favoriteCities: PropTypes.array.isRequired,
  setFavoriteCity: PropTypes.func.isRequired,
};

export default FavoriteCities;
