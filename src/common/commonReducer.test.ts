import {changePreloaderAC, commonReducer, initialStateType} from "./commonReducer";

let initialState: initialStateType

beforeEach(() => {
    initialState = {
        preloader: false
    }
})
test('COMMON/PRELOADER', () => {
    const endState = commonReducer(initialState, changePreloaderAC(true))
    expect(endState.preloader).toBe(true)
})