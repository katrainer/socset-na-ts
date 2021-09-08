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
        {id:v1(), name: 'Lecha'}
    ]

    let messagesData=[
        {id:v1(), message: 'yo'},
        {id:v1(), message: 'yoyo'},
        {id:v1(), message: 'yoyoyo'},
        {id:v1(), message: 'yoyoyoyo'}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <Dialog name='Nikiat' id={1}/>
                <Dialog name='Jana' id={2}/>
                <Dialog name='Daniil' id={3}/>
                <Dialog name='Lecha' id={4}/>
            </div>
            <div className={classes.messages}>
                <Message message='yop'/>
                <Message message='yoyo'/>
                <Message message='yoyoyo'/>
                <Message message='yoyoyoyo'/>
            </div>
        </div>
    )
}