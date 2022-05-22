import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './Components/Counter';
import {Сondition} from './Components/Сondition';
import style from './App.module.css'

function App() {
    return (
        <div className={style.App}>
            <Сondition startValue={0}
                       maxValue={6}/>
            <Counter startValue={0}
                     maxValue={5}/>
        </div>
    );
}

export default App;
