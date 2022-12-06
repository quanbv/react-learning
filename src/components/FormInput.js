import React, { useRef } from 'react';

const FormInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef}/>
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}

export default FormInput;
