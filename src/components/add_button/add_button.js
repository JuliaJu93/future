import React from 'react';

function AddButton({setShowForm}) {
  function showForm () {
    setShowForm(true);
  }
  return (
    <button onClick = {showForm}>Добавить данные в таблицу</button>
  );
}

export default AddButton;