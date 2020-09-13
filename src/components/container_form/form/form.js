import React, { useState } from 'react';

function Form({ setEnteredData }) {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showButtonAdd, setShowButtonAdd] = useState(false);

  const addInTable = () => {
    setEnteredData((prevValue) => {
      prevValue.push({
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      });
      return prevValue;
    });
  };

  function handleChange(event) {
    let value = event.target.value;
    switch (event.target.name) {
      case 'Id':
        setId(value);
        break;
      case 'FirstName':
        setFirstName(value);
        break;
      case 'LastName':
        setLastName(value);
        break;
      case 'Email':
        setEmail(value);
        break;
      case 'Phone':
        setPhone(value);
        break;
    }
    if (id && firstName && lastName && email && phone) {
      setShowButtonAdd(true);
    } else {
      setShowButtonAdd(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    addInTable();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id"> id: </label>
        <input type="text" id="id" name="Id" required onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="firstName"> firts name: </label>
        <input
          type="text"
          id="firstName"
          name="FirstName"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName"> last name: </label>
        <input
          type="text"
          id="lastName"
          name="LastName"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email"> email: </label>
        <input
          type="email"
          id="email"
          name="Email"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone"> phone: </label>
        <input
          type="phone"
          id="phone"
          name="Phone"
          required
          onChange={handleChange}
        />
      </div>
      {showButtonAdd && (
        <div>
          <input type="submit" value="Добавить в таблицу" />
        </div>
      )}
    </form>
  );
}

export default Form;
