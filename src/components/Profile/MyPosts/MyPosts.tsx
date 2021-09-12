import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"

type postType = {
    postsData: Array<postsDataOb>
}
type postsDataOb = {
    message: string
    likeCount: number
    id: string
}

export const MyPosts = (props: postType) => {

    let post = props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)


    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}