import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {setNewPostClickAC, setNewPostEnterAC, setPostTextAC} from "../../../redux/ac";
import {store} from "../../../redux/storeRedux";

type postType = {
    newPostText: (e: string) => void
    onKeyPressHandler: (e: string) => void
    onClickHandler: () => void
    postText: string
    posts:any
}

export const MyPosts = (props: postType) => {

    // const posts = props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

    const newPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newPostText(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        props.onKeyPressHandler(e.key)
    }
    const onClickHandler = () => {
        props.onClickHandler()
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={newPostText}
                        value={props.postText}
                        onKeyPress={onKeyPressHandler}
                    />
                </div>
                <div>
                    <button onClick={onClickHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts}
            </div>
        </div>
    )
}
