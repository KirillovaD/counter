import React, {FC} from "react";
import s from "../App.module.css";
import Button, {TitleProps} from "./Button";

type CounterPropsType = {
    startMinValue:number
    startMaxValue:number
    count: number
    setCount: (count: number) => void

    onReset:()=>void

}

export const Counter: FC<CounterPropsType> = ({startMinValue,startMaxValue,count,setCount,onReset}) => {
    console.log(count, startMaxValue)
    const onAddHandler = (startMaxValue:number) => {
        if (count < startMaxValue) {
            setCount(count + 1)
        }
    }

    const checkDisable = (title: TitleProps) => title === "Add" && count === startMaxValue || title === "Reset" && count === startMinValue

    const numContainer = count > 0 ? `${s.numContainer} ${count === startMaxValue ? s.numColorMax : ''}` : `${s.containerText}`

    return (
        <div className={s.container}>
            <h1>Counter</h1>
            <div className={numContainer}>{count > 0 ? count : 'Set initial value'}</div>
            <div className={s.buttons}>
                <Button title={"Add"} callBack={() => onAddHandler(startMaxValue)} checkDisable={checkDisable("Add")}/>
                <Button title={"Reset"} callBack={onReset} checkDisable={checkDisable("Reset")}/>
            </div>
        </div>

    )

}