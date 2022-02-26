import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../storeRedux";
import {headerAPI, loginAPI} from "../../API";

type authReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: authReducerType = initialState, action: generalType): authReducerType => {
    switch (action.type) {
        case "SET-AUTH-DATA": {
            return {...state, ...action.data}
        }
        default:
            return {...state}
    }
}

type generalType = setAuthDataACType

export type setAuthDataACType = ReturnType<typeof setAuthData>
export const setAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean = true) => {
    return {
        type: 'SET-AUTH-DATA',
        data: {id, email, login, isAuth}
    }
}

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, generalType>
export const thunkSetAuthData = (): ThunkActionType =>
    async dispatch => {
        headerAPI.setAuthData().then(data => {
            const {id, email, login} = data.data
            if (id) dispatch(setAuthData(id, email, login,))
        })
    }
export const ThunkLogIn =
    (email: string, password: string, rememberMe: boolean): ThunkActionType =>
        async dispatch => {
            loginAPI.setLogin(email, password, rememberMe).then(data => {
                if (data.resultCode === 0) {
                    dispatch(thunkSetAuthData())
                }
            })
        }
export const ThunkLogOut = (): ThunkActionType =>
    async dispatch => {
        loginAPI.outLogin().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false))
            }
        })
    }
