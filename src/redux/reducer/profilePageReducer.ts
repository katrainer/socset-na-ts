import {generalType} from "../ac"
import {profilePageType} from "../state"
import {v1} from "uuid";


export const profilePageReducer = (state: profilePageType, action: generalType) => {
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