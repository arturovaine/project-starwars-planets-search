import React from 'react';
import FormFilterByName from '../helpers/FormFilterByName';

import FormColumnFilter from '../helpers/FormColumnFilter';
import FormComparisonFilter from '../helpers/FormComparisonFilter';
import FormValueFilter from '../helpers/FormValueFilter';
import FormButton from '../helpers/FormButton';

export default function FormFilters() {
  return (
    <table>
      <tbody>
        <tr>
          <td><FormFilterByName /></td>
          <td><FormColumnFilter /></td>
          <td><FormComparisonFilter /></td>
          <td><FormValueFilter /></td>
          <td><FormButton /></td>
        </tr>
      </tbody>
    </table>
  );
}
