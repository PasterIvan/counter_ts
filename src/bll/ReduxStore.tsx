import {combineReducers, legacy_createStore as createStore} from 'redux';
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localstorage-utils";

let rootReducers = combineReducers({
    counter: counterReducer,
})

export let store = createStore(rootReducers, loadState())

store.subscribe(()=>{
    saveState({counter: store.getState().counter})
})

export type StateType = ReturnType<typeof rootReducers>
export type StoreType = typeof store
