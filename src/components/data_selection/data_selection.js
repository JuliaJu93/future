import React from 'react';

import './data_selection.css'

function DataSelection() {
  return (
    <div className = "dataSelection">
     <h1>Какой объем данных использовать?</h1>
     <div>
        <button>Малый</button>
        <button>Большой</button>
     </div>
    </div>
  );
}

export default DataSelection;