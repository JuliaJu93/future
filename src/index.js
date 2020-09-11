import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import DataSelection from './components/data_selection/data_selection.js';
import AddButton from './components/add_button/add_button.js';
import Form from './components/form/form.js';
import Filter from './components/filter/filter.js';
import Table from './components/table/table.js';
import IndicatorLoading from './components/indicator_loading/indicator_loading';

function Main() {
  const [dataForTable, setDataForTable] = useState('');
  const [idicatorLoading, setIndicatorLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <main>
        {!dataForTable && !idicatorLoading && <DataSelection setDataForTable={setDataForTable} setIndicatorLoading={setIndicatorLoading}/>}
        {idicatorLoading && <IndicatorLoading />}
        <div className="container">
          {!showForm &&<AddButton setShowForm={setShowForm}/>}
          {showForm && <Form />}
          <Filter />
          <Table dataForTable={dataForTable}/>
        </div>
    </main>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));