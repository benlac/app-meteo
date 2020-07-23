import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { convertToCelcius, convertTimestampToDate, convertTimestamp } from '../../utils/convert';

const Card = ({ data }) => (
  <div className="card">
    <h2>{data.weather[0].description}</h2>
    <p>{convertToCelcius(data.main.temp)}°C</p>
    <span>{data.weather[0].icon}</span>
    <p>{`${convertTimestampToDate(data.dt)} ${convertTimestamp((data.dt))}`}</p>
    <Link to="/details">+ d'infos</Link>
  </div>
);

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
