import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../01-useState/counter.css';

export const MemoHook = () => {
  const { state, increment } = useCounter(500);
  const [show, setShow] = useState(false);

  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

  return (
    <div>
      <h1>MemoHooks</h1>
      <h3>
        Counter: <small>{state} </small>
      </h3>
      <hr />
      <p>{memoProcesoPesado}</p>
      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>
      <button
        className='btn btn-primary ms-3'
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
