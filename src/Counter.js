import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='counter'>
      <button className='btn green' onClick={increment}>
        +
      </button>{' '}
      {counter >= 0 ? <h1>{counter}</h1> : <h1>{setCounter(0)}</h1>}
      <button className='btn red' onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
