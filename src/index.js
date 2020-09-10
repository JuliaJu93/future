import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import DataSelection from './components/data_selection/data_selection.js';
import AddButton from './components/add_button/add_button.js';
import Filter from './components/filter/filter.js';

function Main() {
  return (
    <main>
        <DataSelection />
        <AddButton />
        <Filter />
    </main>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));