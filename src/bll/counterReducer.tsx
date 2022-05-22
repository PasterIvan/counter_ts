export const INC = 'INC';
export const REST = 'REST';
export const UPDATE_NEW_START_VALUE = 'UPDATE_NEW_START_VALUE';
export const UPDATE_NEW_MAX_VALUE = 'UPDATE_NEW_MAX_VALUE';

export type CounterType = {
    startValue: number
    maxValue: number
}

export type incACType = {
    type: typeof INC
    // payload: {newStartValue: number}
}

export type restACType = {
    type: typeof REST
    // payload: {newStartValue: number}
}

export type UpdateNewStartValueACType = {
    type: typeof UPDATE_NEW_START_VALUE
    newStartValue: number
}

export type UpdateNewMaxValueACType = {
    type: typeof UPDATE_NEW_MAX_VALUE
    newMaxValue: number
}

export type CounterReducerActionType = incACType | restACType

export type initialStateType = typeof initialState

let initialState = {
    startValue: 0,
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
        default:
            return state
    }
}
export const incAC = (/*newStartValue: number*/): incACType => {
    return {
        type: INC,
        // payload: {newStartValue}
     } as const
}

export const restAC = (/*newStartValue: number*/): restACType => {
    return {
        type: REST,
        // payload: {newStartValue}
     } as const
}

export const updateNewStartValueAC = (newStartValue: number): UpdateNewStartValueACType => ({
    type: UPDATE_NEW_START_VALUE,
    newStartValue: newStartValue,

})

export const updateNewMaxValueAC = (newMaxValue: number): UpdateNewMaxValueACType => ({
    type: UPDATE_NEW_MAX_VALUE,
    newMaxValue: newMaxValue
})


