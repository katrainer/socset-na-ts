import {applyMiddleware, combineReducers, createStore} from 'redux';
import {MessageActionType, messagesPageReducer} from './reducer/messagesPageReducer';
import {ProfileActionType, profilePageReducer} from './reducer/profilePageReducer';
import {sidebarPageReducer} from './reducer/sidebarPageReducer';
import {UserPageActionType, usersPageReducer} from './reducer/usersPageReducer';
import {authReducer, LoginActionType} from './reducer/authReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {CommonActionType, commonReducer} from '../common/commonReducer';
import {AppReducer, AppReducerActionType} from './reducer/appReducer';


export const rootReducer = combineReducers({
    messages: messagesPageReducer,
    profile: profilePageReducer,
    sidebar: sidebarPageReducer,
    userPage: usersPageReducer,
    login: authReducer,
    common: commonReducer,
    AppReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionType =
    | MessageActionType
    | ProfileActionType
    | CommonActionType
    | LoginActionType
    | UserPageActionType
    | AppReducerActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

// @ts-ignore
window.store = store;