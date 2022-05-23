import {StoreType} from "../bll/ReduxStore";
import {Dispatch} from "react";
import { Сondition } from "./Сondition";
import {connect} from "react-redux";
import {setNewMaxValueAC, setNewStartValueAC} from "../bll/counterReducer";


export type mapStateToPropsType = {
    newStartValue: number
    newMaxValue: number
}

export type mapDispatchToPropsType = {
    setNewStartValue: (newStartValue: number) => void
    setNewMaxValue: (newMaxValue: number) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        newStartValue: state.counter.newStartValue,
        newMaxValue: state.counter.newMaxValue
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>): mapDispatchToPropsType => {
    return {
        setNewStartValue: (newStartValue) => {
            dispatch(setNewStartValueAC(newStartValue))
        },
        setNewMaxValue: (newMaxValue) => {
            dispatch(setNewMaxValueAC(newMaxValue))
        }
    }
}
export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, StoreType>
(mapStateToProps, mapDispatchToProps)(Сondition)