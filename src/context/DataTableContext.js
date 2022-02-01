import { createContext } from 'react';
/*
const INITIAL_CONTEXT = {
  filterByName: '',
  filterByNumericValues: {
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  },
};
*/
const DataTableContext = createContext();

export default DataTableContext;
