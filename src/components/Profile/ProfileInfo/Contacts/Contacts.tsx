import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../redux/store';
import {ProfileDataType} from '../../../../api/profileApi';
import s from './Contacts.module.css'

type ContactsPropsType = {
    hide: boolean
    setHide: (hide: boolean) => void
}

export const Contacts: React.FC<ContactsPropsType> = ({hide, setHide}) => {
    const profileUserData = useSelector<AppRootStateType, ProfileDataType>(state => state.profile.userProfilePage)
    return <div className={s.mainContainer}>
        <div className={s.buttonContainer}>
            <button
                className={s.button}
                onClick={() => setHide(!hide)}>
                Изменить данные
            </button>
        </div>
        <div><b>About me</b>:{' '}{profileUserData.aboutMe ? profileUserData.aboutMe : 'no info'}</div>
        {profileUserData.contacts &&
            <div className={s.infoContainer}>
                <div>
                    <p><b>GitHub</b>:{' '}{profileUserData.contacts.github ? profileUserData.contacts.github : 'soon'}</p>
                    <p><b>VK</b>:{' '}{profileUserData.contacts.vk ? profileUserData.contacts.vk : 'soon'}</p>
                    <p><b>Instagram</b>:{' '}{profileUserData.contacts.instagram ? profileUserData.contacts.instagram : 'soon'}</p>
                </div>
                <div>
                    <p><b>Website</b>:{' '}{profileUserData.contacts.website ? profileUserData.contacts.website : 'soon'}</p>
                    <p><b>Facebook</b>:{' '}{profileUserData.contacts.facebook ? profileUserData.contacts.facebook : 'soon'}</p>
                    <p><b>Twitter</b>:{' '}{profileUserData.contacts.twitter ? profileUserData.contacts.twitter : 'soon'}</p>
                </div>
            </div>
        }
    </div>
}