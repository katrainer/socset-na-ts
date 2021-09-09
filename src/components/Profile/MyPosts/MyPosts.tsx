import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {v1} from "uuid";

type postType = {
    postsData: Array<postsDataOb>
}
type postsDataOb={
    message: string
    likeCount: number
    id: string
}

export const MyPosts = (props: postType) => {

    let post = props.postsData.map(p=><Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}