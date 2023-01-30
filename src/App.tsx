import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Setter} from "./components/Setter";


function App() {

    const [startMinValue, setStartMinValue] = useState(0)
    const [startMaxValue, setStartMaxValue] = useState(0)

    const [setterMinValue, setSetterMinValue] = useState<number>(0)
    const [setterMaxValue, setSetterMaxValue] = useState<number>(0)


    const [count, setCount] = useState(0)


    const [checkDisable, setCheckDisable] = useState(false)

    const onSetter = (startMin: number, startMax: number) => {
        setStartMinValue(startMin)
        setStartMaxValue(startMax)
        setCount(startMin)
        setCheckDisable(true)
    }

    const onReset = () => {
        setStartMinValue(0)
        setStartMaxValue(0)
        setCount(0)
        setCheckDisable(false)
        setSetterMinValue(0)
        setSetterMaxValue(0)
    }


    return (
        <div className={s.App}>
            <Setter setterMinValue={setterMinValue} setterMaxValue={setterMaxValue} setSetterMinValue={setSetterMinValue} setSetterMaxValue={setSetterMaxValue} checkDisable={checkDisable} onSetter={onSetter}/>
            <Counter startMinValue={startMinValue} startMaxValue={startMaxValue} count={count} setCount={setCount} onReset={onReset}/>
        </div>
    );

}

export default App

