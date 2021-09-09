import React from 'react';
import s from "./Message.module.css";

type propsType={
    message: string
    id: string
}

export const Message=(props: propsType)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}