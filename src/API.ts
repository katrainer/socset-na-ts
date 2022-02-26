import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '9359a22e-adad-4c18-8f69-1475882f26c8'},
    withCredentials: true
})

export const usersAPI = {
    unSubscribeAPI(id: string) {
        return instance.delete('follow/' + id).then(response => response.data)
    },
    subscribe(id: string) {
        return instance.post('follow/' + id).then(response => response.data)
    },
    setUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    setTotalUsersCount() {
        return instance.get('users').then(response => response.data)
    },
    changeCurrentPage(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}
        &count=${pageSize}`).then(response => response.data)
    }
}

export const profileAPI = {
    setProfileUserData(userId: string) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    getProfileStatus(userId: string) {
        return instance.get('profile/status/' + userId).then(response => response.data)
    },
    updateProfileStatus(status: string) {
        return instance.put('profile/status', {status}).then(response => response.data)
    }
}

export const headerAPI = {
    setAuthData() {
        return instance.get('auth/me').then(response => response.data)
    }
}

export const loginAPI = {
    setLogin(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {
            email, password, rememberMe,
        }).then(response => response.data)
    },
    outLogin() {
        return instance.delete('auth/login').then(response => response.data)
    }
}