import React from "react";
import {AppRootStateType} from "../../../redux/store";
import {MyPostsFormik} from "./MyPostsFormik";
import {connect} from "react-redux";
import {PostDataProps, setNewPostClickAC} from "../../../redux/reducer/profilePageReducer";

type MapStateToPropsType = {
    postsData: PostDataProps[]
}
type MapDispatchToPropsType = {
    setNewPostClick: (e: string) => void
}
export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        postsData: state.profile.postsData,
    }
}
export const MyPostsConteiner = connect(mapStateToProps,
    {setNewPostClick: setNewPostClickAC}
)(MyPostsFormik)
