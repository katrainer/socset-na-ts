import {generalType} from "../ac";
import {messagesPageType, StateType} from "../store";
import {v1} from "uuid";

const initialState = {
    dialogsData: [
        {id: v1(), name: 'Nikita', img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png'},
        {id: v1(), name: 'Jana', img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png'},
        {id: v1(), name: 'Daniil', img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png'},
        {id: v1(), name: 'Lecha', img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png'},
        {id: v1(), name: 'Lecha', img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png'},
        {id: v1(), name: 'Lecha', img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png'},
    ],
    messagesData: [
        {id: v1(), message: 'yo'},
        {id: v1(), message: 'yoyo'},
        {id: v1(), message: 'yoyoyo'},
        {id: v1(), message: 'yoyoyoyo'},
        {id: v1(), message: 'yoyoyoyo'},
        {id: v1(), message: 'yoyoyoyo'},
    ],
    newMessageText: '',
}

export const messagesPageReducer = (state: messagesPageType = initialState, action:generalType):messagesPageType =>{
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