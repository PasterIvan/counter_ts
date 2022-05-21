import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';

function App() {
  return (
      <Counter startValue={0}
               maxValue={6}/>
  );
}

export default App;
