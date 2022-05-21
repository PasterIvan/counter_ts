import React, {useState} from 'react';
import Button from "./Button";
import style from './Counter.module.css'

type CheckPropsType = {
    startValue: number
    maxValue: number
}

export const Counter: React.FC<CheckPropsType> = ({startValue, maxValue }) => {

    const [count, setCount] = useState<number>(startValue)

    const incHandler = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const resetHandler = () => {
        setCount(startValue)
    }

    const styleCount = (count === maxValue ? style.checkTextRed : style.checkText)

    return (
        <div className={style.checkBox}>
            <div className={style.check}>
                <div className={styleCount}>{count}</div>
            </div>
            <div className={style.buttons}>
                <div className={style.buttonInc}>
                    <Button onClick={incHandler} disabled={count === maxValue}>inc</Button>
                </div>
                <div className={style.buttonRest}>
                    <Button onClick={resetHandler} disabled={count === startValue}>rest</Button>
                </div>
            </div>
        </div>
    )
}