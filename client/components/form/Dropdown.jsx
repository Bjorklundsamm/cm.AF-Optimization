import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ id, mortgages, handleInputChange }) => (
  <select
    id={id}
    onChange={
      (e) => handleInputChange({
        value: e.target.value,
      })
    }
  >
    {
      mortgages.map((mortgage) => (
        <option
          key={mortgage._id}
          value={mortgage.terms}
        >
          {mortgage.terms}
        </option>
      ))
    }
  </select>
);

export default Dropdown;

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  mortgages: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
