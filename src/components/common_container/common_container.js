import React, { useState } from 'react';

import DataSelection from '../data_selection/data_selection.js';
import ContainerForm from '../container_form/container_form.js';
import ContainerTable from '../container_table/container_table.js';
import IndicatorLoading from '../indicator_loading/indicator_loading';

function CommonContainer() {
  const [dataForTable, setDataForTable] = useState([]);
  const [showDataSelection, setShowDataSelection] = useState(false);
  const [idicatorLoading, setIndicatorLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(null);

  const addInTable = (id, firstName, lastName, email, phone) => {
    setDataForTable((prevValue) => {
      const newValue = [...prevValue];
      newValue.unshift({
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      });
      return newValue;
    });
    setFilteredData(dataForTable);
  };

  return (
    <main>
      {!showDataSelection && !idicatorLoading && (
        <DataSelection
          setDataForTable={setDataForTable}
          setIndicatorLoading={setIndicatorLoading}
          setFilteredData={setFilteredData}
          setShowDataSelection={setShowDataSelection}
        />
      )}
      {idicatorLoading && <IndicatorLoading />}
      <div className="container">
        <ContainerForm onClickAddInTable={addInTable} />
        <ContainerTable
          dataForTable={dataForTable}
          setDataForTable={setDataForTable}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </div>
    </main>
  );
}

export default CommonContainer;