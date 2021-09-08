import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {v1} from "uuid";

type postType = {}

export const MyPosts = (props: postType) => {

    let postsData=[
        {id:v1(), message: 'yo', likeCount:12},
        {id:v1(), message: 'yoyo', likeCount: 212},
        {id:v1(), message: 'yoyo', likeCount: 212},
      ]

    let post = postsData.map(p=><Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

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