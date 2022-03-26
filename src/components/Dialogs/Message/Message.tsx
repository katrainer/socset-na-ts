import React from 'react';
import s from './Message.module.css';

type propsType = {
    message: string
}

export const Message: React.FC<propsType> = React.memo(({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
})