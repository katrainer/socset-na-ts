import React, {ChangeEvent} from 'react';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/store';
import {ProfileDataType} from '../../../api/profileApi';
import {updatePhotosTC} from '../../../redux/reducer/profilePageReducer';
import s from './ProfileInfo.module.css'
import {Contacts} from './Contacts/Contacts';


type PropsType = {
    profileUserData: ProfileDataType
    status: string
    updateStatusTC: (status: string) => void
}
export const ProfileInfo: React.FC<PropsType> = React.memo((
    {
        profileUserData,
        status,
        updateStatusTC,
    }) => {
    const dispatch = useDispatch()

    const ownerPage = useSelector<AppRootStateType, number | undefined>(state => state.profile.userProfilePage?.userId)
    const owner = useSelector<AppRootStateType, number>(state => state.login.id)
    const savePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(updatePhotosTC(e.target.files[0]))
        }
        return
    }
    return (
        <div className={s.mainContainer}>
            <div className={s.profileImgContainer}>
                <img
                    src={profileUserData.photos?.small ? profileUserData.photos.large : 'https://i.pinimg.com/736x/75/24/87/752487a0b94808fe215c2dbf3f3f18b7.jpg'}
                    alt="изображение того, чего нету"/>
                <div className={s.nameContainer}>
                    <p>{profileUserData.fullName}</p>
                    <ProfileStatus
                        value={status}
                        updateStatusTC={updateStatusTC}/>
                    {ownerPage === owner && <input
                        type="file"
                        onChange={savePhotoHandler}/>}
                </div>
            </div>
            <Contacts/>
        </div>
    )
})