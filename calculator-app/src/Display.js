// src/Display.js
import React from 'react';
import './Display.css';

const Display = ({ input, output }) => {
  return (
    <div className="display">
      <div className="input">{input}</div>
      <div className="output">{output}</div>
    </div>
  );
};

export default Display;
