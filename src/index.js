import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import DataSelection from './components/data_selection/data_selection.js';
import AddButton from './components/add_button/add_button.js';
import Form from './components/form/form.js';
import Filter from './components/filter/filter.js';
import Table from './components/table/table.js';

function Main() {
  return (
    <main>
        <DataSelection />
        <div>
          <AddButton />
          <Form />
          <Filter />
          <Table />
        </div>
    </main>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));