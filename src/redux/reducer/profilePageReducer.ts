import {generalType} from "../ac"
import {profilePageType, StateType} from "../store"
import {v1} from "uuid";

const initialState = {
    postsData: [
        {id: v1(), message: 'yo', likeCount: 12},
        {id: v1(), message: 'yoyo', likeCount: 212},
        {id: v1(), message: 'yoyo', likeCount: 212},
    ],
    newPostText: ''
}

export const profilePageReducer = (state:profilePageType  = initialState, action: generalType):profilePageType => {
    switch (action.type) {
        case "SET-NEW-POST-CLICK": {
            const post = {
                id: v1(),
                message: state.newPostText,
                likeCount: 0
            }
            state.postsData.unshift(post)
            state.newPostText = ''
            return {...state}
        }
        case "SET-NEW-POST-ENTER": {
            if (action.eventKey === 'Enter') {
                const post = {
                    id: v1(),
                    message: state.newPostText,
                    likeCount: 0
                }
                state.postsData.unshift(post)
                state.newPostText = ''
            }
            return {...state}
        }
        case "SET-POST-TEXT": {
            state.newPostText = action.text
            return {...state}
        }
        default : {
            return {...state}
        }
    }
}