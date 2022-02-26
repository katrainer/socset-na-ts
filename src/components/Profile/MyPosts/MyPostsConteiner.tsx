import React from "react";
import {AppStateType} from "../../../redux/storeRedux";
import {MyPostsFormik} from "./MyPostsFormik";
import {connect} from "react-redux";
import {PostDataProps, setNewPostClick} from "../../../redux/reducer/profilePageReducer";

type MapStateToPropsType = {
    postsData: PostDataProps[]
}
type MapDispatchToPropsType = {
    setNewPostClick: (e: string) => void
}
export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePageReducer.postsData,
    }
}
export const MyPostsConteiner = connect(mapStateToProps,
    {setNewPostClick}
)(MyPostsFormik)
