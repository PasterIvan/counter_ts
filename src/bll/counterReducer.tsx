export const INC = 'INC';
export const REST = 'REST';

export type CounterType = {
    startValue: number
    maxValue: number
}

export type icACType = {
    type: typeof INC
}

export type restACType = {
    type: typeof REST
}

export type CounterReducerActionType = icACType | restACType


export type initialStateType = typeof initialState

let initialState = {
    value: 0
}

export const counterReducer = (state: initialStateType = initialState, action: CounterReducerActionType): initialStateType => {
    switch (action.type) {
        case INC:
            return {
                ...state, value: state.value + 1
            }
        case REST:
            return {
                ...state, value: 0
            }
        default:
            return state
    }
}
export const incAC = (): icACType => ({type: INC})
export const restAC = (): restACType => ({type: REST})