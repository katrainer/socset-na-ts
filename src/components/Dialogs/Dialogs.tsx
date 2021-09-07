import React from 'react';
import {NavLink} from 'react-router-dom';
import {Dialog} from './Dialog/Dialog';
import classes from "./Dialogs.module.css";
import {Message} from "./Message/Message";

export const Dialogs = () => {
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