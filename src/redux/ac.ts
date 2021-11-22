import React from 'react';

export type generalType = setNewPostClickACType
    | setNewPostEnterACType
    | setPostTextACType

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