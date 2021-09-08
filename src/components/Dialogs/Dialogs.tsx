import React from 'react';
import {Dialog} from './Dialog/Dialog';
import classes from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {v1} from "uuid";

export const Dialogs = () => {

    let dialogsData=[
        {id:v1(), name: 'Nikita'},
        {id:v1(), name: 'Jana'},
        {id:v1(), name: 'Daniil'},
        {id:v1(), name: 'Lecha'},
        {id:v1(), name: 'Lecha'},
        {id:v1(), name: 'Lecha'},
    ]

    let messagesData=[
        {id:v1(), message: 'yo'},
        {id:v1(), message: 'yoyo'},
        {id:v1(), message: 'yoyoyo'},
        {id:v1(), message: 'yoyoyoyo'},
        {id:v1(), message: 'yoyoyoyo'},
        {id:v1(), message: 'yoyoyoyo'},
    ]

    let dialog = dialogsData.map(d=><Dialog name={d.name} id={d.id}/>)
    let message = messagesData.map(m=><Message message={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialog}
            </div>
            <div className={classes.messages}>
                {message}
            </div>
        </div>
    )
}