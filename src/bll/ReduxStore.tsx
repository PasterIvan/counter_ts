import {combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer} from "./counterReducer";


let rootReducers = combineReducers({
    counter: counterReducer,
})

export type StoreType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers)
