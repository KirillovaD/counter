import React from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Setter} from "./components/Setter";



function App() {
    return (
        <div className={s.App}>
            <Setter />
            <Counter />
        </div>
    );

}

export default App

