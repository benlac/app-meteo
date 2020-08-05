/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import errorImg from './error.png';

import './error.scss';

const Error = ({ error, handleClick }) => (
  <>
    <div className="error">
      <img src={errorImg} alt="" />
      <p className="error__text">{ error && error.response.data.message ? error.response.data.message : 'Une erreur est survenu' }</p>
      <Link className="error__link" to="/" onClick={handleClick}>Retour à l'accueil</Link>
    </div>
  </>
);

Error.propTypes = {
  error: PropTypes.object,
  handleClick: PropTypes.func,
};

export default Error;
