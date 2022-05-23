export const SET = 'SET';
export const SET_NEW_START_VALUE = 'SET_NEW_START_VALUE';
export const SET_NEW_MAX_VALUE = 'SET_NEW_MAX_VALUE';

export type SetNewStartValuesACType = {
    type: typeof SET_NEW_START_VALUE
    newStartValue: number
}
export type SetNewMaxValuesACType = {
    type: typeof SET_NEW_MAX_VALUE
    newMaxValue: number
}
// export type SetACType = {
//     type: typeof SET
// }

export type CounterReducerActionType = SetNewStartValuesACType | SetNewMaxValuesACType /*| SetACType*/

export type initialStateType = typeof initialState

let initialState = {}

export const conditionReducer = (state: initialStateType = initialState, action: CounterReducerActionType): initialStateType => {
    switch (action.type) {
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
        // case SET:
        //     return {
        //         ...state,
        //         newStartValue: action.newStartValue,
        //         newMaxValue: action.newMaxValue
        //     }
        default:
            return state
    }
}

export const setNewStartValueAC = (newStartValue: number): SetNewStartValuesACType => ({
    type: SET_NEW_START_VALUE,
    newStartValue: newStartValue
})

export const setNewMaxValueAC = (newMaxValue: number): SetNewMaxValuesACType => ({
    type: SET_NEW_MAX_VALUE,
    newMaxValue: newMaxValue
})

// export const setAC = (): SetACType => ({
//     type: SET,
// })


