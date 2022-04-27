import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsConteiner';
import {ProfileDataType} from '../../api/profileApi';


type PropsType = {
    profileUserData: ProfileDataType
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
        <div className={s.mainContainer}>
            <ProfileInfo
                profileUserData={profileUserData}
                status={status}
                updateStatusTC={updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    )
})