import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '9359a22e-adad-4c18-8f69-1475882f26c8'},
    withCredentials: true
})

export const usersAPI = {
    unSubscribeAPI(id: string) {
        return instance.delete<ResponseType>('follow/' + id)
    },
    subscribe(id: string) {
        return instance.post<ResponseType>('follow/' + id)
    },
    setUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseGetUsersType>
        (`users?page=${currentPage}&count=${pageSize}`)
    },
}
export const profileAPI = {
    getProfileUserData(userId: string) {
        return instance.get<ResponseGetUsersPages>(`profile/` + userId)
    },
    getProfileStatus(userId: string) {
        return instance.get<string>('profile/status/' + userId)
    },
    updateProfileStatus(status: string) {
        return instance.put<ResponseType>('profile/status', {status})
    }
}
export const headerAPI = {
    setAuthData() {
        return instance.get<ResponseType<{
            id: number,
            email: string,
            login: string,
        }>>('auth/me')
    }
}
export const loginAPI = {
    setLogin(email: string, password: string, rememberMe: boolean) {
        return instance.post<{ email: string, password: string, rememberMe: boolean }, AxiosResponse<ResponseType<{ userId: number }>>>
        ('auth/login', {email, password, rememberMe,})
    },
    outLogin() {
        return instance.delete<ResponseType>('auth/login')
    }
}

//type
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export type ResponseGetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
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

export type ResponseGetUsersPages = {
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