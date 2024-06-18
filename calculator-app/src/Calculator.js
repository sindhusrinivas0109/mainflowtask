// src/Calculator.js
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setOutput(eval(input)); // Using eval for simplicity, consider safer alternatives
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h1 className="calculator-heading">Simple Calculator</h1>
      <Display input={input} output={output} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
