export const INC = 'INC';
export const REST = 'REST';
export const SET_NEW_START_VALUE = 'SET_NEW_START_VALUE';
export const SET_NEW_MAX_VALUE = 'SET_NEW_MAX_VALUE';
export const SET_NEW_VALUE = 'SET_NEW_VALUE';

export type incActionType = ReturnType<typeof incAC>
export type restActionType = ReturnType<typeof restAC>
export type SetNewStartValuesActionType = ReturnType<typeof setNewStartValueAC>
export type SetNewMaxValuesActionType = ReturnType<typeof setNewMaxValueAC>
export type SetNewValuesActionType = ReturnType<typeof setNewValueAC>

export type CounterReducerActionType =
    incActionType
    | restActionType
    | SetNewStartValuesActionType
    | SetNewMaxValuesActionType
    | SetNewValuesActionType

export type initialStateType = typeof initialState

let initialState = {
    value: 0,
    startValue: 0,
    maxValue: 0
}

export const counterReducer = (state: initialStateType = initialState, action: CounterReducerActionType): initialStateType => {
    switch (action.type) {
        case INC:
            return {
                ...state, value: state.value + 1
            }
        case REST:
            return {
                ...state,
                value: state.startValue
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
                value: state.startValue,
                startValue: state.startValue,
                maxValue: state.maxValue
            }
        default:
            return state
    }
}

export const incAC = () => {
    return {type: INC} as const
}

export const restAC = () => {
    return {type: REST} as const
}

export const setNewStartValueAC = (startValue: number) => {
    return {type: SET_NEW_START_VALUE, newStartValue: startValue} as const
}

export const setNewMaxValueAC = (startValue: number) => {
    return {type: SET_NEW_MAX_VALUE, newMaxValue: startValue} as const
}

export const setNewValueAC = () => {
    return {type: SET_NEW_VALUE} as const
}
