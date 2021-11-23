import {generalType} from "../ac";
import {messagesPageType} from "../state";
import {v1} from "uuid";

export const messagesPageReducer = (state: messagesPageType, action:generalType) =>{
    switch (action.type) {
        case "SET-MESSAGE-TEXT": {
            state.newMessageText = action.text
            return {...state}
        }
        case "SET-NEW-MESSAGE-CLICK": {
            const message = {
                id: v1(),
                message: state.newMessageText,
            }
            state.messagesData.unshift(message)
            state.newMessageText = ''
            return {...state}
        }
        default: return {...state}
    }
}