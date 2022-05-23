import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './Components/Counter';
import {Сondition} from './Components/Сondition';
import style from './App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "./bll/ReduxStore";

function App() {

    // const startValue = useSelector<StoreType, number>(state => state.counter.startValue)
    // const maxValue = useSelector<StoreType, number>(state => state.counter.maxValue)
    // const newStartValue = useSelector<StoreType, number>(state => state.counter.newStartValue)
    // const newMaxValue = useSelector<StoreType, number>(state => state.counter.maxValue)
    // const incHandler = useDispatch()
    // const resetHandler = useDispatch()
    // const setNewStartValue = useDispatch()
    // const setNewMaxValue = useDispatch()


    return (
        <div className={style.App}>
            <Сondition
                // startValue={startValue}
                // newStartValue={newStartValue}
                // maxValue={maxValue}
                // newMaxValue={newMaxValue}
                // incHandler={incHandler}
                // resetHandler={resetHandler}
                // setNewStartValue={setNewStartValue}
                // setNewMaxValue={setNewMaxValue}
            />
            <Counter
                // startValue={startValue}
                // newStartValue={newStartValue}
                // maxValue={maxValue}
                // newMaxValue={newMaxValue}
                // incHandler={incHandler}
                // resetHandler={resetHandler}
                // setNewStartValue={setNewStartValue}
                // setNewMaxValue={setNewMaxValue}
            />
        </div>
    );
}

export default App;
