import React from "react";
import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsConteiner";

type postType = {
    postsData: Array<postsDataOb>
    postText: string
}
type postsDataOb = {
    message: string
    likeCount: number
    id: string
}

export const Profile = (props: postType) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostsConteiner
                postsData={props.postsData}
                postText={props.postText}/>
        </div>
    )
}