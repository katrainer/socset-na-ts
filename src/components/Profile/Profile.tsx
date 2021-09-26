import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type postType = {
    postsData: Array<postsDataOb>
    postText: string
}
type postsDataOb={
    message: string
    likeCount: number
    id: string
}

export const Profile = (props: postType) => {

    return (
        <div className={classes.profile}>
           <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                postText={props.postText}/>
        </div>
    )
}