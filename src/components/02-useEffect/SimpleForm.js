import React, { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {
  const [state, setstate] = useState({
    name: '',
    email: '',
  });
  const { name, email } = state;
  useEffect(() => {}, []);
  useEffect(() => {}, [state]);
  const handleInputChange = ({ target }) => {
    setstate({ ...state, [target.name]: target.value });
  };

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <form action=''>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='email'
            className='form-control'
            placeholder='Tu email'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
          />
        </div>
        {name === '123' && <Message />}
      </form>
    </>
  );
};
