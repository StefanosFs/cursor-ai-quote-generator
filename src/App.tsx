import React, { useState } from 'react';
import './App.css';
import QuoteGenerator from './components/QuoteGenerator';

const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #2af598 0%, #009efd 100%)',
  'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
  'linear-gradient(135deg, #5f72bd 0%, #9b23ea 100%)',
  'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
  'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'
];

function App() {
  const [currentGradient, setCurrentGradient] = useState(gradients[0]);

  const changeBackground = () => {
    const newGradient = gradients[Math.floor(Math.random() * gradients.length)];
    setCurrentGradient(newGradient);
  };

  return (
    <div className="App" style={{ background: currentGradient }}>
      <QuoteGenerator onNewQuote={changeBackground} />
    </div>
  );
}

export default App; 