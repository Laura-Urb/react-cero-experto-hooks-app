import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../01-useState/counter.css';

export const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const { author, quote } = !!data && data[0];
  // (!! la doble negacion convierte null en falso)

  return (
    <div>
      <h1>Multiple Custom Hooks</h1>
      <hr />
      {loading ? (
        <div className='alert alert-info text-center'>Loding...</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-3'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}
      <button className='btn btn-primary' onClick={increment}>
        Siguiente Quote
      </button>
    </div>
  );
};
