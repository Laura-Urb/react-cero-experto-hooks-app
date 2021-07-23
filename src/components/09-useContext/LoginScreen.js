import React, { useContext } from 'react';
import { UserContext } from './UserCotext';

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() =>
          setUser({ id: 1, name: 'Juan', email: 'jperez@gmail.com' })
        }
      >
        Login
      </button>
    </div>
  );
};
