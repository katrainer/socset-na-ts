import {AppThunk} from '../store';
import {setAuthDataTC} from './authReducer';

export enum EnumAppActionType {
    initializedSuccess = 'APP/INITIALIZED-SUCCESS'
}

const initialState = {
    initialized: false
}

export const AppReducer = (state: InitialStateType = initialState, action: AppReducerActionType): InitialStateType => {
    switch (action.type) {
        case EnumAppActionType.initializedSuccess:
            return {...state, initialized: true}
        default:
            return {...state}
    }
}

//action
export const initializedSuccess = () => {
    return {type: EnumAppActionType.initializedSuccess}
}

// thunk
export const initializeTC = (): AppThunk => async dispatch => {
    const res = await dispatch(setAuthDataTC())
    dispatch(initializedSuccess())
}

//type
type InitialStateType = typeof initialState
export type AppReducerActionType = ReturnType<typeof initializedSuccess>