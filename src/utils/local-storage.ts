import {AppStateType} from "../bll/store";

export const loadState = () => {
    try {
        const serializedCounter = localStorage.getItem('counter');
        if (serializedCounter === null) {
            return undefined;
        }
        return (JSON.parse(serializedCounter));
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType) => {
    try {
        const serializedValue = JSON.stringify(state.counter.value);
        localStorage.setItem('counter', serializedValue);

    } catch {
        // ignore write errors
    }
};
