import React from "react";
import {setNewPostClickAC, setNewPostEnterAC, setPostTextAC} from "../../../redux/ac";
import {AppStateType} from "../../../redux/storeRedux";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {PostDataProps} from "../../../redux/reducer/profilePageReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    postText: string
    postsData: PostDataProps[]
}
type MapDispatchToPropsType = {
    newPostText: (e: string) => void
    onKeyPressHandler: (e: string) => void
    onClickHandler: () => void
}
export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postText: state.profilePageReducer.newPostText,
        postsData: state.profilePageReducer.postsData,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        newPostText: (e: string) => dispatch(setPostTextAC(e)),
        onKeyPressHandler: (e: string) => dispatch(setNewPostEnterAC(e)),
        onClickHandler: () => dispatch(setNewPostClickAC()),
    }
}

export const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
