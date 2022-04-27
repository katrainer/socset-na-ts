import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {NavLink, Redirect} from 'react-router-dom';
import React, {useEffect} from 'react';
import {UserType} from '../../api/userApi';
import {setUsersTC, subscribeTC, unSubscribeTC} from '../../redux/reducer/usersPageReducer';
import userAvatar from '../../assets/img/null_avatar.png';
import s from './Friends.module.css'

export const Friends = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const users = useSelector<AppRootStateType, UserType[]>(state => state.userPage.users)
    const dispatch = useDispatch()
    const onClickUnSubHandler = (id: string) => {
        dispatch(unSubscribeTC(id))
    }
    const onClickSubHandler = (id: string) => {
        dispatch(subscribeTC(id))
    }
    useEffect(() => {
        dispatch(setUsersTC(100, true))
    }, [])
    if (!isAuth) return <Redirect to="/login"/>
    return <div className={s.mainContainer}>
        {users.map(t => {
            return (
                <div key={t.id} className={s.friendContainer}>
                    <div className={s.imgContainer}>
                        <NavLink to={'/profile/' + t.id}>
                            <img
                                src={t.photos.small === null
                                    ? userAvatar
                                    : t.photos.small} alt="аватарка пользователей"
                            />
                        </NavLink>
                    </div>
                    <div className={s.textContainer}>
                        <span>{t.name}</span>
                        <span style={{fontSize: 16}}>
                                    {t.status ? t.status : 'no status'}
                                </span>
                    </div>
                    {t.followed ? <button

                            onClick={() => onClickUnSubHandler(t.id)}>
                            unfollow
                        </button> :
                        <button
                            onClick={() => onClickSubHandler(t.id)}>follow
                        </button>}
                </div>
            )
        })}
    </div>
}