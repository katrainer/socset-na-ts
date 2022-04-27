import {AppThunk} from '../store';
import {setAuthDataTC} from './authReducer';
import {errorResponse} from '../../utils/util-error';

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
    try {
        await dispatch(setAuthDataTC())
        dispatch(initializedSuccess())
    } catch (e) {
        errorResponse(e)
    }
}

//type
type InitialStateType = typeof initialState
export type AppReducerActionType = ReturnType<typeof initializedSuccess>