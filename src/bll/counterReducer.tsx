export const INC = 'INC';
export const REST = 'REST';
export const SET_NEW_START_VALUE = 'SET_NEW_START_VALUE';
export const SET_NEW_MAX_VALUE = 'SET_NEW_MAX_VALUE';
export const SET_NEW_VALUE = 'SET_NEW_VALUE';

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
export type SetNewValuesACType = {
    type: typeof SET_NEW_VALUE
}
export type CounterReducerActionType =
    incACType
    | restACType
    | SetNewStartValuesACType
    | SetNewMaxValuesACType
    | SetNewValuesACType

export type initialStateType = typeof initialState

let initialState = {
    value: 0,
    startValue: Number.NaN,
    maxValue: Number.NaN
}

export const counterReducer = (state: initialStateType = initialState, action: CounterReducerActionType): initialStateType => {
    switch (action.type) {
        case INC:
            return {
                ...state, value: state.startValue + 1
            }
        case REST:
            return {
                ...state, value: state.startValue
            }
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
                value: action.
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
