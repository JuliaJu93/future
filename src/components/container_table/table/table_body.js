import React from 'react';

function TableBody({ filteredData, enteredData }) {
  let users;
  let enteredUser;
  if (enteredData !== []) {
    enteredUser = enteredData.map((user) => (
      <tr key={user.id+user.firstName}>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    ));
  }
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
return <tbody>{enteredUser}{users}</tbody>;
}

export default TableBody;
