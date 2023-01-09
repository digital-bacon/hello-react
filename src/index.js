import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Input = (props) => {
  const { value, handleInput } = props;

  return (
    <input onChange={handleInput} value={value} className='Input' />
  )
};

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
  const [ name, setName ] = useState('');
  const onInput = (event) => setName(event.target.value);

  const reset = () => {
    setName('');
  };

  return (
    <main>
      <Input value={name} handleInput={onInput} />
      <Button reset={reset}>I am a button</Button>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
