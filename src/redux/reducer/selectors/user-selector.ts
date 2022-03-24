import {AppRootStateType} from '../../store';
import {createSelector} from 'reselect';

const getUsersSelector = (state: AppRootStateType)=>{
    return state.userPage.users
}
export const getUsers = createSelector(getUsersSelector, (users)=>{
    return users
})
export const getPageSize = (state: AppRootStateType)=>{
    return state.userPage.pageSize
}
export const getTotalUsersCount = (state: AppRootStateType)=>{
    return state.userPage.totalUsersCount
}
export const getCurrentPage = (state: AppRootStateType)=>{
    return state.userPage.currentPage
}
export const getPreloader = (state: AppRootStateType)=>{
    return state.userPage.preloader
}
export const getFollowingInProgress = (state: AppRootStateType)=>{
    return state.userPage.followingInProgress
}