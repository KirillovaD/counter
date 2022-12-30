import React, {useState} from 'react';
import s from './App.module.css';
import Button from "./components/Button";

export type TitleProps = "Add" | "Reset"



function App(){
    const minNum = 0
    const maxNum = 5

    const [num, setNum] = useState<number>(minNum)

    const onAddHandler = () => {
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
            <div className={s.App}>
                <h1>Counter</h1>
                <div className={numContainer}>{num}</div>
                <div className={s.buttons}>
                    <Button title={"Add"} callBack={onAddHandler} checkDisable={checkDisable("Add")}/>
                    <Button title={"Reset"} callBack={onResetHandler} checkDisable={checkDisable("Reset")}/>
                </div>
            </div>
        );

}
export default App