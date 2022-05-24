import React from 'react';
import Button from "./Button";
import style from './Counter.module.css'
import {mapDispatchToPropsType, mapStateToPropsType} from './CounterContainer';

export type CounterPropsType = mapStateToPropsType & mapDispatchToPropsType

export const Counter: React.FC<CounterPropsType> = ({value, startValue, maxValue, incHandler, resetHandler}) => {

    const styleCount = (value >= maxValue ? style.checkTextRed : style.checkText)

    return (
        <div>
            <div className={style.checkBox}>
                <div className={style.check}>
                    <div className={styleCount}>{value}</div>
                </div>
                <div className={style.buttons}>
                    <div className={style.buttonInc}>
                        <Button onClick={incHandler} disabled={value >= maxValue}>inc</Button>
                    </div>
                    <div className={style.buttonRest}>
                        <Button onClick={resetHandler} disabled={value === startValue}>rest</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}