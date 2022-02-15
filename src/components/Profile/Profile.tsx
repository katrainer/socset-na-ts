import React from "react";
import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsConteiner";
import {userProfilePageType} from "../../redux/reducer/profilePageReducer";

type PropsType = {
    profileUserData: userProfilePageType | null
    status: string
    thunkUpdateStatus: (status:string)=>void
}
export const Profile: React.FC<PropsType> = (
    {
        profileUserData,
        status,
        thunkUpdateStatus,
    }) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo
                profileUserData={profileUserData}
                status={status}
                thunkUpdateStatus={thunkUpdateStatus}/>
            <MyPostsConteiner/>
        </div>
    )
}