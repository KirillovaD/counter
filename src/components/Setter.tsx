import React, {ChangeEvent, FC, useState} from 'react';
import s from '../App.module.css'
import Button from "./Button";

export type CounterPropsType = {
    minNum: number
    maxNum: number

}
export const Setter = ()=> {
    const [minNum,setMinNum] = useState(0)
    const [maxNum,setMaxNum] = useState(0)

    const onChangeMinHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        const minNumValue = Number(e.currentTarget.value)
        minNumValue > 0 && setMinNum(minNumValue)
        setMaxNum(minNumValue + 1)

    }
    const onChangeMaxHandler = (e:ChangeEvent<HTMLInputElement>,minNum:number)=>{
        const maxNumValue = Number(e.currentTarget.value)
        maxNumValue > minNum && setMaxNum(maxNumValue)
    }
    const onSetHandler = ()=>{

    }
    return (

        <div className={s.container}>
            <h1>Setter</h1>
           <div className={s.valueContainer}>
               <label>Start value
                   <input value={minNum} onChange={onChangeMinHandler} type="number"/>
               </label>
           </div>

            <div className={s.valueContainer}>
                <label>Max value
                    <input value={maxNum} onChange={(e)=>onChangeMaxHandler(e,minNum)} type="number"/>
                </label>
            </div>
            <Button title="Set" callBack={onSetHandler} checkDisable={false}/>
        </div>
    );
};

