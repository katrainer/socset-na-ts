import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../redux/store';
import {ProfileDataType} from '../../../../api/profileApi';
import s from './Contacts.module.css'

export const Contacts = () => {
    const profileUserData = useSelector<AppRootStateType, ProfileDataType>(state => state.profile.userProfilePage)
    return <div className={s.mainContainer}>
       <div>About me:{' '}{profileUserData.aboutMe?profileUserData.aboutMe: 'no info'}</div>
        {profileUserData.contacts &&
            <div className={s.infoContainer}>
                <div>
                    <p>GitHub:{' '}{profileUserData.contacts.github ? profileUserData.contacts.github : 'soon'}</p>
                    <p>VK:{' '}{profileUserData.contacts.vk ? profileUserData.contacts.vk : 'soon'}</p>
                    <p>Instagram:{' '}{profileUserData.contacts.instagram ? profileUserData.contacts.instagram : 'soon'}</p>
                </div>
                <div>
                    <p>Website:{' '}{profileUserData.contacts.website ? profileUserData.contacts.website : 'soon'}</p>
                    <p>Facebook:{' '}{profileUserData.contacts.facebook ? profileUserData.contacts.facebook : 'soon'}</p>
                    <p>Twitter:{' '}{profileUserData.contacts.twitter ? profileUserData.contacts.twitter : 'soon'}</p>
                </div>
            </div>
        }
    </div>
}