import React from "react";
import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsConteiner";

export const Profile = () => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostsConteiner/>
        </div>
    )
}