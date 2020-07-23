import React from 'react';
import PropTypes from 'prop-types';

const FormSearch = ({ value, setValue, searchCity }) => (
  <form
    className="search__form"
    onSubmit={(e) => {
      e.preventDefault();
      searchCity();
    }}
  >
    <input
      className="search__input"
      type="text"
      placeholder="Votre ville ..."
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
    <button className="search__btn" type="submit">Search</button>
  </form>
);

FormSearch.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  searchCity: PropTypes.func.isRequired,
};

export default FormSearch;
