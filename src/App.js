import React, { useState, useEffect } from 'react';
import './App.css';
import DataTableContext from './context/DataTableContext';
import Table from './Table';
import fetchAPI from './services/fetchAPI';

function App() {
  const [planets, setPlanets] = useState([]);
  // estado de infos dos planetas, chave 'results' da resposta da API

  const [filterByName, setFilterByName] = useState({ name: '' });
  const [column, setColumnFilter] = useState('population');
  const [comparison, setComparisonFilter] = useState('maior que');
  const [value, setValueFilter] = useState(0);

  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const storeData = async () => {
    const data = await fetchAPI(); // 'data' recebe response da fetchAPI
    setPlanets(data);
    setFilteredPlanets(data);
  };

  useEffect(() => { storeData(); }, []);
  // array vazio => funcionamento do useEffect é similar ao componentDidMount()

  const TableContext = {
    data: planets,

    filterByName,
    filterByNumericValues: {
      column,
      comparison,
      value,
    },
    setFilterByName,

    setColumnFilter,
    setComparisonFilter,
    setValueFilter,

    filteredPlanets,
    setFilteredPlanets,
  };

  // console.log(TableContext);

  return (
    <DataTableContext.Provider value={ TableContext }>
      <h1>Projeto Star Wars - Trybe</h1>
      <Table />
    </DataTableContext.Provider>
  );
}

export default App;
