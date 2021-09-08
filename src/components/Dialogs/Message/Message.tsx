import React from 'react';
import classes from "../Dialogs.module.css";

type propsType={
    message: string
    id: string
}

export const Message=(props: propsType)=>{
    return(
        <div className={classes.message}>{props.message}</div>
    )
}