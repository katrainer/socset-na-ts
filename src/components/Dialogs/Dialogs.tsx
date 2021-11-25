import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import classes from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {v1} from "uuid";
import {setMessageTextAC, setNewMessageTextAC} from "../../redux/ac";
import {store} from "../../redux/storeRedux";

type propsType={
    dialogsData: Array<dialogsDataOb>
    messagesData: Array<messagesDataOb>
    newMessageText: string
}
type dialogsDataOb={
    id: string
    name: string
    img: string
}
type messagesDataOb={
    id: string
    message: string
}

export const Dialogs = (props: propsType) => {

    const dialog = props.dialogsData.map(d=><DialogItem img={d.img} name={d.name} id={d.id}/>)
    const message = props.messagesData.map(m=><Message message={m.message} id={m.id}/>)


    const onChangeHandler=(e: ChangeEvent<HTMLTextAreaElement>)=>{
        store.dispatch(setMessageTextAC(e.currentTarget.value))
    }

    const onClickhandler = () =>{
            store.dispatch(setNewMessageTextAC())
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialog}
            </div>
            <div className={classes.messages}>
                {message}
                <textarea onChange={onChangeHandler} value={props.newMessageText}></textarea>
                <button onClick={onClickhandler}>add message</button>
            </div>
        </div>
    )
}