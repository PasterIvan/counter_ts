import {Dispatch} from "react";
import {Counter} from "./Counter";
import {StateType} from "../bll/ReduxStore";
import {connect} from "react-redux";
import {incAC, restAC, setNewMaxValueAC, setNewStartValueAC, setNewValueAC} from "../bll/counterReducer";

export type mapStateToPropsType = {
    value: number
    startValue: number
    maxValue: number
}

export type mapDispatchToPropsType = {
    incHandler: () => void
    resetHandler: () => void
    setNewStartValue: (startValue: number) => void
    setNewMaxValue: (maxValue: number) => void
    setNewValue: () => void
}

const mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        value: state.counter.value,
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): mapDispatchToPropsType => {
    return {
        incHandler: () => {
            dispatch(incAC())
        },
        resetHandler: () => {
            dispatch(restAC())
        },
        setNewStartValue: (startValue) => {
            dispatch(setNewStartValueAC(startValue))
        },
        setNewMaxValue: (maxValue) => {
            dispatch(setNewMaxValueAC(maxValue))
        },
        setNewValue: () => {
            dispatch(setNewValueAC())
        }
    }
}

export default connect<mapStateToPropsType,mapDispatchToPropsType,{},StateType>
(mapStateToProps,mapDispatchToProps )(Counter)