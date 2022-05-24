import {StateType} from "./ReduxStore";

export const SET_NEW_START_VALUE = 'SET_NEW_START_VALUE';
export const SET_NEW_MAX_VALUE = 'SET_NEW_MAX_VALUE';
export const SET_NEW_VALUE = 'SET_NEW_VALUE';

export type SetNewStartValuesACType = {
    type: typeof SET_NEW_START_VALUE
    newStartValue: number
}
export type SetNewMaxValuesACType = {
    type: typeof SET_NEW_MAX_VALUE
    newMaxValue: number
}
export type SetNewValuesACType = {
    type: typeof SET_NEW_VALUE
}

export type ConditionReducerActionType = SetNewStartValuesACType | SetNewMaxValuesACType | SetNewValuesACType

export const conditionReducer = (action: ConditionReducerActionType) => {
    switch (action.type) {
        case SET_NEW_START_VALUE:
            return {
                ...state,
                startValue: action.newStartValue
            }
        case SET_NEW_MAX_VALUE:
            return {
                ...state,
                maxValue: action.newMaxValue
            }
        case SET_NEW_VALUE:
            return {
                ...state,
                value: state.counter.startValue
            }
        default:
            return state
    }
}

export const setNewStartValueAC = (startValue: number): SetNewStartValuesACType => {
    return {
        type: SET_NEW_START_VALUE,
        newStartValue: startValue
    } as const
}

export const setNewMaxValueAC = (startValue: number): SetNewMaxValuesACType => {
    return {
        type: SET_NEW_MAX_VALUE,
        newMaxValue: startValue
    } as const
}

export const setNewValueAC = (): SetNewValuesACType => {
    return {
        type: SET_NEW_VALUE,
    } as const
}

