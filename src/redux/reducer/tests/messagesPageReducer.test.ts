import {messagesPageReducer, MessagesPageType, setNewMessageTextAC} from "../messagesPageReducer";
import {v1} from "uuid";

let initialState: MessagesPageType

beforeEach(() => {
    initialState = {
        dialogsData: [
            {id: v1(), name: 'Nikita', img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png'},
            {id: v1(), name: 'Jana', img: 'https://cs13.pikabu.ru/avatars/3395/x3395805-1845289045.png'},
        ],
        messagesData: [
            {id: v1(), message: 'yo'},
            {id: v1(), message: 'yoyo'},
        ],
    }
})

test('MESSAGES/SET-NEW-MESSAGE-CLICK', () => {
    const endState = messagesPageReducer(initialState,
        setNewMessageTextAC('aaa'))
    expect(endState.messagesData.length).toBe(3)
    expect(endState.messagesData[0].message).toBe('aaa')
    expect(endState.messagesData[2].message).toBe('yoyo')
})