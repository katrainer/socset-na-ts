import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import classes from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {v1} from "uuid";
import {setMessageTextAC, setNewMessageTextAC} from "../../redux/ac";
import {store} from "../../redux/storeRedux";
import { dialogsDataType } from './DialogsConteiner';

type propsType = {
    dialogs: any
    messages: any
    newMessageText: string
    onChangeHandler: (e: string) => void
    onClickhandler: () => void
}

export const Dialogs = (props: propsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    const onClickhandler = () => {
        props.onClickhandler()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.dialogs}
            </div>
            <div className={classes.messages}>
                {props.messages}
                <textarea onChange={onChangeHandler} value={props.newMessageText}/>
                <button onClick={onClickhandler}>add message</button>
            </div>
        </div>
    )
}