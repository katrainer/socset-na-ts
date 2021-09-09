import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type propsType = {
    name: string
    id: string
}

export const DialogItem = (props: propsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/'+props.id}> {props.name} </NavLink>
        </div>
    )
}