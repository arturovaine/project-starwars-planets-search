import React from 'react';
import FormFilterByName from '../helpers/FormFilterByName';

import FormColumnFilter from '../helpers/FormColumnFilter';
import FormComparisonFilter from '../helpers/FormComparisonFilter';
import FormValueFilter from '../helpers/FormValueFilter';
import FormButton from '../helpers/FormButton';

export default function FormFilters() {
  return (
    <div>
      <div><FormFilterByName /></div>
      <div><FormColumnFilter /></div>
      <div><FormComparisonFilter /></div>
      <div><FormValueFilter /></div>
      <div><FormButton /></div>
    </div>
  );
}
