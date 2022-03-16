import {headerAPI, loginAPI} from "../../API";
import {AppThunk} from "../store";

export enum enumAuthActionType {
    setAuthData = 'AUTH/PROFILE/SET-NEW-POST-CLICK',
}

const initialState: authReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: authReducerType = initialState, action: LoginActionType): authReducerType => {
    switch (action.type) {
        case enumAuthActionType.setAuthData:
            return {...state, ...action.payload}
        default:
            return {...state}
    }
}

//action
export const setAuthDataAC = (data: authReducerType) => {
    return {
        type: enumAuthActionType.setAuthData,
        payload: {...data}
    }
}

//thunk
export const setAuthDataTC = (): AppThunk => async (dispatch) => {
    const res = await headerAPI.setAuthData()
    const {id, email, login} = res.data.data
    if (id) dispatch(setAuthDataAC({id, email, login, isAuth: true}))
}
export const logInTC = (email: string, password: string, rememberMe: boolean): AppThunk =>
    async (dispatch) => {
        const res = await loginAPI.setLogin(email, password, rememberMe)
        if (res.data.resultCode === 0) dispatch(setAuthDataTC())
    }
export const logOutTC = (): AppThunk =>
    async (dispatch) => {
        const res = await loginAPI.outLogin()
        if (res.data.resultCode === 0) dispatch(setAuthDataAC({id: null, email: null, login: null, isAuth: false}))
    }

//type
export type authReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type LoginActionType = ReturnType<typeof setAuthDataAC>


