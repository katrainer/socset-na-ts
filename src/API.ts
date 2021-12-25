import axios from "axios";

const instatce = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '399acd4d-bc4b-4b16-8bfa-47f301f413d5'},
    withCredentials: true
})

export const usersAPI = {
    unSubscribeAPI(id: string) {
        return instatce.delete('follow/' + id).then(response => response.data)
    },
    subscribe(id: string) {
        return instatce.post('follow/' + id).then(response => response.data)
    },
    setUsers(currentPage: number, pageSize: number) {
        return instatce.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    setTotalUsersCount() {
        return instatce.get('users').then(response => response.data)
    },
    changeCurrentPage(currentPage: number, pageSize: number) {
        return instatce.get(`users?page=${currentPage}
        &count=${pageSize}`).then(response => response.data)
    }
}

export const profileAPI = {
    setProfileUserData(userId: string) {
        return instatce.get(`profile/` + userId).then(response => response.data)
    }
}

export const headerAPI = {
    setAuthData() {
        return instatce.get('me').then(response => response.data)
    }
}