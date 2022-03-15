import {v1} from "uuid";

const initialState = [
    {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'Nikita'},
    {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'NNikita'},
    {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'NNNikita'},
] as Array<SiderBarData>

export const sidebarPageReducer = (state: SidebarPageType = initialState, action: any): SidebarPageType => {
    switch (action.type) {
        default:
            return [...state]
    }
}

//action

//thunk

//type
type SidebarPageType = typeof initialState
type SiderBarData = {
    id: string,
    img: string,
    name: string
}