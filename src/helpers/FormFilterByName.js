import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

function FormFilterByName() {
  const { setFilterByName } = useContext(DataTableContext);

  const handleChange = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  return (
    <div>
      <input
        data-testid="name-filter" // O campo de texto deve possuir a propriedade data-testid='name-filter'
        type="text"
        placeholder="Filtrar por nome"
        onChange={ handleChange }
      />
      <br />
      <br />
    </div>
  );
}

export default FormFilterByName;
