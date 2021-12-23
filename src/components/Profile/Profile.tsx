import React from "react";
import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsConteiner";
import {userProfilePageType} from "../../redux/reducer/profilePageReducer";

type PropsType =
    {
        profileUserData :userProfilePageType|null
    }
// export const Profile = (props: PropsType) => {
export const Profile: React.FC<PropsType> = ({profileUserData}) =>{
    return (
        <div className={classes.profile}>
            <ProfileInfo profileUserData={profileUserData}/>
            <MyPostsConteiner/>
        </div>
    )
}