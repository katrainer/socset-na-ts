import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import classes from "./Dialogs.module.css";
import {DialogsType} from './DialogsContainer';
import {Message} from './Message/Message';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Dialogs: React.FC<DialogsType> = (
    {
        dialogsData,
        messagesData,
        setNewMessageText,
    }) => {

    const dialogs = dialogsData.map(d => <DialogItem img={d.img} name={d.name} id={d.id}/>)
    const messages = messagesData.map(m => <Message message={m.message} id={m.id}/>)
    const onSubmit = (formData:SendMessageForm) =>{
        setNewMessageText(formData.message)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <ContactForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export type SendMessageForm = {
    message: string
}
const SendMessage: React.FC<InjectedFormProps<SendMessageForm>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <Field name='message' component='textarea' placeholder='write message'/>
            <button>add message</button>
    </form>
}
const ContactForm = reduxForm<SendMessageForm>({form: 'sendMessage'})(SendMessage)