import {userProfilePageType} from './reducer/profilePageReducer';
import {UserType} from './reducer/usersPageReducer';

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
    | setProfileUserDataACType
    | setUserIdNumberACType

type setNewPostClickACType = ReturnType<typeof setNewPostClick>
export const setNewPostClick = () => {
    return {
        type: 'SET-NEW-POST-CLICK'
    } as const
}

type setNewPostEnterACType = ReturnType<typeof setNewPostEnter>
export const setNewPostEnter = (eventKey: string) => {
    return {
        type: 'SET-NEW-POST-ENTER',
        eventKey
    } as const
}

type setPostTextACType = ReturnType<typeof setPostText>
export const setPostText = (text: string) => {
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

type subscribeACType = ReturnType<typeof subscribe>
export const subscribe = (id: string) => {
    return {
        type: 'SUBSCRIBE',
        id,
    } as const
}

type unsubscribeACType = ReturnType<typeof unsubscribe>
export const unsubscribe = (id: string) => {
    return {
        type: 'UNSUBSCRIBE',
        id,
    } as const
}

type setSunscribersACType = ReturnType<typeof setSubscribers>
export const setSubscribers = (users: Array<UserType>) => {
    return {
        type: 'SET-SUBSCRIBERS',
        users
    } as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount,
    } as const
}

type changeCurrentPageACType = ReturnType<typeof changeCurrentPage>
export const changeCurrentPage = (currentPage: number) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        currentPage
    } as const
}

type preloaderACType = ReturnType<typeof changePreloader>
export const changePreloader = (preloader: boolean) => {
    return {
        type: "PRELOADER",
        preloader
    } as const
}

type setProfileUserDataACType = ReturnType<typeof setProfileUserData>
export const setProfileUserData = (data: userProfilePageType) => {
    return {
        type: 'SET-PROFILE-USER-DATA',
        data
    } as const
}

type setUserIdNumberACType = ReturnType<typeof setUserIdNumber>
export const setUserIdNumber = (id: number) => {
    return {
        type: 'SET-USER-ID-NUMBER',
        id
    } as const
}

