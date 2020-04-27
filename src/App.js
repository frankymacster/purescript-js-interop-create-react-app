import React from 'react';
import './App.css';
const { Succ, Pred } = require('./output/Main/index')

function App({ state, dispatch }) {
  return (
    <div className="App">
      <button onClick={dispatch(Pred.value)}>-</button>
      {state}
      <button onClick={dispatch(Succ.value)}>+</button>
    </div>
  );
}

export default App;
