import React, {FC, useState} from "react";
import s from "../App.module.css";
import Button, {TitleProps} from "./Button";
import {CounterPropsType} from "./Setter";




export const Counter: FC<CounterPropsType> = ({minNum,maxNum} ) => {

   console.log(maxNum,minNum)
    const [num, setNum] = useState<number>(minNum)

    const onAddHandler = (maxNum:number) => {
        if (num < maxNum) {
            setNum(num + 1)
        }
    }
    const onResetHandler = () => {
        setNum(0)
    }
    const checkDisable = (title: TitleProps) => title === "Add" && num === maxNum || title === "Reset" && num === minNum

    const numContainer = `${s.numContainer} ${num === maxNum ? s.numColorMax : ''}`

    return (
        <div className={s.container}>
            <h1>Counter</h1>
            <div className={s.numContainer}>{num}</div>
            <div className={s.buttons}>
                <Button title={"Add"} callBack={()=>onAddHandler(maxNum)} checkDisable={checkDisable("Add")}/>
                <Button title={"Reset"} callBack={onResetHandler} checkDisable={checkDisable("Reset")}/>
            </div>
        </div>

    )

}