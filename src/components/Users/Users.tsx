import s from "./Users.module.css";
import userAvatar from "../../assets/img/null_avatar.png";
import React from "react";
import {UserType} from "../../redux/reducer/usersPageReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API";

type UsersFnType = {
    changeCurrentPage: (currentPage: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    unSubscribe: (id: string) => void
    subscribe: (id: string) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void
    followingInProgress: Array<null | string>
}

export const Users: React.FC<UsersFnType> = (
    {
        changeCurrentPage,
        totalUsersCount,
        pageSize,
        currentPage,
        users,
        unSubscribe,
        subscribe,
        toggleFollowingInProgress, followingInProgress,
    }) => {
    const pagesCount = Math.ceil
    (totalUsersCount / pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onClickUnSubHandler = (id: string) => {
        toggleFollowingInProgress(true, id)
        usersAPI.unSubscribeAPI(id).then(data => {
            if (data.resultCode === 0) {
                unSubscribe(id)
            }
            toggleFollowingInProgress(false, id)
        })
    }
    const onClickSubHandler = (id: string) => {
        toggleFollowingInProgress(true, id)
        usersAPI.subscribe(id).then(data => {
            if (data.resultCode === 0) {
                subscribe(id)
            }
            toggleFollowingInProgress(false, id)
        })
    }
    return <>
        {pages.map(t => <span onClick={() => changeCurrentPage(+t)}
                              className={t === currentPage ? s.selectedPage : undefined}
                              key={t}>{t}</span>)}
        {users.map(t => {
            return (
                <div className={s.conteiner} key={t.id}>
                        <span><div>
                            <NavLink to={'/profile/' + t.id}>
                            <img
                                src={t.photos.small === null
                                    ? userAvatar
                                    : t.photos.small} alt='аваторки пользователей'
                            />
                            </NavLink>
                        </div>
                            {t.followed ? <button
                                    disabled={followingInProgress.some(id => {
                                        console.log(id, t.id, 'ID')
                                        return id == t.id
                                    })}
                                    onClick={() => onClickUnSubHandler(t.id)}>unsubscrib</button> :
                                <button
                                    disabled={followingInProgress.some(id => id == t.id)}
                                    onClick={() => onClickSubHandler(t.id)}>subscrib</button>}</span>
                    <span>
                            {t.name}
                        </span>
                </div>
            )
        })}
    </>
}