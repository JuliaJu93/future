import React from 'react';

function FindButton({onClickFilter}) {
  return (
    <button onClick={onClickFilter}>Найти</button>
  );
}

export default FindButton;