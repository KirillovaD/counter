import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Setter} from "./components/Setter";


function App() {

    const [setterMinValue, setSetterMinValue] = useState(0)
    const [setterMaxValue, setSetterMaxValue] = useState(0)

    const [countMinValue, setCountMinValue] = useState(0)
    const [countMaxValue, setCountMaxValue] = useState(0)


    const [checkDisable, setCheckDisable] = useState(false)

    useEffect(()=>{
        let storageMinValue=localStorage.getItem('startMinValue')
        if ( storageMinValue){
            setSetterMinValue(JSON.parse(storageMinValue))
            setCountMinValue(JSON.parse(storageMinValue))
        }

        let storageMaxValue = localStorage.getItem('startMaxValue')
        storageMaxValue && setSetterMaxValue(JSON.parse(storageMaxValue))

    },[])

    const onSetter = (startMin: number, startMax: number) => {
        if (startMax > 0){
            localStorage.setItem('startMinValue',JSON.stringify(startMin))
            localStorage.setItem('startMaxValue', JSON.stringify(startMax))
            setCountMinValue(startMin)
            setCountMaxValue(startMax)
            setCheckDisable(true)
        }
    }

    const onReset = () => {
        setCountMinValue(0)
        setCheckDisable(false)
        setSetterMinValue(0)
        setSetterMaxValue(0)
        localStorage.clear()

    }

    return (
        <div className={s.App}>
            <Setter setterMinValue={setterMinValue} setterMaxValue={setterMaxValue} setSetterMinValue={setSetterMinValue} setSetterMaxValue={setSetterMaxValue} checkDisable={checkDisable} onSetter={onSetter}/>
            <Counter countMinValue={countMinValue} countMaxValue={countMaxValue} setCount={setCountMinValue} onReset={onReset}/>
        </div>
    );

}

export default App

