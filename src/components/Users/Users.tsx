import s from "./Users.module.css";
import userAvatar from "../../assets/img/null_avatar.png";
import React from "react";
import {UserType} from "../../redux/reducer/usersPageReducer";

type UsersFnType = {
    changeCurrentPage: (currentPage: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    onClickUnSub: (id: string) => void
    onClickSub: (id: string) => void
}

export const Users: React.FC<UsersFnType> = (
    {
        changeCurrentPage,
        totalUsersCount,
        pageSize,
        currentPage,
        users,
        onClickUnSub,
        onClickSub,
    }) => {
    const pagesCount = Math.ceil
    (totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onClickUnSubHandler = (id: string) => {
        onClickUnSub(id)
    }
    const onClickSubHandler = (id: string) => {
        onClickSub(id)
    }
    return <>
        {pages.map(t => <span onClick={() => changeCurrentPage(+t)}
                              className={t === currentPage ? s.selectedPage : undefined}
                              key={t}>{t}</span>)}
        {users.map(t => {
            return (
                <div className={s.conteiner} key={t.id}>
                        <span><div>
                            <img
                                src={t.photos.small === null
                                    ? userAvatar
                                    : t.photos.small} alt='аваторки пользователей'/>
                        </div>
                            {t.followed ? <button onClick={() => onClickUnSubHandler(t.id)}>unsubscrib</button> :
                                <button onClick={() => onClickSubHandler(t.id)}>subscrib</button>}</span>
                    <span>
                            {t.name}
                        </span>
                </div>
            )
        })}
    </>
}