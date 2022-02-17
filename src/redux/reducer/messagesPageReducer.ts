import {v1} from "uuid";

export type messagesPageType = {
    dialogsData: DialogsDataProps[]
    messagesData: MessagesDataProps[]
}
export type DialogsDataProps = {
    id: string
    name: string
    img: string
}
export type MessagesDataProps = {
    id: string
    message: string
}

const initialState: messagesPageType = {
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
}

export const messagesPageReducer = (state: messagesPageType = initialState, action: generalType): messagesPageType => {
    switch (action.type) {
        case "SET-NEW-MESSAGE-CLICK": {
            const message = {id: v1(), message: action.text,}
            return {...state, messagesData: [message, ...state.messagesData]}
        }
        default:
            return {...state}
    }
}

type generalType = setNewMessageTextACType


type setNewMessageTextACType = ReturnType<typeof setNewMessageText>
export const setNewMessageText = (text: string) => {
    return {
        type: 'SET-NEW-MESSAGE-CLICK',
        text,
    } as const
}