import s from './Post.module.css';
import React from 'react';

type propsType = {
    message: string
    likeCount: number
    photo: string
}

export const Post: React.FC<propsType> = React.memo(({message, likeCount, photo}) => {
    return (
        <div className={s.mainContainer}>
            <img
                src={photo ? photo : 'https://sun1-17.userapi.com/s/v1/if1/pvTi5V3csQH8-oqUnfesELwgtLWyEePqE6Hz5SdqoVZxItBnm_XwfAiDMfANJPjpj7jtW_O5.jpg?size=200x200&quality=96&crop=0,0,979,979&ava=1'}
                alt="pikabu"/>
            <div>
                <div>{message}</div>
                <div>
                    <span>like: {likeCount}</span>
                </div>
            </div>
        </div>
    )
})