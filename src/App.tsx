import React from 'react';
import './App.css';
import style from './App.module.css'
import СonditionContainer from './Components/СonditionContainer';
import CounterContainer from "./Components/CounterContainer";

const App = () =>{

    return (
        <div className={style.App}>
            <СonditionContainer />
            <CounterContainer />
        </div>
    );
}

export default App;
