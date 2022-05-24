import React, {ChangeEvent} from 'react';
import Button from "./Button";
import style from './Condition.module.css'
import {ConditionPropsType} from "./СonditionContainer";

export const Condition: React.FC<ConditionPropsType> = ({setNewStartValue,setNewMaxValue, setNewValue, startValue, maxValue}) => {

    const onNewStartValue = (e: ChangeEvent<HTMLInputElement>) => {
       let startValue = e.currentTarget.valueAsNumber
        setNewStartValue(startValue)
    }

    const onNewMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
       let maxValue = e.currentTarget.valueAsNumber
        setNewMaxValue(maxValue)
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
                    <Button onClick={setNewValue} >set</Button>
                </div>
            </div>
        </div>
    )
}