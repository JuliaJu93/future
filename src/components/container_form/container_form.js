import React, {useState} from 'react';

import AddButton from './add_button/add_button.js';
import Form from './form/form.js';

import './container_form.css';

function ContainerForm({setEnteredData}) {
    const [form, setForm] = useState(false);
    const showForm = () => {
        setForm(true);
    } 
  return (
      <div className="form">
          {!form && <AddButton onClickShowForm={showForm}/>}
          {form && <Form setEnteredData={setEnteredData}/>}
      </div>
  );
}

export default ContainerForm;
