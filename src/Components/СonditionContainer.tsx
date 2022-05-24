import {StateType} from "../bll/ReduxStore";
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
    setNewValue: () => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        value: state.counter.value,
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue
    }
}

export type СonditionPropsType = mapStateToPropsType & mapDispatchToPropsType

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
export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, StateType>
(mapStateToProps, mapDispatchToProps)(Сondition)