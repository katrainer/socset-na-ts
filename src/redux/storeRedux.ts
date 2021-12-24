import {combineReducers, createStore} from "redux";
import {messagesPageReducer} from "./reducer/messagesPageReducer";
import {profilePageReducer} from "./reducer/profilePageReducer";
import {sidebarPageReducer} from "./reducer/sidebarPageReducer";
import { usersPageReducer } from "./reducer/usersPageReducer";
import {authReducer} from "./reducer/authReducer";


export const rootReducer = combineReducers({
    messagesPageReducer,
    profilePageReducer,
    sidebarPageReducer,
    usersPageReducer,
    authReducer,

})
export const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>