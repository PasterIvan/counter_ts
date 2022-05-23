import React from 'react';
import './App.css';
import style from './App.module.css'
import CounterContainer from "./Components/CounterContainer";
import СonditionContainer from './Components/СonditionContainer';

const App = () =>{

    return (
        <div className={style.App}>
            {/*<СonditionContainer />*/}
            <CounterContainer />
        </div>
    );
}

export default App;
