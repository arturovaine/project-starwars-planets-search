import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function FormButton() {
  const {
    setFilteredPlanets,
    filteredPlanets,
    column,
    comparison,
    value,
    // filterByNumericValues,
    options,
    setOptions,
  } = useContext(DataTableContext);

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

    const newOptions = options.filter((opt) => opt !== column);

    setOptions(newOptions);
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

// Resolução dos requisitos 2 e 3 com apoio do monitor Vinicius Dionysio e colega Carlos Dartora
