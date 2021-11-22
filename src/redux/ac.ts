import React from 'react';

export type generalType = setNewPostClickACType
    | setNewPostEnterACType
    | setPostTextACType
    | setMessageTextACType
    | setNewMessageTextACType

type setNewPostClickACType = ReturnType<typeof setNewPostClickAC>
export const setNewPostClickAC = () => {
    return {
        type: 'SET-NEW-POST-CLICK'
    } as const
}

type setNewPostEnterACType = ReturnType<typeof setNewPostEnterAC>
export const setNewPostEnterAC = (eventKey: string) => {
    return {
        type: 'SET-NEW-POST-ENTER',
        eventKey
    } as const
}

type setPostTextACType = ReturnType<typeof setPostTextAC>
export const setPostTextAC = (text: string) => {
    return {
        type: 'SET-POST-TEXT',
        text
    } as const
}
type setMessageTextACType = ReturnType<typeof setMessageTextAC>
export const setMessageTextAC = (text: string) => {
    return {
        type: 'SET-MESSAGE-TEXT',
        text
    } as const
}

type setNewMessageTextACType = ReturnType<typeof setNewMessageTextAC>
export const setNewMessageTextAC = () => {
    return {
        type: 'SET-NEW-MESSAGE-CLICK'
    } as const
}