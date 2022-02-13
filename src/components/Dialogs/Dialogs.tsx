import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import classes from "./Dialogs.module.css";
import {DialogsType} from './DialogsContainer';
import {Message} from './Message/Message';

export const Dialogs: React.FC<DialogsType> = (
    {
        newMessageText,
        dialogsData,
        messagesData,
        setMessageText,
        setNewMessageText,
        // isAuth,
    }) => {

    const dialogs = dialogsData.map(d => <DialogItem img={d.img} name={d.name} id={d.id}/>)
    const messages = messagesData.map(m => <Message message={m.message} id={m.id}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value)
    }

    const onClickhandler = () => setNewMessageText()

    // if (!isAuth) return <Redirect to='/login'/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <textarea onChange={onChangeHandler} value={newMessageText}/>
                <button onClick={onClickhandler}>add message</button>
            </div>
        </div>
    )
}