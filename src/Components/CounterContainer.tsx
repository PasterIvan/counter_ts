import React, {Dispatch} from "react";
import {Counter} from "./Counter";
import {StoreType} from "../bll/ReduxStore";
import {connect} from "react-redux";
import {incAC, restAC, setNewMaxValueAC, setNewStartValueAC} from "../bll/counterReducer";

export type mapStateToPropsType = {
    startValue: number
    maxValue: number
    newStartValue: number
    newMaxValue: number
}

export type mapDispatchToPropsType = {
    incHandler: () => void
    resetHandler: () => void
    setNewStartValue: (newStartValue: number) => void
    setNewMaxValue: (newMaxValue: number) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        newStartValue: state.counter.newStartValue,
        newMaxValue: state.counter.newMaxValue
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
        setNewStartValue: (newStartValue) => {
            dispatch(setNewStartValueAC(newStartValue))
        },
        setNewMaxValue: (newMaxValue) => {
            dispatch(setNewMaxValueAC(newMaxValue))
        }
    }
}
export default connect<mapStateToPropsType,mapDispatchToPropsType,{},StoreType>
(mapStateToProps,mapDispatchToProps )(Counter)