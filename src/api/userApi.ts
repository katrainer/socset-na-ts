import {instance} from './apiConfig/apiConfig';

export const usersAPI = {
    unSubscribeAPI(id: string) {
        return instance.delete<ResponseType>('follow/' + id)
    },
    subscribe(id: string) {
        return instance.post<ResponseType>('follow/' + id)
    },
    setUsers(page: number, count: number, term: string = '') {
        const par = {page, count, term}
        return instance.get<ResponseGetUsersType>
        ('users', {params: par})
    },
    setFriends() {
        const par = {page: 1, count: 100, friend: true}
        return instance.get<ResponseGetUsersType>
        ('users', {params: par})
    }
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}
export type ResponseGetUsersType = {
    items: Array<UserType>
    totalCount: number
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