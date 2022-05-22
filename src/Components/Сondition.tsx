import React from 'react';
import Button from "./Button";
import style from './Condition.module.css'
import {CounterType, incAC, restAC} from "../bll/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../bll/ReduxStore";

export const Сondition: React.FC<CounterType> = ({startValue, maxValue}) => {

    const value = useSelector<StoreType, number>(state => state.counter.value)
    const dispatch = useDispatch()

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
                <div className={style.conditionText}>
                    <p>startValue:</p>
                    <p>maxValue:</p>
                </div>
                <div className={style.conditionInputs}>
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </div>
            <div className={style.buttons}>
                <div className={style.buttonSet}>
                    <Button onClick={incHandler} disabled={value === maxValue}>set</Button>
                </div>
            </div>
        </div>
    )
}