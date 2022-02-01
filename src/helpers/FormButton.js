import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function FormButton() {
  const {
    setFilteredPlanets,
    filteredPlanets,
    // column,
    // comparison,
    // value,
    filterByNumericValues,
  } = useContext(DataTableContext);

  const { column, comparison, value } = filterByNumericValues;

  const handleFilter = () => {
    const numericFilteredPlanets = filteredPlanets.filter((result) => {
      switch (comparison) {
      case 'maior que':
        return Number(result[column]) > Number(value);
      case 'menor que':
        return Number(result[column]) < Number(value);
      case 'igual a':
        return Number(result[column]) === Number(value);
      default:
        return result[column] === Number(value);
      }
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
