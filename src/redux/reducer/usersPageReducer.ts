import {generalType} from "../ac";
import {v1} from "uuid";

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    preloader: boolean
}
export type UserType = {
    name: string
    id: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

const initialState: UsersType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    preloader: false
}

export const usersPageReducer = (state: UsersType = initialState, action: generalType): UsersType => {
    switch (action.type) {
        case "SUBSCRIBE": {
            return {...state, users: state.users.map(t => t.id === action.id ? {...t, followed: true} : {...t})}
        }
        case "UNSUBSCRIBE": {
            return {...state, users: state.users.map(t => t.id === action.id ? {...t, followed: false} : {...t})}
        }
        case "SET-SUBSCRIBERS": {
            return {...state, users: action.users}
        }
        case "SET-TOTAL-USERS-COUNT":{
            return {...state, totalUsersCount: action.totalUsersCount}

        }
        case "CHANGE-CURRENT-PAGE":{
            return {...state, currentPage: action.currentPage}
        }
        case "PRELOADER":{
            return {...state, preloader:action.preloader}
        }
        default:
            return {...state}
    }
}