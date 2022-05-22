import React, {Dispatch} from "react";
import {Counter, CounterPropsType} from "./Counter";
import {StoreType} from "../bll/ReduxStore";
import {connect} from "react-redux";
import {incAC, restAC} from "../bll/counterReducer";

export type mapStateToPropsType = {
    startValue: number
    newStartValue: number
    newMaxValue: number
}

export type mapDispatchToPropsType = {
    incHandler: (/*startValue: number*/) => void
    resetHandler: (/*startValue: number*/) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        startValue: state.counter.startValue,
        newStartValue: state.counter.newStartValue,
        newMaxValue: state.counter.newMaxValue
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): mapDispatchToPropsType => {
    return {
        incHandler: (/*newStartValue*/) => {
            dispatch(incAC(/*newStartValue*/))
        },
        resetHandler: (/*newStartValue*/) => {
            dispatch(restAC(/*newStartValue*/))
        }
    }
}
export default connect<mapStateToPropsType,mapDispatchToPropsType,{},StoreType>
(mapStateToProps,mapDispatchToProps )(Counter)