import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function FormColumnFilter() {
  const { setColumnFilter } = useContext(DataTableContext);

  return (
    <label htmlFor="column-filter">
      <select
        name="column-filter"
        id="column-filter"
        data-testid="column-filter"
        onChange={ (event) => setColumnFilter(event.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </label>
  );
}
