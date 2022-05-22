import React from 'react';
import Button from "./Button";
import style from './Counter.module.css'
import {mapDispatchToPropsType, mapStateToPropsType} from './CounterContainer';

export type CounterPropsType = mapStateToPropsType & mapDispatchToPropsType

export const Counter: React.FC<CounterPropsType> = ({startValue, newStartValue: newStartValue, newMaxValue, incHandler, resetHandler}) => {

    const styleCount = (startValue === newMaxValue ? style.checkTextRed : style.checkText)

    return (
        <div className={style.checkBox}>
            <div className={style.check}>
                <div className={styleCount}>{startValue}</div>
            </div>
            <div className={style.buttons}>
                <div className={style.buttonInc}>
                    <Button onClick={incHandler} disabled={startValue === newMaxValue}>inc</Button>
                </div>
                <div className={style.buttonRest}>
                    <Button onClick={resetHandler} disabled={startValue === startValue}>rest</Button>
                </div>
            </div>
        </div>
    )
}