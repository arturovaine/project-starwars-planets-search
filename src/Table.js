import React from 'react';
import FormFilters from './components/FormFilters';
import TableHeader from './helpers/TableHeader';
import TableBody from './helpers/TableBody';

export default function Table() {
  return (
    <div>
      <FormFilters />
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}
