import {AppThunk} from '../store';
import {errorResponse} from '../../utils/util-error';
import {authAPI} from '../../api/authApi';
import {changePreloaderAC} from '../../common/commonReducer';

export enum enumAuthActionType {
    setAuthData = 'AUTH/PROFILE/SET-NEW-POST-CLICK',
}

const initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
}

export const authReducer = (state: initialStateType = initialState, action: LoginActionType): initialStateType => {
    switch (action.type) {
        case enumAuthActionType.setAuthData:
            return {...state, ...action.payload}
        default:
            return {...state}
    }
}

//action
export const setAuthDataAC = (data: initialStateType) => {
    return {
        type: enumAuthActionType.setAuthData,
        payload: {...data}
    }
}

//thunk
export const setAuthDataTC = (): AppThunk => async dispatch => {
    dispatch(changePreloaderAC(true))
    try {
        const res = await authAPI.setAuthData()
        const {id, email, login} = res.data.data
        if (id) dispatch(setAuthDataAC({id, email, login, isAuth: true}))
        return 'aaa'
    } catch (e) {
        errorResponse(e)
    }
    dispatch(changePreloaderAC(false))
}
export const logInTC = (email: string, password: string, rememberMe: boolean): AppThunk =>
    async dispatch => {
        dispatch(changePreloaderAC(true))
        try {
            const res = await authAPI.setLogin(email, password, rememberMe)
            if (res.data.resultCode === 0) dispatch(setAuthDataTC())
        } catch (e) {
            errorResponse(e)
        }
        dispatch(changePreloaderAC(false))
    }
export const logOutTC = (): AppThunk => async dispatch => {
    dispatch(changePreloaderAC(true))
    try {
        const res = await authAPI.outLogin()
        if (res.data.resultCode === 0) dispatch(setAuthDataAC({id: 0, email: '', login: '', isAuth: false}))
    } catch (e) {
        errorResponse(e)
    }
    dispatch(changePreloaderAC(false))
}

//type
type initialStateType = typeof initialState
export type LoginActionType = ReturnType<typeof setAuthDataAC>


