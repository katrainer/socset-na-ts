import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsConteiner';
import {ProfileDataType} from '../../api/profileApi';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';


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
    const ownerPage = useSelector<AppRootStateType, number | undefined>(state => state.profile.userProfilePage?.userId)
    const owner = useSelector<AppRootStateType, number>(state => state.login.id)
    return (
        <div className={s.mainContainer}>
            <ProfileInfo
                profileUserData={profileUserData}
                status={status}
                updateStatusTC={updateStatusTC}/>
            {ownerPage === owner && <MyPostsContainer/>}
        </div>
    )
})