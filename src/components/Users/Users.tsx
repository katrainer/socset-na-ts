import s from './Users.module.css';
import userAvatar from '../../assets/img/null_avatar.png';
import React, {useCallback, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Paginator} from '../../common/Paginator/Paginator';
import {useDispatch, useSelector} from 'react-redux';
import {changeCurrentPageAC, setUsersTC, subscribeTC, unSubscribeTC} from '../../redux/reducer/usersPageReducer';
import {AppRootStateType} from '../../redux/store';
import {UserType} from '../../api/userApi';

export const Users = () => {
    const users = useSelector<AppRootStateType, UserType[]>(state => state.userPage.users)
    const totalUsersCount = useSelector<AppRootStateType, number>(state => state.userPage.totalUsersCount)
    const page = useSelector<AppRootStateType, number>(state => state.userPage.currentPage)
    const followingInProgress = useSelector<AppRootStateType, (string | null)[]>(state => state.userPage.followingInProgress)
    const dispatch = useDispatch()
    const onClickUnSubHandler = (id: string) => {
        dispatch(unSubscribeTC(id))
    }
    const onClickSubHandler = (id: string) => {
        dispatch(subscribeTC(id))
    }
    const changeCurrentPageHandler = useCallback((page: number) => {
        dispatch(changeCurrentPageAC(page))
    }, [])

    useEffect(() => {
        dispatch(setUsersTC())
    }, [page])

    return <div className={s.container}>
        <Paginator totalCount={totalUsersCount} pageCount={10} callback={changeCurrentPageHandler}
        />
        <div className={s.containerUsers}>
            {users.map(t => {
                return (
                    <div className={s.containerUser} key={t.id}>
                        <div className={s.imgAndName}>
                            <div>
                                <NavLink to={'/profile/' + t.id}>
                                    <img
                                        src={t.photos.small === null
                                            ? userAvatar
                                            : t.photos.small} alt="аватарка пользователей"
                                    />
                                </NavLink>
                            </div>
                            <div className={s.statusAndName}>
                                <span>{t.name}</span>
                                <span style={{fontSize: 16}}>
                                    {t.status ? t.status : 'no status'}
                                </span>
                            </div>
                        </div>
                        {t.followed ? <button
                                disabled={followingInProgress.some(id => id === t.id
                                )}
                                onClick={() => onClickUnSubHandler(t.id)}>
                                unfollow
                            </button> :
                            <button
                                disabled={followingInProgress.some(id => id === t.id)}
                                onClick={() => onClickSubHandler(t.id)}>follow
                            </button>}
                    </div>

                )
            })}
        </div>
    </div>
}