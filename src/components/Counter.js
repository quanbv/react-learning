import React, { useRef } from 'react';

const Counter = () => {
  let ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' time!');
  }

  return (
    <button onClick={handleClick}>Click me!</button>
  );
}

export default Counter;
