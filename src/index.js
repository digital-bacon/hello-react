import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const { reset } = props;
  const handleClick = () => reset();

  return (
    <button onClick={handleClick} className='Button'>
      {props.children}
    </button>
  )
};

const Application = () => {  

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button reset={reset}>I am a button</Button>
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
