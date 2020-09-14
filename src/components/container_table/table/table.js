import React, { useState } from 'react';

import TableHead from './table_head';
import TableBody from './table_body';

function Table({ filteredData, setFilteredData, onClickGettingId}) {
  const [directionArrowFirstName, setDirectionArrowFirstName] = useState(false);
  const [directionArrowLastName, setDirectionArrowLastName] = useState(false);

  const changeSortingFirstName = () => {
      setDirectionArrowFirstName((prevValue) => !prevValue);
      setFilteredData((prevValue) => {
        const newValue = [...prevValue];
        if (directionArrowFirstName) {
          newValue.sort(function (a, b) {
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
              return 1;
            }
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
              return -1;
            }
            return 0;
          });
        } else {
          newValue.sort(function (a, b) {
            if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
              return 1;
            }
            if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
              return -1;
            }
            return 0;
          });
        }
        return newValue;
      });
  };

  const changeSortingLastName = () => {
      setDirectionArrowLastName((prevValue) => !prevValue);
      setFilteredData((prevValue) => {
        const newValue = [...prevValue];
        if (directionArrowLastName) {
          newValue.sort(function (a, b) {
            if (a.lastName < b.lastName) {
              return 1;
            }
            if (a.lastName > b.lastName) {
              return -1;
            }
            return 0;
          });
        } else {
          newValue.sort(function (a, b) {
            if (a.lastName > b.lastName) {
              return 1;
            }
            if (a.lastName < b.lastName) {
              return -1;
            }
            return 0;
          });
        }
        return newValue;
      });
  };

  return (
    <table>
      <TableHead
        onClickFirstName={changeSortingFirstName}
        onClickLastName={changeSortingLastName}
        directionArrowFirstName={directionArrowFirstName}
        directionArrowLastName={directionArrowLastName}
      />
      <TableBody filteredData={filteredData} onClickGettingId={onClickGettingId}/>
    </table>
  );
}

export default Table;