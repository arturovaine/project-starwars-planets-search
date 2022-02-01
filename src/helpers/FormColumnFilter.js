import React, { useContext, useState } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function FormColumnFilter() {
  const { setColumnFilter } = useContext(DataTableContext);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  console.log(setOptions);

  /*
  useEffect(() => {
    setOptions(options.filter(
      (op) => op !== column,
    ));
  }, []);
*/

  return (
    <label htmlFor="column-filter">
      <select
        name="column-filter"
        id="column-filter"
        data-testid="column-filter"
        onChange={ (event) => setColumnFilter(event.target.value) }
      >
        { /* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
  <option value="surface_water">surface_water</option> */}
        {
          options.map((option) => (
            <option key={ option } value={ option }>{option}</option>
          ))
        }
      </select>
    </label>
  );
}
