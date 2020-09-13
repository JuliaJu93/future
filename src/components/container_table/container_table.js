import React, { useState } from 'react';

import './container_table.css';

import Filter from './filter/filter.js';
import Table from './table/table.js';

function ContainerTable({ dataForTable, setDataForTable, filteredData, setFilteredData}) {
  const [searchParameter, setSearchParameter] = useState('');
  return (
    <div className="table">
      <Filter setSearchParameter={setSearchParameter} searchParameter = {searchParameter} setFilteredData={setFilteredData} dataForTable={dataForTable}/>
      <Table filteredData={filteredData} dataForTable={dataForTable} setDataForTable={setDataForTable}/>
    </div>
  );
}

export default ContainerTable;