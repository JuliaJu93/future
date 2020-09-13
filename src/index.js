import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import CommonContainer from './components/common_container/common_container';

function Main() {
  return (
    <CommonContainer />
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));