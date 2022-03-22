import {v1} from "uuid";
import {AppThunk} from "../store";
import {headerAPI, profileAPI} from '../../API';
import {changePreloaderAC, enumCommonActionType, preloaderACType} from "../../common/commonReducer";

export enum enumProfileActionType {
    setNewPostClick = 'PROFILE/SET-NEW-POST-CLICK',
    setProfileUserData = 'PROFILE/SET-PROFILE-USER-DATA',
    setStatus = 'PROFILE/SET-STATUS',
}

const initialState: ProfilePageType = {
    postsData: [
        {id: v1(), message: 'yo', likeCount: 12},
        {id: v1(), message: 'yoyo', likeCount: 212},
        {id: v1(), message: 'yoyo', likeCount: 212},
    ],
    userProfilePage: null,
    preloader: false,
    status: ''
}
export const profilePageReducer = (state: ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {
    switch (action.type) {
        case enumProfileActionType.setNewPostClick:
            return {
                ...state, postsData: [{...action.payload},
                    ...state.postsData]
            }
        case enumProfileActionType.setProfileUserData:
            return {...state, ...action.payload}
        case enumCommonActionType.changePreloader:
            return {...state, ...action.payload}
        case enumProfileActionType.setStatus:
            return {...state, ...action.payload}
        default :
            return {...state}
    }
}

//action
export const setNewPostClickAC = (message: string) => {
    return {
        type: enumProfileActionType.setNewPostClick,
        payload: {message, likeCount: 0, id: v1()},
    } as const
}
export const setProfileUserDataAC = (userProfilePage: userProfilePageType) => {
    return {
        type: enumProfileActionType.setProfileUserData,
        payload: {userProfilePage}
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: enumProfileActionType.setStatus,
        payload: {status},
    } as const
}

//thunk
export const setProfileUserDataTC = (param: any): AppThunk =>
    async (dispatch) => {
        dispatch(changePreloaderAC(true))
        let userId = param.match.params.userId
        if (!userId) {
            const res = await headerAPI.setAuthData()
            const {id,} = res.data.data
            userId = id
        }
        const res = await profileAPI.getProfileUserData(userId)
        dispatch(setProfileUserDataAC(res.data))
        dispatch(changePreloaderAC(false))
    }
export const getStatusTC = (param: any): AppThunk =>
    async (dispatch) => {
        let userId = param.match.params.userId
        if (!userId) {
            const res = await headerAPI.setAuthData()
            const {id,} = res.data.data
            userId = id
        }
        const res = await profileAPI.getProfileStatus(userId)
        dispatch(setStatusAC(res.data))
    }
export const updateStatusTC = (status: string): AppThunk =>
    async (dispatch) => {
        const res = await profileAPI.updateProfileStatus(status)
        if (res.data.resultCode === 0) dispatch(setStatusAC(status))
    }

//type
export type ProfilePageType = {
    postsData: PostDataProps[]
    userProfilePage: userProfilePageType | null
    preloader: boolean
    status: string
}
export type PostDataProps = {
    id: string
    message: string
    likeCount: number
}
export type userProfilePageType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | undefined
        large: string | undefined
    }
}
export type ProfileActionType = ReturnType<typeof setNewPostClickAC>
    | ReturnType<typeof setProfileUserDataAC>
    | preloaderACType
    | ReturnType<typeof setStatusAC>