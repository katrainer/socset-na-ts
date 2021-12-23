import React, {ChangeEvent} from "react";
import s from "./MyPost.module.css"
import {MyPostsType} from "./MyPostsConteiner";
import {Post} from "./Post/Post";

export const MyPosts: React.FC<MyPostsType> =
    ({
         setPostText,
         postText,
         postsData,
         setNewPostEnter,
         setNewPostClick
     }) => {
        const posts = postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
        const newPostText = (e: ChangeEvent<HTMLTextAreaElement>) => setPostText(e.currentTarget.value)
        const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => setNewPostEnter(e.key)
        const onClickHandler = () => setNewPostClick()

        return (
            <div className={s.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea
                        onChange={newPostText}
                        value={postText}
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
