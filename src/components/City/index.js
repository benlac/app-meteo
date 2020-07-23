import React from 'react';
import PropTypes from 'prop-types';
import { Star } from 'react-feather';

import './city.scss';
import { convertToCelcius, convertTimestamp, convertTimestampToDate } from '../../utils/convert';

const City = ({ current }) => {
  console.log(current);
  return (
    <div className="city">
      <div className="card card--current">
        <h1>{current.name}, {current.sys.country}</h1>
        <div className="icon">
          <Star className="icon--star" />
        </div>
        <p>{convertTimestampToDate(current.dt)}</p>
        <span>image pays</span>
        <p>{current.weather[0].description}</p>
        <p>Temp: {convertToCelcius(current.main.temp)} </p>
        <p>Temp max: {convertToCelcius(current.main.temp_max)} </p>
        <p>Temp min: {convertToCelcius(current.main.temp_min)}</p>
        <p>Temp ressenti: {convertToCelcius(current.main.feels_like)}</p>
      </div>
      <div className="card card--humidity">
        <h2>Humidité</h2>
        <p>{current.main.humidity}%</p>
      </div>
      <div className="card card--wind">
        <h2>Vent</h2>
        <p>{current.wind.speed} m/s</p>
      </div>
      <div className="card card--time-sum">
        <h2>Horraire soleil</h2>
        <p>Levée du soleil: {convertTimestamp(current.sys.sunrise)}</p>
        <p>Couché du soleil: {convertTimestamp(current.sys.sunset)}</p>
      </div>
      <div className="card card--time-sum">
        <h2>Pression atmospherique</h2>
        <p>{current.main.pressure} hPa</p>
      </div>
      <div className="card card--visibility">
        <h2>Visibilité</h2>
        <p>{current.visibility} mètres</p>
      </div>
    </div>
  );
};

City.propTypes = {
  current: PropTypes.object.isRequired,
};

export default City;