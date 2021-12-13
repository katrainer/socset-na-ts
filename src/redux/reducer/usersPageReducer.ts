import {generalType} from "../ac";
import {v1} from "uuid";

export type UsersType = Array<UserType>
export type UserType = {
    name: string
    id: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}

// const initialState: initialStateType = [
//     { id: v1(), avatar: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'Nikita', location: { city: 'Moscow', country: 'Rus' }, subscribe: true },
//     { id: v1(), avatar: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'Jana', location: { city: 'spb', country: 'Rus' }, subscribe: false },
//     { id: v1(), avatar: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'Sasha', location: { city: 'Olonetsk-city', country: 'Rus' }, subscribe: true },
// ]

const initialState: UsersType = [

]

export const usersPageReducer = (state:UsersType = initialState, action: generalType):UsersType => {
    switch (action.type) {
        case "SUBSCRIBE":{
            return [...state.map(t=>t.id===action.id?{...t, followed: true}:{...t})]
        }
        case "UNSUBSCRIBE": {
            return [...state.map(t=>t.id===action.id?{...t, followed: false}:{...t})]
        }
        case "SET-SUBSCRIBERS": {
            return [...action.state]
        }
        default:
            return [...state]
    }
}