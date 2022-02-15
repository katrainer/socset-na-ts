import {v1} from "uuid";
import {changePreloader, preloaderACType} from "./usersPageReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../storeRedux";
import {profileAPI} from "../../API";

export type profilePageType = {
    postsData: PostDataProps[]
    newPostText: string
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

const initialState: profilePageType = {
    postsData: [
        {id: v1(), message: 'yo', likeCount: 12},
        {id: v1(), message: 'yoyo', likeCount: 212},
        {id: v1(), message: 'yoyo', likeCount: 212},
    ],
    newPostText: '',
    userProfilePage: null,
    preloader: false,
    status: ''
}

export const profilePageReducer = (state: profilePageType = initialState, action: generalType): profilePageType => {
    switch (action.type) {
        case "SET-NEW-POST-CLICK": {
            const post = {id: v1(), message: state.newPostText, likeCount: 0}
            return {...state, postsData: [post, ...state.postsData], newPostText: ''}
        }
        case "SET-NEW-POST-ENTER": {
            if (action.eventKey === 'Enter') {
                const post = {id: v1(), message: state.newPostText, likeCount: 0}
                return {...state, postsData: [post, ...state.postsData], newPostText: ''}
            }
            return {...state}
        }
        case "SET-POST-TEXT": {
            return {...state, newPostText: action.text}
        }
        case "SET-PROFILE-USER-DATA": {
            return {...state, userProfilePage: action.data}
        }
        case "PRELOADER": {
            return {...state, preloader: action.preloader}
        }
        case "GET-STATUS": {
            console.log(action.status)
            return {...state, status: action.status}
        }
        default : {
            return {...state}
        }
    }
}
type generalType = setNewPostClickACType
    | setNewPostEnterACType
    | setPostTextACType
    | setProfileUserDataACType
    | preloaderACType
    | getStatusType
    // | changeStatusType

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
type setProfileUserDataACType = ReturnType<typeof setProfileUserData>
export const setProfileUserData = (data: userProfilePageType) => {
    return {
        type: 'SET-PROFILE-USER-DATA',
        data
    } as const
}

type getStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: 'GET-STATUS',
        status,
    } as const
}

// type changeStatusType = ReturnType<typeof changeStatus>
// export const changeStatus = (status: string) => {
//     return {
//         type: 'CHANGE-STATUS',
//         status,
//     } as const
// }


type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, generalType>
export const thunkSetProfileUserData = (param: any): ThunkActionType =>
    async dispatch => {
        dispatch(changePreloader(true))
        let userId = param.match.params.userId
        if (!userId) {
            userId = '16550'
        }
        profileAPI.setProfileUserData(userId).then(data => {
            dispatch(changePreloader(false))
            dispatch(setProfileUserData(data))
        })
    }
export const thunkGETStatus = (param: any): ThunkActionType =>
    async dispatch => {
        let userId = param.match.params.userId
        if (!userId) {
            userId = '16550'
        }
        profileAPI.getProfileStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
export const thunkUpdateStatus = (status: string): ThunkActionType =>
    async dispatch => {
    // debugger
        profileAPI.updateProfileStatus(status).then(data => {
            // debugger
            // console.log(data)
            if (data.resultCode===0){
                dispatch(setStatus(status))
            }
        })
    }

