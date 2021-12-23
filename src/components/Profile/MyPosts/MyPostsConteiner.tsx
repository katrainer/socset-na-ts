import React from "react";
import {setNewPostEnter, setPostText, setNewPostClick} from "../../../redux/ac";
import {AppStateType} from "../../../redux/storeRedux";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {PostDataProps} from "../../../redux/reducer/profilePageReducer";

type MapStateToPropsType = {
    postText: string
    postsData: PostDataProps[]
}
type MapDispatchToPropsType = {
    setPostText: (e: string) => void
    setNewPostEnter: (e: string) => void
    setNewPostClick: () => void
}
export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postText: state.profilePageReducer.newPostText,
        postsData: state.profilePageReducer.postsData,
    }
}
export const MyPostsConteiner = connect(mapStateToProps,
    {setPostText, setNewPostEnter, setNewPostClick}
)(MyPosts)
