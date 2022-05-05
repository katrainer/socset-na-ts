import {v1} from 'uuid';
import {AppThunk} from '../store';
import {profileAPI, ProfileDataType, updateProfileInfoType} from '../../api/profileApi';
import {changePreloaderAC, enumCommonActionType, preloaderACType} from '../../common/commonReducer';
import {errorResponse} from '../../utils/util-error';

export enum enumProfileActionType {
    setNewPostClick = 'PROFILE/SET-NEW-POST-CLICK',
    setProfileUserData = 'PROFILE/SET-PROFILE-USER-DATA',
    setStatus = 'PROFILE/SET-STATUS',
    updatePhotos = 'PROFILE/UPDATE-PHOTOS',
    updateProfileInfo = 'PROFILE/UPDATE-PROFILE-INFO',
}

const initialState = {
    postsData: [
        {id: v1(), message: 'Memento mori', likeCount: 12},
        {id: v1(), message: 'How are you guys?', likeCount: 212},
        {id: v1(), message: 'Hello world!', likeCount: 1212},
    ],
    userProfilePage: {} as ProfileDataType,
    preloader: false,
    status: '',
}
export const profilePageReducer = (state: initialStateType = initialState, action: ProfileActionType): initialStateType => {
    switch (action.type) {
        case enumProfileActionType.setNewPostClick:
            return {
                ...state,
                postsData: [action.payload, ...state.postsData]
            }
        case enumProfileActionType.setProfileUserData:
        case enumCommonActionType.changePreloader:
        case enumProfileActionType.setStatus:
            return {...state, ...action.payload}
        case enumProfileActionType.updatePhotos:
            return {...state, userProfilePage: {...state.userProfilePage, ...action.payload.photos}}
        default :
            return state
    }
}

//action
export const setNewPostClickAC = (message: string) => {
    return {
        type: enumProfileActionType.setNewPostClick,
        payload: {message, likeCount: 0, id: v1()},
    } as const
}
export const setProfileUserDataAC = (userProfilePage: ProfileDataType) => {
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
const updatePhotosAC = (photos: { small: string, large: string }) => {
    return {
        type: enumProfileActionType.updatePhotos,
        payload: {photos}
    } as const
}


//thunk
export const setProfileUserDataTC = (param: any): AppThunk =>
    async (dispatch, getState) => {
        dispatch(changePreloaderAC(true))
        let userId = param.match.params.userId
        if (!userId) {
            const id = getState().login.id
            userId = id
        }
        try {
            const res = await profileAPI.getProfileUserData(userId)
            dispatch(setProfileUserDataAC(res.data))
        } catch (e) {
            errorResponse(e)
        }
        dispatch(changePreloaderAC(false))
    }
export const getStatusTC = (param: any): AppThunk =>
    async (dispatch, getState) => {
        dispatch(changePreloaderAC(true))
        let userId = param.match.params.userId
        if (!userId) {
            const id = getState().login.id
            userId = id
        }
        try {
            const res = await profileAPI.getProfileStatus(userId)
            dispatch(setStatusAC(res.data))
        } catch (e) {
            errorResponse(e)
        }
        dispatch(changePreloaderAC(false))
    }
export const updateStatusTC = (status: string): AppThunk =>
    async dispatch => {
        dispatch(changePreloaderAC(true))
        const res = await profileAPI.updateProfileStatus(status)
        if (res.data.resultCode === 0) dispatch(setStatusAC(status))
        dispatch(changePreloaderAC(false))
    }
export const updatePhotosTC = (photo: File): AppThunk => async dispatch => {
    dispatch(changePreloaderAC(true))
    try {
        const res = await profileAPI.updateProfilePhoto(photo)
        dispatch(updatePhotosAC(res.data.data))
    } catch (e) {
        errorResponse(e)
    }
    dispatch(changePreloaderAC(false))
}

//type
type initialStateType = typeof initialState
export type ProfileActionType = ReturnType<typeof setNewPostClickAC>
    | ReturnType<typeof setProfileUserDataAC>
    | preloaderACType
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof updatePhotosAC>
