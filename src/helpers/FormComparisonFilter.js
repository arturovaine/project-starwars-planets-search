import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function FormComparisonFilter() {
  const { setComparisonFilter } = useContext(DataTableContext);

  return (
    <label htmlFor="comparison-filter">
      <select
        name="comparison-filter"
        id="comparison-filter"
        data-testid="comparison-filter"
        onChange={ (event) => setComparisonFilter(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
    </label>
  );
}
