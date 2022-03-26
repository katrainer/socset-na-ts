import React from 'react';
import {userProfilePageType} from '../../../redux/reducer/profilePageReducer';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';


type PropsType = {
    profileUserData: userProfilePageType | null,
    status: string
    updateStatusTC: (status: string) => void
}
export const ProfileInfo: React.FC<PropsType> = React.memo((
    {
        profileUserData,
        status,
        updateStatusTC,
    }) => {
    return (
        <div>
            <div>
                <img
                    src="http://novostroi18.ru/files/products/Yaponskay_jivopis.500x500.jpg?0fc269b39df6f5315e72570d8a10f34c"
                alt='изображение не загрузилось((('/>
            </div>

            {profileUserData && (<div><img src={profileUserData.photos.small} alt="изображение того, чего нету"/>
                <p>{profileUserData.fullName}</p>
                <ProfileStatus
                    value={status}
                    updateStatusTC={updateStatusTC}/>
            </div>)}
        </div>
    )
})