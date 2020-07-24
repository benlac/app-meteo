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
      <h1>Details: {props.data.city.name}</h1>
      <p>Le {`${convertTimestampToDate(detail.dt)} à ${convertTimestamp(detail.dt)}`}</p>
      <p>{detail.weather.description}</p>
      <img src={`http://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`} alt="" />
      <p>Pourcentage de nuage: {detail.clouds.all}%</p>
      <p>Temperature ressenti: {convertToCelcius(detail.main.feels_like)}°C </p>
      <p>Pression atmospherique:{detail.main.pressure} hPa</p>
      <p>Temperature: {convertToCelcius(detail.main.temp)}°C</p>
      <p>Temperature max: {convertToCelcius(detail.main.temp_max)}°C</p>
      <p>Temperature min: {convertToCelcius(detail.main.temp_min)}°C</p>
      {detail.main.sea_level
      && <p>Pression atmospherique au niveau de la mer: {detail.main.sea_level}hPa</p>}
      <p>Humidité: {detail.main.humidity}%</p>
      <p>Visibilité: {detail.visibility}m</p>
      <p>Vent: {detail.wind.speed}m/s</p>
      {detail.snow
      && <p>Volume de neige pour les 3 dernière heures: {detail.snow}</p>}
      {detail.rain
      && <p>Volume de pluie pour les 3 dernière heures: {detail.rain}mm</p>}
    </div>
  );
};

export default NextDaysDetails;
