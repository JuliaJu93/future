import React from 'react';

import FindButton from '../find_button/find_button.js';

function Filter({setSearchParameter, searchParameter, setFilteredData, dataForTable}) {
  function handleChange(event) {
    const value = event.target.value;
    setSearchParameter(value.toLowerCase());
  }

  const filterData = () => {
    if (dataForTable) {
      let filter = dataForTable.filter(
        (data) =>
          String(data.id).indexOf(searchParameter, 0) !== -1 ||
          data.firstName.toLowerCase().indexOf(searchParameter, 0) !== -1 ||
          data.lastName.toLowerCase().indexOf(searchParameter, 0) !== -1 ||
          data.email.toLowerCase().indexOf(searchParameter, 0) !== -1 ||
          data.phone.indexOf(searchParameter, 0) !== -1
      );
      setFilteredData(filter);
    }
  }

  return (
    <div>
        <input onChange ={handleChange}></input>
        <FindButton onClickFilter = {filterData}/>
    </div>
  );
}

export default Filter;