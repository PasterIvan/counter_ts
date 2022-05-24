import React, {ChangeEvent} from 'react';
import Button from "./Button";
import style from './Condition.module.css'
import {СonditionPropsType} from "./СonditionContainer";


export const Сondition: React.FC<СonditionPropsType> = ({setNewStartValue,setNewMaxValue, setNewValue}) => {

    const onNewStartValue = (e: ChangeEvent<HTMLInputElement>) => {
       let startValue =  Number(e.currentTarget.value)
        setNewStartValue(startValue)
    }

    const onNewMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
       let maxValue =  Number(e.currentTarget.value)
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