export const INC = 'INC';
export const REST = 'REST';
export const SET_NEW_START_VALUE = 'SET_NEW_START_VALUE';
export const SET_NEW_MAX_VALUE = 'SET_NEW_MAX_VALUE';
export const UPDATE_NEW_START_VALUE = 'UPDATE_NEW_START_VALUE';
export const UPDATE_NEW_MAX_VALUE = 'UPDATE_NEW_MAX_VALUE';
export const SET = 'SET';

export type incACType = {
    type: typeof INC
}

export type restACType = {
    type: typeof REST
}

export type SetNewStartValuesACType = {
    type: typeof SET_NEW_START_VALUE
    newStartValue: number
}
export type SetNewMaxValuesACType = {
    type: typeof SET_NEW_MAX_VALUE
    newMaxValue: number
}
export type CounterReducerActionType = incACType | restACType | SetNewStartValuesACType | SetNewMaxValuesACType

export type initialStateType = typeof initialState

let initialState = {
    startValue: 0,
    maxValue: 5,
    newStartValue: Number.NaN,
    newMaxValue: Number.NaN
}

export const counterReducer = (state: initialStateType = initialState, action: CounterReducerActionType): initialStateType => {
    switch (action.type) {
        case INC:
            return {
                ...state, startValue: state.newStartValue + 1
            }
        case REST:
            return {
                ...state, startValue: state.newStartValue
            }
        case SET_NEW_START_VALUE:
            return {
                ...state,
                newStartValue: action.newStartValue
            }
        case SET_NEW_MAX_VALUE:
            return {
                ...state,
                newMaxValue: action.newMaxValue
            }
        default:
            return state
    }
}
export const incAC = (): incACType => {
    return {
        type: INC,
     } as const
}

export const restAC = (): restACType => {
    return {
        type: REST,
     } as const
}

export const setNewStartValueAC = (newStartValue: number): SetNewStartValuesACType => ({
    type: SET_NEW_START_VALUE,
    newStartValue: newStartValue
})

export const setNewMaxValueAC = (newMaxValue: number): SetNewMaxValuesACType => ({
    type: SET_NEW_MAX_VALUE,
    newMaxValue: newMaxValue
})
