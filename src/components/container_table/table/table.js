import React from 'react';

import TableHead from './table_head';
import TableBody from './table_body';

function Table({dataForTable}) {
  return (
    <table>
        <TableHead />
        <TableBody dataForTable={dataForTable}/>
    </table>
  );
}

export default Table;