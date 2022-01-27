import React, { useState } from 'react';
import DataTableContext from '../context/DataTableContext';

function FormFilterByName() {
  // const { filter } = useContext(DataTableContext);
  console.log(DataTableContext);

  const [name, setFilterByName] = useState('');

  const handleChange = ({ target }) => {
    setFilterByName(target.value);
  };

  return (
    <div>
      <input
        data-testid="name-filter" // O campo de texto deve possuir a propriedade data-testid='name-filter'
        type="text"
        placeholder="Filtrar por nome"
        value={ name }
        onChange={ handleChange }
      />
      <br />
      <br />
    </div>
  );
}

export default FormFilterByName;
