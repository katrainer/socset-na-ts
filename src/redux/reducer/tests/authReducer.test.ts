import {authReducer, authReducerType, setAuthDataAC} from "../authReducer";

let initialState: authReducerType
beforeEach(() => {
    initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
    }
})
test('AUTH/PROFILE/SET-NEW-POST-CLICK', ()=>{
    let endState = authReducer(initialState, setAuthDataAC({
        id:1,
        login:'aaa',
        isAuth:true,
        email:'bbb',
    }))
    expect(endState.id).toBe(1)
    expect(endState.login).toBe('aaa')
})