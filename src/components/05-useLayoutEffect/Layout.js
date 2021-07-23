import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
  const { state, increment } = useCounter(1);
  const [boxsize, setBoxsize] = useState(0);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const { author, quote } = !!data && data[0];
  // (!! la doble negacion convierte null en falso)

  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxsize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Multiple Custom Hooks</h1>
      <hr />
      <blockquote className='blockquote text-end'>
        <p className='mb-3' ref={pTag}>
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxsize, null, 3)}</pre>
      <button className='btn btn-primary' onClick={increment}>
        Siguiente Quote
      </button>
    </div>
  );
};
