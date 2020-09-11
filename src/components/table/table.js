import React from 'react';

import './table.css';

import TableHead from './table_head';
import TableBody from './table_body';

function Table({dataForTable}) {
  return (
    <table className = "table">
        <TableHead />
        <TableBody dataForTable={dataForTable}/>
    </table>
  );
}

export default Table;