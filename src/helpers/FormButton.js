import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function FormButton() {
  const {
    setFilteredPlanets,
    filteredPlanets,
    column,
    comparison,
    value,
  } = useContext(DataTableContext);

  // const [filteredPlanets, setFilteredPlanets] = useState([]);

  const handleFilter = () => {
    const PARSED_VALUE = Number(value);
    // console.log(PARSED_VALUE);
    // console.log("filtered");
    // console.log(filteredPlanets);

    const numericFilteredPlanets = filteredPlanets.filter((result) => {
      // console.log(typeof result[column]);
      if (comparison === 'maior que') {
        // console.log();
        return Number(result[column]) > PARSED_VALUE;
      } if (comparison === 'menor que') {
        return Number(result[column]) < PARSED_VALUE;
      } if (comparison === 'igual a') {
        return Number(result[column]) === PARSED_VALUE;
      }
      return result[column] === value;
    });
    // console.log(numericFilteredPlanets);
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
