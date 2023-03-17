import React, {ChangeEvent, useState} from 'react';
import s from '../App.module.css'
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {setValueAC} from "../bll/counter-reducer";
import {setMaxValueAC, setMinValueAC} from "../bll/setter-reducer";


export const Setter = () => {
    const setterMinValue = useSelector<AppStateType, number>(state => state.setter.minValue)
    const setterMaxValue = useSelector<AppStateType, number>(state => state.setter.maxValue)
    const dispatch=useDispatch()
    const [checkDisable, setCheckDisable] = useState(false)

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) > 0 && dispatch(setMinValueAC(Number(e.currentTarget.value)))
        dispatch(setMaxValueAC(Number(e.currentTarget.value)+1))
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>, setterMinValue: number) => {
        Number(e.currentTarget.value) > setterMinValue && dispatch(setMaxValueAC(Number(e.currentTarget.value)))
    }
    const onSetHandler = () => {
        if (setterMinValue > 0){
            dispatch(setValueAC(setterMinValue))
            setCheckDisable(true)
        }
    }
    return (
        <div className={s.container}>
            <h1>Setter</h1>
            <div className={s.valueContainer}>
                <label>Start value
                    <input value={setterMinValue} onChange={onChangeMinHandler} type="number" disabled={checkDisable}/>
                </label>
            </div>

            <div className={s.valueContainer}>
                <label>Max value
                    <input value={setterMaxValue} onChange={(e) => onChangeMaxHandler(e, setterMinValue)}
                           type="number" disabled={checkDisable}/>
                </label>
            </div>
            <Button title="Set" callBack={onSetHandler} checkDisable={checkDisable}/>
        </div>
    );
};

