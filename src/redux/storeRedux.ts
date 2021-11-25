import {combineReducers, createStore} from "redux";
import { messagesPageReducer } from "./reducer/messagesPageReducer";
import {profilePageReducer} from "./reducer/profilePageReducer";
import {sidebarPageReducer} from "./reducer/sidebarPageReducer";


export const rootReducer = combineReducers({
    messagesPageReducer,
    profilePageReducer,
    sidebarPageReducer
})

export const store = createStore(rootReducer)
export type StoreType = ReturnType<typeof rootReducer>