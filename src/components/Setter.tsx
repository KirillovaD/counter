import React, {ChangeEvent, FC} from 'react';
import s from '../App.module.css'
import Button from "./Button";


type SetterPropsType = {
    setterMinValue:number
    setterMaxValue:number
    setSetterMinValue:(setterMinValue:number)=>void
    setSetterMaxValue:(setterMaxValue:number)=>void
    checkDisable: boolean
    onSetter: (initialMinValue: number, initialMaxValue: number) => void
}

export const Setter: FC<SetterPropsType> = ({setterMinValue,setterMaxValue,setSetterMinValue,setSetterMaxValue,checkDisable, onSetter}) => {

    // const [setterMinValue, setSetterMinValue] = useState<number>(0)
    // const [setterMaxValue, setSetterMaxValue] = useState<number>(0)

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        Number(e.currentTarget.value) > 0 && setSetterMinValue(Number(e.currentTarget.value))
        setSetterMaxValue(Number(e.currentTarget.value) + 1)

    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>, setterMinValue: number) => {
        Number(e.currentTarget.value) > setterMinValue && setSetterMaxValue(Number(e.currentTarget.value))
    }
    // const [checkDisable, setCheckDisable] = useState(false)
    const onSetHandler = () => {
        onSetter(setterMinValue, setterMaxValue)
        // setCheckDisable(true)
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

