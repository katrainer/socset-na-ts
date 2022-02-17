import axios from "axios";
import {LoginFormData} from "./components/Login/Login";

const instatce = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '9359a22e-adad-4c18-8f69-1475882f26c8'},
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
    },
    getProfileStatus(userId: string) {
        return instatce.get('profile/status/' + userId).then(response => response.data)
    },
    updateProfileStatus(status: string) {
        // debugger
        return instatce.put('profile/status', {status}).then(response => response.data)
    }
}

export const headerAPI = {
    setAuthData() {
        return instatce.get('auth/me').then(response => response.data)
    }
}

export const loginAPI = {
    setLogin(formData: LoginFormData) {
        return instatce.post('auth/login', {
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe
        }).then(response => response.data)
    }
}