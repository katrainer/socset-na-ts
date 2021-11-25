import {SidebarProps} from "../store";
import {generalType} from "../ac";
import {v1} from "uuid";

const initialState = [
    {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'Nikita'},
    {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'NNikita'},
    {id: v1(), img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png', name: 'NNNikita'},
]
export const sidebarPageReducer = (state: SidebarProps[]=initialState, action: generalType): SidebarProps[] =>{
    switch (action.type) {
        default: return [...state]
    }
}