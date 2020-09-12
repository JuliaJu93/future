import React from 'react';

import './table.css';

import Filter from './filter/filter.js';
import Table from './table/table.js';

function ContainerTable({dataForTable}) {
  return (
    <div className = "table">
        <Filter />
        <Table dataForTable={dataForTable}/>
    </div>
  );
}

export default ContainerTable;