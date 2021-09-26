import {v1} from "uuid";
import {rerenderApp} from "../rerenderApp";

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

export let state: StateType = {
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
}

export const addNewPost = () => {
    const post = {id: v1(),
        message: state.messagesPage.postText,
        likeCount: 0}
    state.profilePage.postsData.push(post)
    state.messagesPage.postText = ''
    rerenderApp(state)
}

export const changePostText = (text: string) => {
    state.messagesPage.postText = text
    rerenderApp(state)
}