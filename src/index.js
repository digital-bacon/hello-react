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
      <>
      { name.length === 0 && <h1>Tell us your name...</h1> }
      { name.length === 1 && <h1>You're named after a letter?</h1> }
      { name.length > 1 && <h1>Hello {name}</h1> }
      { name.length === 1 && <p>Either you're being dishonest, or your parents are really eccentric.</p> }
      { name.length === 2 && <p>Whoooo two letters. Sliding closer to normal now! Can you tell me more?</p> }
      { name.length === 3 && <p>😀</p> }
      </>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
