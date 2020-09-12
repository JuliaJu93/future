import React from 'react';

function TableBody({ filteredData }) {
  let users;
  if (filteredData) {
    users = filteredData.map((user) => (
      <tr key={user.id+user.firstName}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    ));
  }
return <tbody>{users}</tbody>;
}

export default TableBody;
