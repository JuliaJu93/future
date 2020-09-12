import React from 'react';

import TableHead from './table_head';
import TableBody from './table_body';

function Table({filteredData}) {
  return (
    <table>
        <TableHead />
        <TableBody filteredData={filteredData}/>
    </table>
  );
}

export default Table;