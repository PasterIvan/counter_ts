import {StoreType} from "../bll/ReduxStore";
import {Dispatch} from "react";
import { Сondition } from "./Сondition";
import {connect} from "react-redux";
import {setNewMaxValueAC, setNewStartValueAC, setNewValueAC} from "../bll/counterReducer";


export type mapStateToPropsType = {
    value: number
    startValue: number
    maxValue: number
}

export type mapDispatchToPropsType = {
    setNewStartValue: (newStartValue: number) => void
    setNewMaxValue: (newMaxValue: number) => void
    setNewValue: (newStartValue: number, newMaxValue: number) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        value: state.counter.value,
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): mapDispatchToPropsType => {
    return {
        setNewStartValue: (newStartValue) => {
            dispatch(setNewStartValueAC(newStartValue))
        },
        setNewMaxValue: (newMaxValue) => {
            dispatch(setNewMaxValueAC(newMaxValue))
        },
        setNewValue: () => {
            dispatch(setNewValueAC())
        }
    }
}
export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, StoreType>
(mapStateToProps, mapDispatchToProps)(Сondition)