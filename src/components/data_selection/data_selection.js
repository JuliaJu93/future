import React from 'react';

import './data_selection.css';

import {dataRequest} from './data_request'

function DataSelection({setDataForTable}) {
  function smallDataAcquisition() {
    dataRequest(32).then((data) => {
      setDataForTable(data);
    });
  }
  function bigDataAcquisition() {
    dataRequest(1000).then((data) => {
      setDataForTable(data);
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