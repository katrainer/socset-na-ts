import React from "react";
import {v1} from "uuid";
import {generalType} from "./ac";
import { messagesPageReducer } from "./reducer/messagesPageReducer";
import {profilePageReducer} from "./reducer/profilePageReducer";

type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    callSubscriber: () => void
    _getState: () => StateType
    dispatch: (action: generalType) => void
}
export type StateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
    sidebar: SidebarProps[]
}
export type profilePageType = {
    postsData: PostDataProps[]
    newPostText: string
}
export type messagesPageType = {
    dialogsData: DialogsDataProps[]
    messagesData: MessagesDataProps[]
    newMessageText: string
}
type PostDataProps = {
    id: string
    message: string
    likeCount: number
}
type DialogsDataProps = {
    id: string
    name: string
    img: string
}
type MessagesDataProps = {
    id: string
    message: string
}
type SidebarProps = {
    id: string
    img: string
    name: string
}

export let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: 'yo', likeCount: 12},
                {id: v1(), message: 'yoyo', likeCount: 212},
                {id: v1(), message: 'yoyo', likeCount: 212},
            ],
            newPostText: ''
        },
        messagesPage: {
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
        },
        sidebar: [
            {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'Nikita'},
            {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'NNikita'},
            {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'NNNikita'},
        ]
    },
    _getState() {
        return this._state
    },

    callSubscriber() {
        console.log('aaa')
    },
    subscribe: function (observer: () => void) {
        this.callSubscriber = observer
    },

    dispatch(action: generalType) {
        profilePageReducer(this._state.profilePage, action)
        messagesPageReducer(this._state.messagesPage, action)
        this.callSubscriber()
    }
}