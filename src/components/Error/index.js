import React from 'react';
import PropTypes from 'prop-types';

import './error.scss';

const Error = ({ error }) => (
  <>
    <div className="error">
      <p> { error && error.response.data.message ? error.response.data.message : 'Une erreur est survenu' }</p>
      <p>Réessayez votre recherche ci-dessus</p>
    </div>
  </>
);

Error.propTypes = {
  error: PropTypes.object.isRequired,
};

export default Error;
