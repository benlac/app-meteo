import React from 'react';
import PropTypes from 'prop-types';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';

import wind from '../../assets/img/wind.svg';
import hpa from '../../assets/img/hpa.svg';
import sunrise from '../../assets/img/sunrise.svg';
import sunset from '../../assets/img/sunset.svg';
import humidity from '../../assets/img/humidity.svg';
import fog from '../../assets/img/fog.svg';

import './city.scss';
import { convertToCelcius, convertTimestamp, convertTimestampToDate } from '../../utils/convert';

const City = ({ current, handleClick, favorite }) => {
  const isFavorite = favorite.find((city) => city.name === current.name) ? 'icon-star icon-star--favorite' : 'icon-star';
  return (
    <div className="city">
      <h1 className="city__title">Météo du jour</h1>
      <div className="card card--current">
        <h1 className="actual-situation">Situation actuelle:</h1>
        <div className="city__city">
          <div className="city__city--details">
            <h2>{current.name}, {current.sys.country}</h2>
            <Star className={isFavorite} onClick={handleClick} />
          </div>
          <p>{convertTimestampToDate(current.dt)}</p>
          <img src={`https://www.countryflags.io/${current.sys.country}/shiny/64.png`} alt="" />
        </div>
        <div className="city__temp">
          <div className="city__temp__img">
            <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt="" />
          </div>
          <div className="city__temp__description">
            <p className="city__temp__description__current">{convertToCelcius(current.main.temp)}°C</p>
            <p className="city__temp__description__info">{current.weather[0].description}</p>
            <p className="city__temp__description__max">Température max: <span> {convertToCelcius(current.main.temp_max)}°C </span></p>
            <p className="city__temp__description__min">Température min: <span> {convertToCelcius(current.main.temp_min)}°C </span></p>
            <p className="city__temp__description__feels">Température ressenti: <span> {convertToCelcius(current.main.feels_like)}°C </span></p>
          </div>
        </div>
      </div>
      <div className="card card--humidity">
        <h2>Humidité</h2>
        <div className="humidity__details">
          <p>{current.main.humidity}%</p>
        </div>
        <div className="humidity__img">
          <img src={humidity} alt="" width="60px" />
        </div>
      </div>
      <div className="card card--wind">
        <h2>Vent</h2>
        <div className="wind__details">
          <p>{current.wind.speed} m/s</p>
        </div>
        <div className="wind__img">
          <img src={wind} alt="" width="60px" />
        </div>
      </div>
      <div className="card card--hpa">
        <h2>Pression atmospherique</h2>
        <div className="hpa__details">
          <p>{current.main.pressure} hPa</p>
        </div>
        <div className="hpa__img">
          <img src={hpa} alt="" width="60px" />
        </div>
      </div>
      <div className="card card--visibility">
        <h2>Visibilité</h2>
        <div className="visibility__details">
          <p>{current.visibility} mètres</p>
        </div>
        <div className="visibility__img">
          <img src={fog} alt="" width="60px" />
        </div>
      </div>
      <div className="card card--time-sun">
        <h2>Horraire soleil</h2>
        <div className="sunrise">
          <div className="sunrise__img">
            <img src={sunrise} alt="" width="60px" />
          </div>
          <div className="sunrise__details">
            <p>Levée du soleil: <br /> <span>{convertTimestamp(current.sys.sunrise)}</span> </p>
          </div>
        </div>
        <div className="sunset">
          <div className="sunset__img">
            <img src={sunset} alt="" width="60px" />
          </div>
          <div className="sunset__details">
            <p>Couché du soleil:  <br /> <span>{convertTimestamp(current.sys.sunset)}</span></p>
          </div>
        </div>
      </div>
      <div className="next-days">
        <Link to="/next-days">Voir pour les prochains jours</Link>
      </div>
    </div>
  );
};


City.propTypes = {
  current: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  favorite: PropTypes.array.isRequired,
};

export default City;
