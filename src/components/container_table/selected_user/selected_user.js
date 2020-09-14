import React from 'react';

function SelectedUser({userData}) {
  return (
    <div className = "selectedUser">
      Выбран пользователь <b>{userData.firstName}</b>
      Описание:
      <textarea defaultValue={userData.description}></textarea>
      Адрес проживания: <b>{userData.address.streetAddress}</b>
      Город: <b>{userData.address.city}</b>
      Провинция/штат: <b>{userData.address.state}</b>
      Индекс: <b>{userData.address.zip}</b>
    </div>
  );
}

export default SelectedUser;
