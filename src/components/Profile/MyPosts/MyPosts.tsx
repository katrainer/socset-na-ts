import React, {ChangeEvent} from "react";
import s from "./MyPost.module.css"
import {MyPostsType} from "./MyPostsConteiner";
import {Post} from "./Post/Post";

export const MyPosts = (props: MyPostsType) => {

    const posts = props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

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
                {posts}
            </div>
        </div>
    )
}
