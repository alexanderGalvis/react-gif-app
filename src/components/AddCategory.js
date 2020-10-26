import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
//rsc
const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim().length > 2)
      setCategorias((cat) => [inputValue, ...cat]);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};

export default AddCategory;
