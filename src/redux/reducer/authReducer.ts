import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../storeRedux";
import {headerAPI} from "../../API";

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
        case "SET-AUTH-DATA":{
            return {...state,...action.data, isAuth:true}
        }
        default:
            return {...state}
    }
}

type generalType = setAuthDataACType

export type setAuthDataACType = ReturnType<typeof setAuthData>
export const setAuthData = (id: number, email: string, login: string)=>{
    return{
        type: 'SET-AUTH-DATA',
        data: {id, email, login}
    }
}

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, generalType>
export const thunkSetAuthData = ():ThunkActionType=>
    async dispatch => {
    debugger
        headerAPI.setAuthData().then(data => {
            const {id, email, login} = data.data
            dispatch(setAuthData(id, email, login))
        })
    }