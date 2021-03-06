import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { convertToCelcius, convertTimestampToDate, convertTimestamp } from '../../utils/convert';

const Card = ({ data }) => (
  <Link className="card" to={`/details/${data.dt}`}>
    <div>
      <h2>{data.weather[0].description}</h2>
      <p className="card__temp__next-days">{convertToCelcius(data.main.temp)}°C</p>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
      <p>{`${convertTimestampToDate(data.dt)} ${convertTimestamp((data.dt))}`}</p>
      <div>+ d'infos</div>
    </div>
  </Link>
);

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
