import {v1} from "uuid";

export enum enumMessagesActionType {
    setNewMessageText = 'MESSAGES/SET-NEW-MESSAGE-CLICK'
}

const initialState: MessagesPageType = {
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
export const messagesPageReducer = (state: MessagesPageType = initialState, action: MessageActionType): MessagesPageType => {
    switch (action.type) {
        case enumMessagesActionType.setNewMessageText:
            return {
                ...state, messagesData: [{...action.payload},
                    ...state.messagesData]
            }
        default:
            return {...state}
    }
}

//action
export const setNewMessageTextAC = (message: string) => {
    return {
        type: enumMessagesActionType.setNewMessageText,
        payload: {message, id: v1()},
    } as const
}

//type
export type MessagesPageType = {
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

export type MessageActionType = ReturnType<typeof setNewMessageTextAC>