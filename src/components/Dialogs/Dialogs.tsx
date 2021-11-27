import React, {ChangeEvent} from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import classes from "./Dialogs.module.css";
import { DialogsType } from './DialogsConteiner';
import { Message } from './Message/Message';

export const Dialogs = (props: DialogsType) => {

    const dialogs = props.dialogsData.map(d => <DialogItem img={d.img} name={d.name} id={d.id}/>)
    const messages = props.messagesData.map(m => <Message message={m.message} id={m.id}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    const onClickhandler = () => {
        props.onClickhandler()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <textarea onChange={onChangeHandler} value={props.newMessageText}/>
                <button onClick={onClickhandler}>add message</button>
            </div>
        </div>
    )
}