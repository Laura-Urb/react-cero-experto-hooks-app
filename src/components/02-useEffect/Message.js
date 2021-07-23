import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      const coors = { x: e.x, y: e.y };
      setCoors(coors);
    };
    window.addEventListener('mousemove', mouseMove);
    console.log('Montado');
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      console.log('Desmontado');
    };
  }, []);
  return (
    <>
      <h3>Mensaje</h3>
      <p>
        x: {coors.x} y:{coors.y}
      </p>
    </>
  );
};
