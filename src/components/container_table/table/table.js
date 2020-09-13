import React, { useState } from 'react';

import TableHead from './table_head';
import TableBody from './table_body';

function Table({ filteredData, dataForTable, setDataForTable, enteredData}) {
  const [directionArrowFirstName, setDirectionArrowFirstName] = useState(false);
  const [directionArrowLastName, setDirectionArrowLastName] = useState(false);

  const changeSortingFirstName = () => {
    if (dataForTable) {
      setDirectionArrowFirstName((prevValue) => !prevValue);
      setDataForTable((prevValue) => {
        if (directionArrowFirstName) {
          prevValue.sort(function (a, b) {
            if (a.firstName < b.firstName) {
              return 1;
            }
            if (a.firstName > b.firstName) {
              return -1;
            }
            return 0;
          });
        } else {
          prevValue.sort(function (a, b) {
            if (a.firstName > b.firstName) {
              return 1;
            }
            if (a.firstName < b.firstName) {
              return -1;
            }
            return 0;
          });
        }
        return prevValue;
      });
    }
  };

  const changeSortingLastName = () => {
    if (dataForTable) {
      setDirectionArrowLastName((prevValue) => !prevValue);
      setDataForTable((prevValue) => {
        if (directionArrowLastName) {
          prevValue.sort(function (a, b) {
            if (a.lastName < b.lastName) {
              return 1;
            }
            if (a.lastName > b.lastName) {
              return -1;
            }
            return 0;
          });
        } else {
          prevValue.sort(function (a, b) {
            if (a.lastName > b.lastName) {
              return 1;
            }
            if (a.lastName < b.lastName) {
              return -1;
            }
            return 0;
          });
        }
        return prevValue;
      });
    }
  };

  return (
    <table>
      <TableHead
        onClickFirstName={changeSortingFirstName}
        onClickLastName={changeSortingLastName}
        directionArrowFirstName={directionArrowFirstName}
        directionArrowLastName={directionArrowLastName}
      />
      <TableBody filteredData={filteredData} enteredData={enteredData}/>
    </table>
  );
}

export default Table;
