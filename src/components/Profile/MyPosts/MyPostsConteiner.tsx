import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {setNewPostClickAC, setNewPostEnterAC, setPostTextAC } from "../../../redux/ac";
import { store } from "../../../redux/storeRedux";
import {MyPosts} from "./MyPosts";

type postType = {
    postsData: Array<postsDataOb>
    postText: string
}
type postsDataOb = {
    message: string
    likeCount: number
    id: string
}

export const MyPostsConteiner = (props: postType) => {

    const posts = props.postsData.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)

    const newPostText = (e: string) =>{
        store.dispatch(setPostTextAC(e))
    }

    const onKeyPressHandler = (e: string)=>{
        store.dispatch(setNewPostEnterAC(e))
    }
    const onClickHandler = ()=>{
        store.dispatch(setNewPostClickAC())
    }

    return (
        <MyPosts
            newPostText={newPostText}
            onKeyPressHandler={onKeyPressHandler}
            onClickHandler={onClickHandler}
            postText={props.postText}
            posts={posts}
        />
    )
}
