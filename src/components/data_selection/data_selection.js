import React from 'react';

import './data_selection.css';

import {dataRequest} from './data_request'

function DataSelection({setDataForTable, setIndicatorLoading, setFilteredData, setShowDataSelection}) {
  function smallDataAcquisition() {
    setIndicatorLoading(true);
    dataRequest(32).then((data) => {
      setFilteredData(data);
      setDataForTable(data);
      setShowDataSelection(true);
      setIndicatorLoading(false);
    });
  }
  function bigDataAcquisition() {
    setIndicatorLoading(true);
    dataRequest(1000).then((data) => {
      setFilteredData(data);
      setDataForTable(data);
      setShowDataSelection(true);
      setIndicatorLoading(false);
    });
  }
  return (
    <div className = "dataSelection">
     <h1>Какой объем данных использовать?</h1>
     <div>
        <button onClick={smallDataAcquisition}>Малый</button>
        <button onClick={bigDataAcquisition}>Большой</button>
     </div>
    </div>
  );
}

export default DataSelection;