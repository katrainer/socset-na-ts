import React, {useEffect} from 'react';
import s from './Dialogs.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setFriendsTC} from '../../redux/reducer/usersPageReducer';
import {AppRootStateType} from '../../redux/store';
import {UserType} from '../../api/userApi';
import {NavLink, Redirect} from 'react-router-dom';


export const Dialogs = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const users = useSelector<AppRootStateType, UserType[]>(state => state.userPage.users)
    let usersForDialogs: UserTypeMessage[] = users.slice(0, 6)
    const messages = useSelector<AppRootStateType, { message: string, time: string }[]>(state => state.messages.messagesData)
    for (let i = 0; i < 6; i++) {
        usersForDialogs[i] = {...usersForDialogs[i], message: messages[i].message, time: messages[i].time}
    }

    useEffect(() => {
        dispatch(setFriendsTC())
    }, [])
    if (!isAuth) return <Redirect to="/login"/>
    return (
        <>
            {usersForDialogs.map(t => {
                return (<div className={s.mainContainer} key={t.id}>
                    <div className={s.contentContainer}>
                        <div className={s.imgContainer}>
                            <NavLink to={'/profile/' + t.id}><img
                                src={t.photos?.small ? t.photos.small : 'https://sun1-17.userapi.com/s/v1/if1/pvTi5V3csQH8-oqUnfesELwgtLWyEePqE6Hz5SdqoVZxItBnm_XwfAiDMfANJPjpj7jtW_O5.jpg?size=200x200&quality=96&crop=0,0,979,979&ava=1'}
                                alt="Photo uf user"/></NavLink>
                            <span style={{wordBreak: 'break-all'}}>{t.name}</span>
                        </div>
                    </div>
                    <div className={s.textContainer}>
                        <span>{t.message}</span>
                        <span className={s.time}>{t.time}</span>
                    </div>
                </div>)
            })}
        </>
    )
}

export type UserTypeMessage = {
    name: string
    id: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
    message?: string | null
    time?: string | null
}