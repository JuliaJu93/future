import React, { useState } from 'react';

import './container_table.css';

import Filter from './filter/filter.js';
import Table from './table/table.js';
import SelectedUser from './selected_user/selected_user.js';

function ContainerTable({ dataForTable, filteredData, setFilteredData}) {
  const [searchParameter, setSearchParameter] = useState('');
  const [userData, setUserData] = useState(null);
  const gettingUserData = (e) => {
    const id = + e.target.id;
    let user;
    for (let i = 0; i < dataForTable.length; i++) {
      if (dataForTable[i].id === id) {
        user = dataForTable[i];
        break;
      }
    }
    setUserData(user);
  }
  return (
    <div className="table">
      <Filter setSearchParameter={setSearchParameter} searchParameter = {searchParameter} setFilteredData={setFilteredData} dataForTable={dataForTable}/>
      <Table filteredData={filteredData} setFilteredData={setFilteredData} onClickGettingId={gettingUserData} />
      {userData && <SelectedUser userData={userData}/>}
    </div>
  );
}

export default ContainerTable;