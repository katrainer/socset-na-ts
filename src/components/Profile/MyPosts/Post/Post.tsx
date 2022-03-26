import s from './Post.module.css';
import React from 'react';

type propsType = {
    message: string
    likeCount: number
}

export const Post: React.FC<propsType> = React.memo(({message, likeCount}) => {
    return (
        <div className={s.postBlock}>
            <img src="https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png" alt="pikabu"/>
            {message}
            <div>
                <span>like: {likeCount}</span>
            </div>
        </div>
    )
})