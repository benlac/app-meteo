/* eslint-disable radix */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import './nextDaysDetails.scss';
import { convertTimestampToDate, convertTimestamp, convertToCelcius } from '../../utils/convert';

const NextDaysDetails = (props) => {
  const id = props.match.params.id;
  const datas = props.data.list;
  const detail = datas.find((data) => data.dt === parseInt(id));
  return (
    <div className="next-days-details">
      <h1 className="next-days-details__title">Details pour le : {`${convertTimestampToDate(detail.dt)} à ${convertTimestamp(detail.dt)}`} à {props.data.city.name}</h1>
      <p className="next-days-details__text">{detail.weather.description}</p>
      <div className="next-days-details__img">
        <img src={`http://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`} alt="" />
      </div>
      <p className="next-days-details__text">Pourcentage de nuage: {detail.clouds.all}%</p>
      <p className="next-days-details__text">Temperature ressenti: {convertToCelcius(detail.main.feels_like)}°C </p>
      <p className="next-days-details__text">Pression atmospherique:{detail.main.pressure} hPa</p>
      <p className="next-days-details__text">Temperature: {convertToCelcius(detail.main.temp)}°C</p>
      <p className="next-days-details__text">Temperature max: {convertToCelcius(detail.main.temp_max)}°C</p>
      <p className="next-days-details__text">Temperature min: {convertToCelcius(detail.main.temp_min)}°C</p>
      {detail.main.sea_level
      && <p className="next-days-details__text">Pression atmospherique au niveau de la mer: {detail.main.sea_level}hPa</p>}
      <p className="next-days-details__text">Humidité: {detail.main.humidity}%</p>
      <p className="next-days-details__text">Visibilité: {detail.visibility}m</p>
      <p className="next-days-details__text">Vent: {detail.wind.speed}m/s</p>
      {detail.snow
      && <p className="next-days-details__text">Volume de neige pour les 3 dernière heures: {detail.snow}</p>}
      {detail.rain
      && <p className="next-days-details__text">Volume de pluie pour les 3 dernière heures: {detail.rain}mm</p>}
    </div>
  );
};

export default NextDaysDetails;
