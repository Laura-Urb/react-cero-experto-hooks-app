import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../01-useState/counter.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //cuando hay que mandar una función del padre y el componetne está memorizado
  const increment = useCallback(
    (incrementValue) => {
      setCounter((c) => c + incrementValue);
    },
    [setCounter]
  );

  useEffect(() => {
    // Acá también conviene usar useCallback
  }, [increment]);

  return (
    <div>
      <h1>useCallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
