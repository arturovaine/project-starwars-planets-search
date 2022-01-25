import React, { useState, useEffect } from 'react';
import './App.css';
import DataTableContext from './context/DataTableContext';
import Table from './Table';
import fetchAPI from './services/fetchAPI';

function App() {
  const [planets, setPlanets] = useState([]);

  const storeData = async () => {
    const data = await fetchAPI();
    setPlanets(data);
  };

  useEffect(() => { storeData(); }, []);

  return (
    <DataTableContext.Provider value={ { data: planets } }>
      <Table />
    </DataTableContext.Provider>
  );
}

export default App;
