import React from 'react';

import './form.css'

function Form() {
  return (
    <form className="addForm">
        <div>
          <label htmlFor="id"> id: </label>
          <input
            type="text"
            id="id"
            name="id"
          />
        </div>
        <div>
          <label htmlFor="firstName"> firts name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName"> last name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
        <div>
          <label htmlFor="email"> email: </label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="phone"> phone: </label>
          <input
            type="phone"
            id="phone"
            name="phone"
          />
        </div>
        <div>
          <input type="submit" value="Добавить в таблицу" />
        </div>
      </form>
    );
}

export default Form;