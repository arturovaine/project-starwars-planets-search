import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

function FormFilterByName() {
  const { setFilterByName } = useContext(DataTableContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        onChange={ (event) => setFilterByName({ name: event.target.value }) }
      />
      <br />
      <br />
    </div>
  );
}

export default FormFilterByName;
