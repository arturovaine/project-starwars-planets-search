import React, { useContext, useEffect } from 'react';
import DataTableContext from '../context/DataTableContext';
import '../App.css';

export default function TableBody() {
  const {
    data,
    filterByName: { name },
    filteredPlanets,
    setFilteredPlanets,
  } = useContext(DataTableContext);

  useEffect(() => {
    const filteredData = data.filter(
      (results) => results.name.toLowerCase().includes(name),
    );
    setFilteredPlanets(filteredData);
  }, [name]);

  return (
    <tbody>
      {filteredPlanets && (
        // JSON => "results": [{planet_1},{planet_2},{planet_3},..]
        filteredPlanets.map((results) => (
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
  );
}
