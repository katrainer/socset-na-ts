import React from 'react';
import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type propsType = {
    name: string
    id: string
}

export const Dialog = (props: propsType) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/'+props.id}> {props.name} </NavLink>
        </div>
    )
}