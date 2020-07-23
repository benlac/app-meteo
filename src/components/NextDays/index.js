/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import './nextDays.scss';
import Card from './Card';
import { convertTimestampToDate } from '../../utils/convert';

const NextDays = ({ nextWeather }) => {
  const rows = [];
  let lastDay = null;

  nextWeather.list.forEach((data, key) => {
    if (convertTimestampToDate(data.dt) !== lastDay) {
      rows.push(
        <h1 className="days__title" key={data.dt}>Le {convertTimestampToDate(data.dt)}</h1>,
      );
    }
    rows.push(
      <Card data={data} key={key} />,
    );
    lastDay = convertTimestampToDate(data.dt);
  });

  return (
    <div className="next-days">
      <h1>La météo des prochain jours à {nextWeather.city.name}, {nextWeather.city.country}</h1>
      <div className="days">
        {rows}
      </div>
    </div>
  );
};

NextDays.propTypes = {
  nextWeather: PropTypes.object.isRequired,
};

export default NextDays;
