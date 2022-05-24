import React from 'react';
import './App.css';
import style from './App.module.css'
import CounterContainer from "./Components/CounterContainer";
import ConditionContainer from './Components/СonditionContainer';

const App = () =>{

    return (
        <div className={style.App}>
            <ConditionContainer />
            <CounterContainer />
        </div>
    );
}

export default App;
