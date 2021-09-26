import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import classes from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {v1} from "uuid";

type propsType={
    dialogsData: Array<dialogsDataOb>
    messagesData: Array<messagesDataOb>
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

    let dialog = props.dialogsData.map(d=><DialogItem img={d.img} name={d.name} id={d.id}/>)
    let message = props.messagesData.map(m=><Message message={m.message} id={m.id}/>)

    let textAddMessage = React.createRef<HTMLTextAreaElement>()
    let addMessage=()=>{
        let text = textAddMessage.current?.value
        alert(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialog}
            </div>
            <div className={classes.messages}>
                {message}
                <textarea ref={textAddMessage}></textarea>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
}