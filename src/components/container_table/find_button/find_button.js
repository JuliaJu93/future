import React from 'react';

import {filterData} from '../filter_data'

function FindButton({searchParameter, setFilteredData, dataForTable}) {
  return (
    <button onClick={e => filterData(e, searchParameter, setFilteredData, dataForTable)}>Найти</button>
  );
}

export default FindButton;