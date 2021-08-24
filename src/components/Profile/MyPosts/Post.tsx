import React from "react";
import classes from "./Post.module.css";

type postType = {
    message: string
    likeCount: number
}

export const Post = (props: postType) => {
    return (
        <div className={classes.posts}>
            <img src='https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png'/>
            {props.message}
            <div>
                <span>like: {props.likeCount}</span>
            </div>
        </div>
    )
}