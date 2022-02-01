import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function FormColumnFilter() {
  const { setColumnFilter, options } = useContext(DataTableContext);
  /* const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]); */

  // console.log(setOptions);

  return (
    <label htmlFor="column-filter">
      <select
        name="column-filter"
        id="column-filter"
        data-testid="column-filter"
        onChange={ (event) => setColumnFilter(event.target.value) }
      >
        {
          options.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))
        }
      </select>
    </label>
  );
}
