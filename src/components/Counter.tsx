import React, {FC} from "react";
import s from "../App.module.css";
import Button from "./Button";

type CounterPropsType = {
    countMinValue:number
    countMaxValue:number
    setCount: (countMinValue: number) => void
    onReset:()=>void

}

export const Counter: FC<CounterPropsType> = ({countMinValue,countMaxValue,setCount,onReset}) => {

    const onAddHandler = (countMaxValue:number) => {
        if (countMinValue < countMaxValue) {
            let count = countMinValue + 1
            localStorage.setItem('counter',JSON.stringify(count))
            setCount(count)
        }
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