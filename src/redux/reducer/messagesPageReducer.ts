export enum enumMessagesActionType {
}

const initialState = {
    messagesData: [
        {message: 'Встреча в субботу ещё в силе?', time: '29/04/22 16:52'},
        {message: 'Добрый день! Вы ещё продаете шоги?', time: '28/04/22 17:52'},
        {message: 'Привет! Давно не виделись, как дела?', time: '27/04/22 18:52'},
        {message: 'Вот офер на 3000$, хотите быть у нас джуном?', time: '26/04/22 19:52'},
        {message: 'Тебя точно возьмут на работу!', time: '25/04/22 21:52'},
        {message: 'Какая классная соц сеть у тебя получилась!', time: '24/04/22 20:52'},

    ],
}
export const messagesPageReducer = (state: initialStateType = initialState, action: MessageActionType): initialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

//action

//type
export type MessagesPageType = {
    dialogsData: DialogsDataProps[]
    messagesData: MessagesDataProps[]
}
export type DialogsDataProps = {
    id: string
    name: string
    img: string
}
export type MessagesDataProps = {
    id: string
    message: string
}


//type
type initialStateType = typeof initialState
export type MessageActionType = any