import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {store} from "../../../redux/state";

type postType = {
    postsData: Array<postsDataOb>
    postText: string
}
type postsDataOb = {
    message: string
    likeCount: number
    id: string
}

export const MyPosts = (props: postType) => {

    let post = props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)


    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    // let buttonAddNewPost = () => {
    //     let text = newPostElement.current?.value
    //     if (text) addNewPost(text)
    // }

    const newPostText = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        // let text = e.currentTarget.value
        store.setPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        // ref={newPostElement}
                        onChange={newPostText}
                        value={props.postText}
                        onKeyPress={store.setNewPostEnter.bind(store)}
                        />
                </div>
                <div>
                    <button onClick={store.setNewPostClick.bind(store)}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}