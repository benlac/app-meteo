import React from 'react';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardFavorite = ({ name, sys, setFavoriteCity }) => {
  const handleClick = () => {
    setFavoriteCity(name);
  };
  return (
    <Link to="/" onClick={handleClick}>
      <div className="favorite__card">
        <Star className="star-icon" />
        <h1>{name}</h1>
        <img src={`https://www.countryflags.io/${sys.country}/shiny/64.png`} alt="" />
      </div>
    </Link>
  );
};

CardFavorite.propTypes = {
  name: PropTypes.string.isRequired,
  setFavoriteCity: PropTypes.func.isRequired,
  sys: PropTypes.object.isRequired,
};

export default CardFavorite;
