import React, { useState } from 'react';
import './App.css';
import memoji from '../public/memoji.png';

const App = () => {
  const [expression, setExpression] = useState('🙂');

  const expressions = ['😀', '😉', '😎', '🤓', '😄'];

  return (
    <div className="app">
      <h1>Sebastian John</h1>
      <h2>Business Strategist & Software Engineer</h2>
      <img
        src={memoji}
        alt="Memoji"
        className="memoji"
        onClick={() =>
          setExpression(expressions[Math.floor(Math.random() * expressions.length)])
        }
      />
      <p className="expression">{expression}</p>
      <p>Click the Memoji to change its mood!</p>
    </div>
  );
};

export default App;