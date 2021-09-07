import s from "./Post.module.css";
import React from "react";

type propsType={
    message: string
    likeCount: number
}

export const Post=(props: propsType)=>{
    return(
        <div className={s.postBlock}>
            <img src='https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png'/>
            {props.message}
            <div>
                <span>like: {props.likeCount}</span>
            </div>
        </div>
    )
}