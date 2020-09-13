import React from 'react';

function AddButton({onClickShowForm}) {
  return (
    <button onClick = {onClickShowForm}>Добавить данные в таблицу</button>
  );
}

export default AddButton;