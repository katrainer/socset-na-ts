import {v1} from "uuid";

export let state = {
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
        ]
    },
    sitebar: [
        {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'Nikita'},
        {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'NNikita'},
        {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'NNNikita'},
    ]
}