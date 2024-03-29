import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function FormValueFilter() {
  const { setValueFilter, value } = useContext(DataTableContext);

  return (
    <label htmlFor="value-filter">
      <input
        name="value-filter"
        id="value-filter"
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ (event) => setValueFilter(event.target.value) }
      />
    </label>
  );
}
