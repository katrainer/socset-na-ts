import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import {DialogsType} from './DialogsContainer';
import {Message} from './Message/Message';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';

type valuesType = {
    messages: string,
}
export const DialogsFormik: React.FC<DialogsType> = React.memo((
    {
        dialogsData,
        messagesData,
        setNewMessageText,
    }) => {
    const dispatch = useDispatch()
    const dialogs = dialogsData.map(d => <DialogItem key={d.id} img={d.img} name={d.name} id={d.id}/>)
    const messages = messagesData.map(m => <Message key={m.id} message={m.message}/>)
    const formik = useFormik({
        initialValues: {
            messages: '',
        },
        onSubmit: (values: valuesType) => {
            dispatch(setNewMessageText(values.messages))
        },
    })
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <form onSubmit={formik.handleSubmit}>
                    <textarea
                        name="messages"
                        id="messages"
                        placeholder="write"
                        onChange={formik.handleChange}
                        value={formik.values.messages}
                    />
                    <button type={'submit'}>dd message</button>
                </form>
            </div>
        </div>
    )
})