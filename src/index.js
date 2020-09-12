import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import DataSelection from './components/data_selection/data_selection.js';
import AddButton from './components/add_button/add_button.js';
import Form from './components/form/form.js';
import ContainerTable from './components/container_table/container_table.js';
import IndicatorLoading from './components/indicator_loading/indicator_loading';

function Main() {
  const [dataForTable, setDataForTable] = useState('');
  const [idicatorLoading, setIndicatorLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [filteredData, setFilteredData] = useState('');
  return (
    <main>
        {!dataForTable && !idicatorLoading && <DataSelection setDataForTable={setDataForTable} setIndicatorLoading={setIndicatorLoading} setFilteredData={setFilteredData}/>}
        {idicatorLoading && <IndicatorLoading />}
        <div className="container">
          {!showForm &&<AddButton setShowForm={setShowForm}/>}
          {showForm && <Form />}
          <ContainerTable dataForTable={dataForTable} setDataForTable={setDataForTable} filteredData={filteredData} setFilteredData={setFilteredData} />
        </div>
    </main>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));