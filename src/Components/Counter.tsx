import React, {ChangeEvent} from 'react';
import Button from "./Button";
import style from './Counter.module.css'
import {mapDispatchToPropsType, mapStateToPropsType} from './CounterContainer';

export type CounterPropsType = mapStateToPropsType & mapDispatchToPropsType

export const Counter: React.FC<CounterPropsType> = ({value, startValue, maxValue, incHandler, resetHandler, setNewMaxValue, setNewStartValue, setNewValue}) => {

    const onNewStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue =  Number(e.currentTarget.value)
        setNewStartValue(startValue)
    }

    const onNewMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue =  Number(e.currentTarget.value)
        setNewMaxValue(maxValue)
    }

    const styleCount = (value >= maxValue ? style.checkTextRed : style.checkText)

    return (
        <div>
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
                        <Button onClick={setNewValue}>set</Button>
                    </div>
                </div>
            </div>
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