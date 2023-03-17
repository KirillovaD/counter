import React from "react";
import s from "../App.module.css";
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {incValueAC, setValueAC} from "../bll/counter-reducer";
import {setMaxValueAC, setMinValueAC} from "../bll/setter-reducer";



export const Counter = () => {
    const dispatch=useDispatch()
    const countMinValue = useSelector<AppStateType, number>(state => state.counter.value)
    const countMaxValue = useSelector<AppStateType, number>(state => state.setter.maxValue)
    const onAddHandler = (countMaxValue:number) => {
        if (countMinValue < countMaxValue) {
            dispatch(incValueAC(countMinValue))
        }
    }
    const onReset = () => {
        dispatch(setMinValueAC(0))
        dispatch(setMaxValueAC(0))
        dispatch(setValueAC(0))
        localStorage.clear()

    }
    const numClassContainer = (countMaxValue === 0 && countMinValue === 0) ? `${s.containerText}`:`${s.numContainer} ${countMinValue === countMaxValue? s.numColorMax : ''}`

    return (
        <div className={s.container}>
            <h1>Counter</h1>
            <div className={numClassContainer}>{countMaxValue === 0 && countMinValue === 0 ? 'Set initial value': countMinValue}</div>
            <div className={s.buttons}>
                <Button title={"Add"} callBack={() => onAddHandler(countMaxValue)} checkDisable={countMinValue === countMaxValue}/>
                <Button title={"Reset"} callBack={onReset} checkDisable={countMinValue !== countMaxValue}/>
            </div>
        </div>

    )

}
