import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Incorrect way to apparoach ----> count += 1;
    //Correct way to do increment is as below
    setCount(count + 1)
  };

  const decrement = () => {
    // Incorrect way to apparoach ----> count -= 1;
    //Correct way to do increment is as below
    setCount(count - 1)
  };

  return (
    //BEM naming convention
    <div className="app">
      <h1> Welcome to my Counter App</h1>
      <p>The count is: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
