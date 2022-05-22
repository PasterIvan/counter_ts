import React, {ChangeEvent} from 'react';
import Button from "./Button";
import style from './Condition.module.css'
import {CounterType, updateNewStartValueAC} from "../bll/counterReducer";

export const Сondition: React.FC<CounterType> = ({startValue, maxValue}) => {

    const onNewStartValue = (e: ChangeEvent<HTMLInputElement>) => {
       let newStartValue =  Number(e.currentTarget.value)
        updateNewStartValueAC(newStartValue)
    }

    const onNewMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
       let newMaxValue =  Number(e.currentTarget.value)
        updateNewStartValueAC(newMaxValue)
    }

    return (
        <div className={style.counterBox}>
            <div className={style.counter}>
                <div className={style.conditionText}>
                    <p>startValue:</p>
                    <p>maxValue:</p>
                </div>
                <div className={style.conditionInputs}>
                    <div className={style.conditionInputsStartValue}>
                        <input type="number" onChange={onNewStartValue}/>
                    </div>
                    <div className={style.conditionInputsMaxValue}>
                        <input type="number" onChange={onNewMaxValue}/>
                    </div>
                </div>
            </div>
            <div className={style.buttons}>
                <div className={style.buttonSet}>
                    <Button onClick={()=>{console.log('wefcs')}} >set</Button>
                </div>
            </div>
        </div>
    )
}