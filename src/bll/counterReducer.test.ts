import {counterReducer, incAC, initialStateType, setNewMaxValueAC, setNewStartValueAC} from "./counterReducer";


test('value should be +1', () => {
    const startState: initialStateType = {
        value: 2,
        startValue: 0,
        maxValue: 0
    }

    const action = incAC()

    const endState = counterReducer(startState, action)

    expect(endState.value).toBe(3)
    expect(endState.startValue).toBe(0)
    expect(endState.maxValue).toBe(0)
})

test('startValue should be 5', () => {
    const startState: initialStateType = {
        value: 2,
        startValue: 0,
        maxValue: 0
    }

    const action = setNewStartValueAC(5)

    const endState = counterReducer(startState, action)

    expect(endState.value).toBe(2)
    expect(endState.startValue).toBe(5)
    expect(endState.maxValue).toBe(0)
})

test('maxValue should be 7', () => {
    const startState: initialStateType = {
        value: 2,
        startValue: 0,
        maxValue: 0
    }

    const action = setNewMaxValueAC(7)

    const endState = counterReducer(startState, action)

    expect(endState.value).toBe(2)
    expect(endState.startValue).toBe(0)
    expect(endState.maxValue).toBe(7)
})