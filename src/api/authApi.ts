import {instance} from './apiConfig/apiConfig';
import {AxiosResponse} from 'axios';


export const authAPI = {
    setAuthData() {
        return instance.get<ResponseType<{
            id: number,
            email: string,
            login: string,
        }>>('auth/me')
    },
    setLogin(email: string, password: string, rememberMe: boolean) {
        return instance.post<{ email: string, password: string, rememberMe: boolean }, AxiosResponse<ResponseType<{ userId: number }>>>
        ('auth/login', {email, password, rememberMe,})
    },
    outLogin() {
        return instance.delete<ResponseType>('auth/login')
    }
}
type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}