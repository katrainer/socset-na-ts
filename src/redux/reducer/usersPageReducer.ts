export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    preloader: boolean
    followingInProgress: Array<null | string>
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
    preloader: false,
    followingInProgress: [],
}

export const usersPageReducer = (state: UsersType = initialState, action: generalType): UsersType => {
    switch (action.type) {
        case "SUBSCRIBE": {
            return {
                ...state, users: state.users.map(t => t.id === action.id
                    ? {...t, followed: true} : {...t})
            }
        }
        case "UNSUBSCRIBE": {
            return {
                ...state, users: state.users.map(t => t.id === action.id
                    ? {...t, followed: false} : {...t})
            }
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}

        }
        case "CHANGE-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "PRELOADER": {
            return {...state, preloader: action.preloader}
        }
        case "TOGGLE-FOLLOWING-IN-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(t =>
                        t !== action.userId)
            }
        }
        default:
            return {...state}
    }
}

type generalType = subscribeACType
    | unsubscribeACType
    | setSunscribersACType
    | setTotalUsersCountACType
    | changeCurrentPageACType
    | preloaderACType
    | toggleFollowingInProgressACType

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

type setSunscribersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
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

export type preloaderACType = ReturnType<typeof changePreloader>
export const changePreloader = (preloader: boolean) => {
    return {
        type: "PRELOADER",
        preloader
    } as const
}

export type toggleFollowingInProgressACType = ReturnType<typeof toggleFollowingInProgress>
export const toggleFollowingInProgress = (isFetching: boolean, userId: string) => {
    return {
        type: "TOGGLE-FOLLOWING-IN-PROGRESS",
        isFetching,
        userId
    } as const
}