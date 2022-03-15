import {
    changeCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    subscribeAC, toggleFollowingInProgressAC,
    unSubscribeAC,
    usersPageReducer,
    UsersType
} from "../usersPageReducer";

let initialState: UsersType

beforeEach(() => {
    initialState = {
        users: [
            {
                id: '1', photos: {small: null, large: null},
                name: 'Nikita', uniqueUrlName: null, status: 'lol', followed: false
            },
            {
                id: '2', photos: {small: null, large: null},
                name: 'Jana', uniqueUrlName: null, status: 'kek', followed: true
            },
        ],
        pageSize: 20,
        totalUsersCount: 0,
        currentPage: 1,
        preloader: false,
        followingInProgress: [],
    }
})
test('USERSPAGE/SUBSCRIBE', () => {
    let endState = usersPageReducer(initialState,
        subscribeAC('1'))
    expect(endState.users[0].followed).toBe(true)
    expect(endState.users[1].followed).toBe(true)
})
test('USERSPAGE/UNSUBSCRIBE', () => {
    let endState = usersPageReducer(initialState,
        unSubscribeAC('2'))
    expect(endState.users[0].followed).toBe(false)
    expect(endState.users[1].followed).toBe(false)
})
test('USERSPAGE/SET-USERS', () => {
    const newUsers = [
        {
            id: '3', photos: {small: null, large: null},
            name: 'Dima', uniqueUrlName: null, status: 'lol', followed: false
        },
        {
            id: '4', photos: {small: null, large: null},
            name: 'Sasha', uniqueUrlName: null, status: 'kek', followed: true
        },
    ]
    let endState = usersPageReducer(initialState,
        setUsersAC(newUsers))
    expect(endState.users[0].followed).toBe(false)
    expect(endState.users[1].followed).toBe(true)
    expect(endState.users[0].id).toBe('3')
    expect(endState.users[1].id).toBe('4')
})
test('USERSPAGE/SET-TOTAL-USERS-COUNT', () => {
    let endState = usersPageReducer(initialState,
        setTotalUsersCountAC(4))
    expect(endState.totalUsersCount).toBe(4)
})
test('USERSPAGE/CHANGE-CURRENT-PAGE', () => {
    let endState = usersPageReducer(initialState,
        changeCurrentPageAC(4))
    expect(endState.currentPage).toBe(4)
})
test('USERSPAGE/TOGGLE-FOLLOWING-IN-PROGRESS', () => {
    let endState = usersPageReducer(initialState,
        toggleFollowingInProgressAC(true, '2'))
    expect(endState.followingInProgress.length).toBe(1)
    expect(endState.followingInProgress).toStrictEqual(['2'])
})