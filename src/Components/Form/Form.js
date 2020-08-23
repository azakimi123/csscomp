import React, { useState } from 'react';
import './Form.scss';


function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = () => {
    alert(`Hello ${firstName} ${lastName}`)
  }

  return(
    <div className='form-container'>
      <form className='form-box'>
        <p>Please type your name</p>
        <input className='name-input' value={firstName} placeholder='first name' onChange={e => setFirstName(e.target.value)}/>
        <input className='name-input' value={lastName} placeholder='last name' onChange={e => setLastName(e.target.value)}/>
        {firstName && lastName
        ? <button className='submit-button' onClick={handleSubmit}>Submit</button>
        : <button className='submit-button' disabled>Submit</button>
        }
      </form>
    </div>
  )
}

export default Form;