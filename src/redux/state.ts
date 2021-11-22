import React from "react";
import {v1} from "uuid";
import {generalType} from "./ac";

type StoreType = {
    _state: StateType
    setNewPostClick: () => void
    setNewPostEnter: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
    setPostText: (text: string) => void
    subscribe: (observer: () => void) => void
    callSubscriber: () => void
    _getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}
export type StateType = {
    profilePage: {
        postsData: PostDataProps[]
    }
    messagesPage: {
        dialogsData: DialogsDataProps[]
        messagesData: MessagesDataProps[]
        postText: string
    }
    sidebar: SidebarProps[]
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

export type ActionsTypes = SetNewPostClickActionType
    | SetNewPostEnterActionType
    | SetPostTextActiontype
type SetNewPostClickActionType = {
    type: 'SET-NEW-POST-CLICK'
}
type SetNewPostEnterActionType = {
    type: 'SET-NEW-POST-ENTER'
    eventKey: string
}
type SetPostTextActiontype = {
    type: 'SET-POST-TEXT'
    text: string
}


export let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: 'yo', likeCount: 12},
                {id: v1(), message: 'yoyo', likeCount: 212},
                {id: v1(), message: 'yoyo', likeCount: 212},
            ]
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
            postText: '',
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

    setNewPostClick() {
        const post = {
            id: v1(),
            message: this._state.messagesPage.postText,
            likeCount: 0
        }
        this._state.profilePage.postsData.unshift(post)
        this._state.messagesPage.postText = ''
        this.callSubscriber()
    },
    setNewPostEnter(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === 'Enter') {
            const post = {
                id: v1(),
                message: this._state.messagesPage.postText,
                likeCount: 0
            }
            this._state.profilePage.postsData.unshift(post)
            this._state.messagesPage.postText = ''
            this.callSubscriber()
        }
    },
    setPostText(text: string) {
        this._state.messagesPage.postText = text
        this.callSubscriber()
    },
    dispatch(action: generalType) {
        if (action.type === 'SET-NEW-POST-CLICK') {
            const post = {
                id: v1(),
                message: this._state.messagesPage.postText,
                likeCount: 0
            }
            this._state.profilePage.postsData.unshift(post)
            this._state.messagesPage.postText = ''
            this.callSubscriber()

        } else if (action.type === 'SET-NEW-POST-ENTER') {
            if (action.eventKey === 'Enter') {
                const post = {
                    id: v1(),
                    message: this._state.messagesPage.postText,
                    likeCount: 0
                }
                this._state.profilePage.postsData.unshift(post)
                this._state.messagesPage.postText = ''
                this.callSubscriber()
            }
        } else if (action.type === 'SET-POST-TEXT') {
            this._state.messagesPage.postText = action.text
            this.callSubscriber()
        }
    }
}