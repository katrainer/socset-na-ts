import React from 'react';
import s from './Settings.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../redux/store';
import {ProfileDataType} from '../../../../api/profileApi';
import {useFormik} from 'formik';

export const Settings = () => {
    const profile = useSelector<AppRootStateType, ProfileDataType>(state => state.profile.userProfilePage)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            vk: profile.contacts.vk,
            twitter: profile.contacts.twitter,
            facebook: profile.contacts.facebook,
            website: profile.contacts.website,
            instagram: profile.contacts.instagram,
            github: profile.contacts.github,
        },
        onSubmit: (values) => {
            console.log(values)
        },
    })
    return (
        <form className={s.mainContainer} onSubmit={formik.handleSubmit}>
            <div>
                <div>
                    <div>Мой id:{profile.userId}</div>
                    <div>Сменить имя на:
                        <input id="fullName"
                               type="text"
                               placeholder="fullName"
                               {...formik.getFieldProps('fullName')}/>
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
                        <input id="contacts.instagram"
                               type="text"
                               placeholder=""
                               {...formik.getFieldProps('contacts.instagram')}/>
                    </div>
                    <div>Сменить адрес github на:
                        <input id="contacts.github"
                               type="text"
                               placeholder=""
                               {...formik.getFieldProps('contacts.github')}/>
                    </div>
                </div>
                <button type={'submit'}>Сохранить</button>
            </div>
        </form>
    )
}