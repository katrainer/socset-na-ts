import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '9359a22e-adad-4c18-8f69-1475882f26c8'},
    withCredentials: true
})