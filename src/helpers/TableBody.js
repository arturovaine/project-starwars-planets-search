import React, { useContext } from 'react';
import DataTableContext from '../context/DataTableContext';

export default function TableBody() {
  const { data } = useContext(DataTableContext);
  return (
    <div>
      <tbody>
        {data && (
        // JSON => "results": [{planet_1},{planet_2},{planet_3},..]
          data.map((results) => (
            <tr key={ results.name }>
              <td>{ results.name }</td>
              <td>{ results.rotation_period }</td>
              <td>{ results.orbital_period }</td>
              <td>{ results.diameter }</td>
              <td>{ results.climate }</td>
              <td>{ results.gravity }</td>
              <td>{ results.terrain }</td>
              <td>{ results.surface_water }</td>
              <td>{ results.population }</td>
              <td>{ results.films }</td>
              <td>{ results.created }</td>
              <td>{ results.edited }</td>
              <td>{ results.url }</td>
            </tr>
          ))
        )}
      </tbody>
    </div>
  );
}
