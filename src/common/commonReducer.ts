export enum enumCommonActionType {
    changePreloader = 'COMMON/PRELOADER'
}

const initialState: initialStateType = {
    preloader: false
}

export const commonReducer = (state: initialStateType = initialState, action: CommonActionType): initialStateType => {
    switch (action.type) {
        case enumCommonActionType.changePreloader:
            return {...state, ...action.payload}
        default :
            return {...state}
    }
}

//action
export const changePreloaderAC = (preloader: boolean) => {
    return {
        type: enumCommonActionType.changePreloader,
        payload: {preloader}
    } as const
}

//thunk


//type
export type initialStateType = { preloader: boolean }
export type preloaderACType = ReturnType<typeof changePreloaderAC>
export type CommonActionType = preloaderACType