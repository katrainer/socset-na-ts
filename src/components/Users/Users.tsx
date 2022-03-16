import s from "./Users.module.css";
import userAvatar from "../../assets/img/null_avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../API";

type UsersFnType = {
    thunkChangeCurrentPage: (currentPage: number, pageSize: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    thunkUnSubscribe: (id: string) => void
    thunkSubscribe: (id: string) => void
    followingInProgress: Array<null | string>
}

export const Users: React.FC<UsersFnType> = (
    {
        thunkChangeCurrentPage,
        totalUsersCount,
        pageSize,
        currentPage,
        users,
        thunkUnSubscribe,
        thunkSubscribe,
        followingInProgress,
    }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onClickUnSubHandler = (id: string) => {
        thunkUnSubscribe(id)
    }
    const onClickSubHandler = (id: string) => {
        thunkSubscribe(id)
    }
    return <>
        {pages.map(t => <span
            onClick={() => thunkChangeCurrentPage(+t, pageSize)}
            className={t === currentPage ? s.selectedPage : undefined}
            key={t}>{t}
        </span>)}
        {users.map(t => {
            return (
                <div className={s.conteiner} key={t.id}>
                        <span><div>
                            <NavLink to={'/profile/' + t.id}>
                            <img
                                src={t.photos.small === null
                                    ? userAvatar
                                    : t.photos.small} alt='аватарка пользователей'
                            />
                            </NavLink>
                        </div>
                            {t.followed ? <button
                                    disabled={followingInProgress.some(id => id === t.id
                                    )}
                                    onClick={() => onClickUnSubHandler(t.id)}>
                                    unsubscrib
                                </button> :
                                <button
                                    disabled={followingInProgress.some(id => id === t.id)}
                                    onClick={() => onClickSubHandler(t.id)}>subscrib
                                </button>}
                        </span>
                    <span>{t.name}</span>
                </div>
            )
        })}
    </>
}