import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function FormButton() {
  const {
    data,
    column,
    comparison,
    value,
    setFilteredPlanets,
  } = useContext(DataTableContext);

  const handleFilter = () => {
    const PARSED_VALUE = parseInt(value, 10);

    const numericFilteredPlanets = data.filter((result) => {
      if (comparison === 'maior que') {
        console.log('comparison');
        return result[column] > PARSED_VALUE;
      } if (comparison === 'menor que') {
        console.log(comparison);
        return result[column] < PARSED_VALUE;
      } if (comparison === 'igual a') {
        console.log(comparison);
        return result[column] === value;
      }

      return result[column] === value;
    });

    setFilteredPlanets(numericFilteredPlanets);
  };

  return (
    <div>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>
    </div>
  );
}
