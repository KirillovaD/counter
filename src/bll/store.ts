import {combineReducers, legacy_createStore as createStore} from 'redux'
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/local-storage";
import {setterReducer} from "./setter-reducer";

const rootReducer = combineReducers({
    setter: setterReducer,
    counter: counterReducer
})

const persistedState = loadState();
export const store = createStore(rootReducer, persistedState)
store.subscribe(() => {
    saveState({
        setter: store.getState().setter,
        counter: store.getState().counter
    });
});


export type AppStateType = ReturnType<typeof rootReducer>
