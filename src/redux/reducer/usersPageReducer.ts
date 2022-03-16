import {usersAPI, UserType} from "../../API";
import {AppThunk} from "../store";
import {changePreloaderAC, enumCommonActionType, preloaderACType} from "../../common/commonReducer";

export enum enumUsersPageActionType {
    subscribe = 'USERSPAGE/SUBSCRIBE',
    unSubscribe = 'USERSPAGE/UNSUBSCRIBE',
    setUsers = 'USERSPAGE/SET-USERS',
    setTotalUsersCount = 'USERSPAGE/SET-TOTAL-USERS-COUNT',
    changeCurrentPage = 'USERSPAGE/CHANGE-CURRENT-PAGE',
    toggleFollowingInProgress = 'USERSPAGE/TOGGLE-FOLLOWING-IN-PROGRESS',
}

const initialState: UsersType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    preloader: false,
    followingInProgress: [],
}

export const usersPageReducer = (state: UsersType = initialState, action: UserPageActionType): UsersType => {
    switch (action.type) {
        case enumUsersPageActionType.subscribe:
            return {
                ...state, users: state.users.map(t => t.id === action.payload.id
                    ? {...t, followed: true} : {...t})
            }
        case enumUsersPageActionType.unSubscribe:
            return {
                ...state, users: state.users.map(t => t.id === action.payload.id
                    ? {...t, followed: false} : {...t})
            }
        case enumUsersPageActionType.setUsers:
            return {...state, ...action.payload}
        case enumUsersPageActionType.setTotalUsersCount:
            return {...state, ...action.payload}
        case enumUsersPageActionType.changeCurrentPage:
            return {...state, ...action.payload}
        case enumCommonActionType.changePreloader:
            return {...state, ...action.payload}
        case enumUsersPageActionType.toggleFollowingInProgress:
            return {
                ...state,
                followingInProgress: action.payload.isFetching ?
                    [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(t =>
                        t !== action.payload.userId)
            }
        default:
            return {...state}
    }
}

//action
export const subscribeAC = (id: string) => {
    return {
        type: enumUsersPageActionType.subscribe, payload: {id},
    } as const
}
export const unSubscribeAC = (id: string) => {
    return {
        type: enumUsersPageActionType.unSubscribe, payload: {id},
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: enumUsersPageActionType.setUsers, payload: {users}
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: enumUsersPageActionType.setTotalUsersCount, payload: {totalUsersCount},
    } as const
}
export const changeCurrentPageAC = (currentPage: number) => {
    return {
        type: enumUsersPageActionType.changeCurrentPage, payload: {currentPage}
    } as const
}
export const toggleFollowingInProgressAC = (isFetching: boolean, userId: string) => {
    return {
        type: enumUsersPageActionType.toggleFollowingInProgress, payload: {
            isFetching,
            userId
        }
    } as const
}

//thunk
export const setUsersTC = (currentPage: number, pageSize: number): AppThunk =>
    async (dispatch) => {
        dispatch(changePreloaderAC(true))
        const res = await usersAPI.setUsers(currentPage, pageSize)
        dispatch(setUsersAC(res.data.items))
        dispatch(setTotalUsersCountAC(res.data.totalCount))
        dispatch(changePreloaderAC(false))
    }
export const changeCurrentPageTC =
    (currentPage: number, pageSize: number): AppThunk =>
        async (dispatch) => {
            dispatch(changePreloaderAC(true))
            dispatch(changeCurrentPageAC(currentPage))
            const res = await usersAPI.setUsers(currentPage, pageSize)
            dispatch(setUsersAC(res.data.items))
            dispatch(changePreloaderAC(false))
        }
export const unSubscribeTC = (id: string): AppThunk => async (dispatch) => {
    dispatch(toggleFollowingInProgressAC(true, id))
    const res = await usersAPI.unSubscribeAPI(id)
    if (res.data.resultCode === 0) dispatch(unSubscribeAC(id))
    dispatch(toggleFollowingInProgressAC(false, id))
}
export const subscribeTC = (id: string): AppThunk => async (dispatch) => {
    dispatch(toggleFollowingInProgressAC(true, id))
    const res = await usersAPI.subscribe(id)
    if (res.data.resultCode === 0) dispatch(subscribeAC(id))
    dispatch(toggleFollowingInProgressAC(false, id))
}

//type
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    preloader: boolean
    followingInProgress: Array<null | string>
}
export type UserPageActionType = ReturnType<typeof subscribeAC>
    | ReturnType<typeof unSubscribeAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof changeCurrentPageAC>
    | preloaderACType
    | ReturnType<typeof toggleFollowingInProgressAC>