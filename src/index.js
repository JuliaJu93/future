import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import DataSelection from './components/data_selection/data_selection.js';
import AddButton from './components/add_button/add_button.js';
import FindButton from './components/find_button/find_button.js';

function Main() {
  return (
    <main>
        <DataSelection />
        <AddButton />
        <FindButton />
    </main>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));