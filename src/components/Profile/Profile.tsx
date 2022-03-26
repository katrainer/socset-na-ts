import React from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsConteiner';
import {userProfilePageType} from '../../redux/reducer/profilePageReducer';

type PropsType = {
    profileUserData: userProfilePageType | null
    status: string
    updateStatusTC: (status: string) => void
}
export const Profile: React.FC<PropsType> = React.memo((
    {
        profileUserData,
        status,
        updateStatusTC,
    }) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo
                profileUserData={profileUserData}
                status={status}
                updateStatusTC={updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    )
})