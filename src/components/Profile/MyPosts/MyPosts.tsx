import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"

type postType = {}

export const MyPosts = (props: postType) => {
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
            <Post message='yyoyo' likeCount={12}/>
            <Post message='AAAAyyoyo' likeCount={212}/>
            </div>
        </div>
    )
}