import React from 'react';

export const TodoListItem = ({ todo, i, handleDelete, handleToogle }) => {
  return (
    <li className='list-group-item'>
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => handleToogle(todo.id)}
      >
        {i + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelete(todo.id)} className='btn btn-danger'>
        Borrar
      </button>
    </li>
  );
};
