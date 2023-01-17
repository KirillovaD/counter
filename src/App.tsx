import React, {ChangeEvent, FC, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Setter} from "./components/Setter";




function App(){
    const [minNum,setMinNum] = useState(0)
    const [maxNum,setMaxNum] = useState(0)



    return (
        <div className={s.App}>
            <Setter/>
            <Counter minNum={minNum} maxNum={maxNum}/>
        </div>
    );

}

export default App

