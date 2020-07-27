import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './error.scss';

const Error = ({ error, handleClick }) => (
  <>
    <div className="error">
      <p> { error && error.response.data.message ? error.response.data.message : 'Une erreur est survenu' }</p>
      <Link to="/" onClick={handleClick}>Retour à l'accueil</Link>
    </div>
  </>
);

Error.propTypes = {
  error: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Error;
