import React, {useState} from 'react';
import Button from "./Button";
import style from './Counter.module.css'
import {CounterType, incAC, restAC} from "../bll/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../bll/ReduxStore";

export const Counter: React.FC<CounterType> = ({startValue, maxValue }) => {

    const value = useSelector<StoreType, number>(state => state.counter.value)
    const dispatch= useDispatch()

    const incHandler = () => {
        dispatch(incAC())
     }

    const resetHandler = () => {
        dispatch(restAC())
    }

    const styleCount = (value === maxValue ? style.checkTextRed : style.checkText)

    return (
        <div className={style.checkBox}>
            <div className={style.check}>
                <div className={styleCount}>{value}</div>
            </div>
            <div className={style.buttons}>
                <div className={style.buttonInc}>
                    <Button onClick={incHandler}  >inc</Button>
                </div>
                <div className={style.buttonRest}>
                    <Button onClick={resetHandler} >rest</Button>
                </div>
            </div>
        </div>
    )
}