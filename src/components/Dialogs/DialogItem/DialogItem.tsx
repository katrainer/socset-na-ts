import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type propsType = {
    name: string
    id: string
    img: string
}

export const DialogItem = (props: propsType) => {
    return (
        <div className={s.dialog}>

            <NavLink to={'/dialogs/' + props.id}> <img src={props.img}/> {props.name} </NavLink>
        </div>
    )
}