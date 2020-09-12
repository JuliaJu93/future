import React from 'react';

import FindButton from '../find_button/find_button.js';

function Filter({setSearchParameter, searchParameter, setFilteredData, dataForTable}) {
  function handleChange(event) {
    const value = event.target.value;
    setSearchParameter(value.toLowerCase());
  }

  return (
    <div>
        <input onChange ={handleChange}></input>
        <FindButton searchParameter = {searchParameter} setFilteredData={setFilteredData} dataForTable={dataForTable}/>
    </div>
  );
}

export default Filter;