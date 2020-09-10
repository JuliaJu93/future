import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import DataSelection from './components/data_selection/data_selection.js';

function Main() {
  return (
    <main>
        <DataSelection />
    </main>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));