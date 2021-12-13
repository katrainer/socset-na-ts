import {generalType} from "../ac"
import {v1} from "uuid";

export type profilePageType = {
    postsData: PostDataProps[]
    newPostText: string
}
export type PostDataProps = {
    id: string
    message: string
    likeCount: number
}

const initialState: profilePageType = {
    postsData: [
        {id: v1(), message: 'yo', likeCount: 12},
        {id: v1(), message: 'yoyo', likeCount: 212},
        {id: v1(), message: 'yoyo', likeCount: 212},
    ],
    newPostText: ''
}

export const profilePageReducer = (state: profilePageType = initialState, action: generalType): profilePageType => {
        switch (action.type) {
        case "SET-NEW-POST-CLICK": {
            const post = {id: v1(), message: state.newPostText, likeCount: 0}
            return {...state, postsData: [post, ...state.postsData], newPostText: ''}
        }
        case "SET-NEW-POST-ENTER": {
            if (action.eventKey === 'Enter') {
                const post = {id: v1(), message: state.newPostText, likeCount: 0}
                return {...state, postsData: [post, ...state.postsData], newPostText: ''}
            }
            return {...state}
        }
        case "SET-POST-TEXT": {
            return {...state, newPostText: action.text}
        }
        default : {
            return {...state}
        }
    }
}