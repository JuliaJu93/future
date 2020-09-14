import React from 'react';

function TableBody({ filteredData, onClickGettingId }) {
  let users;
  if (filteredData) {
    users = filteredData.map((user) => (
      <tr onClick={onClickGettingId} key={user.id + user.firstName}>
        <td id={user.id}>{user.id}</td>
        <td id={user.id}>{user.firstName}</td>
        <td id={user.id}>{user.lastName}</td>
        <td id={user.id}>{user.email}</td>
        <td id={user.id}>{user.phone}</td>
      </tr>
    ));
  }
  return <tbody>{users}</tbody>;
}

export default TableBody;
