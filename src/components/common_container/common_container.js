import React, {useState} from 'react';

import DataSelection from '../data_selection/data_selection.js';
import ContainerForm from '../container_form/container_form.js';
import ContainerTable from '../container_table/container_table.js';
import IndicatorLoading from '../indicator_loading/indicator_loading';

function CommonContainer() {
  const [dataForTable, setDataForTable] = useState(null);
  const [idicatorLoading, setIndicatorLoading] = useState(false);
  const [filteredData, setFilteredData] = useState('');
  const [enteredData, setEnteredData] = useState([]);
  return (
    <main>
        {!dataForTable && !idicatorLoading && <DataSelection setDataForTable={setDataForTable} setIndicatorLoading={setIndicatorLoading} setFilteredData={setFilteredData}/>}
        {idicatorLoading && <IndicatorLoading />}
        <div className="container">
          <ContainerForm setEnteredData={setEnteredData}/>
          <ContainerTable dataForTable={dataForTable} setDataForTable={setDataForTable} filteredData={filteredData} setFilteredData={setFilteredData} enteredData={enteredData} />
        </div>
    </main>
  );
}

export default CommonContainer;