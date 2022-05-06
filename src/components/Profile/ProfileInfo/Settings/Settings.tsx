import React from 'react';
import s from './Settings.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../redux/store';
import {ProfileDataType} from '../../../../api/profileApi';
import {useFormik} from 'formik';
import {updateProfileInfoTC} from '../../../../redux/reducer/profilePageReducer';

type SettingsPropsType = {
    setHide: (hide: boolean) => void
}

export const Settings: React.FC<SettingsPropsType> = ({setHide}) => {
    const profile = useSelector<AppRootStateType, ProfileDataType>(state => state.profile.userProfilePage)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            vk: profile.contacts.vk,
            twitter: profile.contacts.twitter,
            facebook: profile.contacts.facebook,
            website: profile.contacts.website,
            instagram: profile.contacts.instagram,
            github: profile.contacts.github,
        },
        onSubmit: (values) => {
            const {fullName, aboutMe} = values
            const {vk, twitter, facebook, website, instagram, github} = values
            const contacts = {vk, twitter, facebook, website, instagram, github}
            const mainData = {fullName, aboutMe}
            dispatch(updateProfileInfoTC(mainData, contacts))
            setHide(false)
        },
    })
    return (
        <form className={s.mainContainer} onSubmit={formik.handleSubmit}>
            <div className={s.id}>Мой id:{profile.userId}</div>
            <div className={s.settings}>
                <div>Сменить имя на:
                    <input id="fullName"
                           type="text"
                           placeholder="fullName"
                           {...formik.getFieldProps('fullName')}/>
                </div>
                <div>Обо мне:
                    <textarea id="aboutMe"
                              placeholder="aboutMe"
                              {...formik.getFieldProps('aboutMe')}/>
                </div>
                <div>Сменить адрес VK на:
                    <input id="vk"
                           type="text"
                           placeholder="VK"
                           {...formik.getFieldProps('vk')}/>
                </div>
                <div>Сменить адрес twitter на:
                    <input id="twitter"
                           type="text"
                           placeholder="twitter"
                           {...formik.getFieldProps('twitter')}/>
                </div>
                <div>Сменить адрес facebook на:
                    <input id="facebook"
                           type="text"
                           placeholder="facebook"
                           {...formik.getFieldProps('facebook')}/>
                </div>
                <div>Сменить адрес своего сайта на:
                    <input id="website"
                           type="text"
                           placeholder="website"
                           {...formik.getFieldProps('website')}/>
                </div>
                <div>Сменить адрес instagram на:
                    <input id="instagram"
                           type="text"
                           placeholder="instagram"
                           {...formik.getFieldProps('instagram')}/>
                </div>
                <div>Сменить адрес github на:
                    <input id="github"
                           type="text"
                           placeholder="github"
                           {...formik.getFieldProps('github')}/>
                </div>
            </div>
            <button className={s.button} type={'submit'}>Сохранить</button>
        </form>
    )
}