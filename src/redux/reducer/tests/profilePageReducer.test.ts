import {messagesPageReducer, MessagesPageType, setNewMessageTextAC} from "../messagesPageReducer";
import {v1} from "uuid";
import {
    profilePageReducer,
    ProfilePageType,
    setNewPostClickAC,
    setProfileUserDataAC,
    setStatusAC
} from "../profilePageReducer";
import {changePreloaderAC} from "../../../common/commonReducer";

let initialState: ProfilePageType

beforeEach(() => {
        initialState = {
            postsData: [
                {id: v1(), message: 'yo', likeCount: 12},
                {id: v1(), message: 'yoyo', likeCount: 212},
                {id: v1(), message: 'yoyo', likeCount: 212},
            ],
            userProfilePage: null,
            preloader: false,
            status: ''
        }
    }
)

test('PROFILE/SET-NEW-POST-CLICK', () => {
    const endState = profilePageReducer(initialState,
        setNewPostClickAC('aaa'))
    expect(endState.postsData.length).toBe(4)
    expect(endState.postsData[0].message).toBe('aaa')
    expect(endState.postsData[2].message).toBe('yoyo')
})
test('PROFILE/SET-PROFILE-USER-DATA', () => {
    const data = {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: null,
        fullName: 'Nikita',
        userId: 1,
        photos: {
            small: undefined,
            large: undefined,
        },
    }
    const endState = profilePageReducer(initialState,
        setProfileUserDataAC(data))
    expect(endState.userProfilePage?.fullName).toBe('Nikita')
    expect(endState.userProfilePage?.userId).toBe(1)
    expect(endState.userProfilePage?.lookingForAJob).toBe(true)
})
test('PROFILE/SET-STATUS', () => {
    const endState = profilePageReducer(initialState,
        setStatusAC('aaa'))
    expect(endState.status).toBe('aaa')
})
test('COMMON/PRELOADER', () => {
    const endState = profilePageReducer(initialState,
        changePreloaderAC(true))
    expect(endState.preloader).toBe(true)
})