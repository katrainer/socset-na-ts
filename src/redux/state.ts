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
            {id: v1(), name: 'Nikita'},
            {id: v1(), name: 'Jana'},
            {id: v1(), name: 'Daniil'},
            {id: v1(), name: 'Lecha'},
            {id: v1(), name: 'Lecha'},
            {id: v1(), name: 'Lecha'},
        ],
        messagesData: [
            {id: v1(), message: 'yo'},
            {id: v1(), message: 'yoyo'},
            {id: v1(), message: 'yoyoyo'},
            {id: v1(), message: 'yoyoyoyo'},
            {id: v1(), message: 'yoyoyoyo'},
            {id: v1(), message: 'yoyoyoyo'},
        ]
    }
}