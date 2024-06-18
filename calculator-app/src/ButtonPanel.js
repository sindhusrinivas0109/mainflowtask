// src/ButtonPanel.js
import React from 'react';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = ({ onButtonClick }) => {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  const isOperator = (btn) => ['/', '*', '-', '+', '='].includes(btn);

  return (
    <div className="button-panel">
      {buttons.map((btn, index) => (
        <Button 
          key={index} 
          value={btn} 
          onClick={onButtonClick} 
          className={isOperator(btn) ? 'operator-button' : ''}
        />
      ))}
    </div>
  );
};

export default ButtonPanel;
