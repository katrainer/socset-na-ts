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
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}

        }
        case "CHANGE-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "PRELOADER": {
            return {...state, preloader: action.preloader}
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

export type preloaderACType = ReturnType<typeof changePreloader>
export const changePreloader = (preloader: boolean) => {
    return {
        type: "PRELOADER",
        preloader
    } as const
}