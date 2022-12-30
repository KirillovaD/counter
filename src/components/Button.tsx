import s from "./Button.module.css"
import React, {FC, useState} from 'react';
import {TitleProps} from "../App";

type ButtonPropsType = {
    title: TitleProps
    callBack: () => void
    checkDisable: boolean
}

const Button: FC<ButtonPropsType> = (
    {
        title,
        callBack,
        checkDisable
    }
) => {


    const onClickHandler = () => {
        callBack()
    }
    const buttonClassName = `${s.button} ${checkDisable ? s.buttonDisable : s.buttonActive}`

    return (
        <button className={buttonClassName} onClick={onClickHandler} disabled={checkDisable}>{title}</button>
    );
};

export default Button;