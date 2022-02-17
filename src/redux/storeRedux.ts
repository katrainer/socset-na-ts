import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagesPageReducer} from "./reducer/messagesPageReducer";
import {profilePageReducer} from "./reducer/profilePageReducer";
import {sidebarPageReducer} from "./reducer/sidebarPageReducer";
import {usersPageReducer} from "./reducer/usersPageReducer";
import {authReducer} from "./reducer/authReducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


export const rootReducer = combineReducers({
    messagesPageReducer,
    profilePageReducer,
    sidebarPageReducer,
    usersPageReducer,
    authReducer,
    form: formReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppStateType = ReturnType<typeof rootReducer>