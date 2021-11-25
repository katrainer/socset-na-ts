import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import s from "./MyPost.module.css"
import {setNewPostClickAC, setNewPostEnterAC, setPostTextAC } from "../../../redux/ac";
import { store } from "../../../redux/storeRedux";

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
        // store.setPostText(e.currentTarget.value)
        // store.dispatch({type: "SET-POST-TEXT", text: e.currentTarget.value})
        store.dispatch(setPostTextAC(e.currentTarget.value))
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>)=>{
        // store.dispatch({type: "SET-NEW-POST-ENTER", eventKey: e.key})
        store.dispatch(setNewPostEnterAC(e.key))
    }
    const onClickHandler = ()=>{
        // store.dispatch({type: "SET-NEW-POST-CLICK"})
        store.dispatch(setNewPostClickAC())
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
                        // onKeyPress={store.dispatch.bind(store)}
                        onKeyPress={onKeyPressHandler}
                        />
                </div>
                <div>
                    {/*<button onClick={store.setNewPostClick.bind(store)}>Add post</button>*/}
                    <button onClick={onClickHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}
// function setPostTextAC(value: string): import("../../../redux/state").ActionsTypes {
//     throw new Error("Function not implemented.");
// }

