import React from 'react';
import {UsersType, UserType} from './reducer/usersPageReducer';

export type generalType =
    setNewPostClickACType
    | setNewPostEnterACType
    | setPostTextACType
    | setMessageTextACType
    | setNewMessageTextACType
    | subscribeACType
    | unsubscribeACType
    | setSunscribersACType
    | setTotalUsersCountACType
    | changeCurrentPageACType
    | preloaderACType

type setNewPostClickACType = ReturnType<typeof setNewPostClickAC>
export const setNewPostClickAC = () => {
    return {
        type: 'SET-NEW-POST-CLICK'
    } as const
}

type setNewPostEnterACType = ReturnType<typeof setNewPostEnterAC>
export const setNewPostEnterAC = (eventKey: string) => {
    return {
        type: 'SET-NEW-POST-ENTER',
        eventKey
    } as const
}

type setPostTextACType = ReturnType<typeof setPostTextAC>
export const setPostTextAC = (text: string) => {
    return {
        type: 'SET-POST-TEXT',
        text
    } as const
}
type setMessageTextACType = ReturnType<typeof setMessageTextAC>
export const setMessageTextAC = (text: string) => {
    return {
        type: 'SET-MESSAGE-TEXT',
        text
    } as const
}

type setNewMessageTextACType = ReturnType<typeof setNewMessageTextAC>
export const setNewMessageTextAC = () => {
    return {
        type: 'SET-NEW-MESSAGE-CLICK'
    } as const
}

type subscribeACType = ReturnType<typeof subscribeAC>
export const subscribeAC = (id: string) => {
    return {
        type: 'SUBSCRIBE',
        id,
    } as const
}

type unsubscribeACType = ReturnType<typeof unsubscribeAC>
export const unsubscribeAC = (id: string) => {
    return {
        type: 'UNSUBSCRIBE',
        id,
    } as const
}

type setSunscribersACType = ReturnType<typeof setSunscribersAC>
export const setSunscribersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-SUBSCRIBERS',
        users
    } as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount,
    } as const
}

type changeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
export const changeCurrentPageAC = (currentPage: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        currentPage
    } as const
}

type preloaderACType = ReturnType<typeof preloaderAC>
export const preloaderAC = (preloader: boolean) => {
    return {
        type: "PRELOADER",
        preloader
    } as const
}

