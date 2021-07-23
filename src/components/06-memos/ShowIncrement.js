import React, { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('Me volví a crear');
  return (
    <div>
      <button
        className='btn btn-primary'
        onClick={() => {
          increment(5);
        }}
      >
        +1
      </button>
    </div>
  );
});
