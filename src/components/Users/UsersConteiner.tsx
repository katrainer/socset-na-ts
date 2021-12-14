import React from 'react';
import {connect} from "react-redux";
import {Users} from './Users';
import {Dispatch} from 'redux';
import {AppStateType} from "../../redux/storeRedux";
import {UsersType, UserType} from "../../redux/reducer/usersPageReducer";
import {setSunscribersAC, setTotalUsersCountAC, subscribeAC, unsubscribeAC, changeCurrentPageAC} from "../../redux/ac";

type MapStateToPropsType = UsersType

type MapDispatchToPropsType = {
    onClickSub: (id: string) => void
    onClickUnSub: (id: string) => void
    setSub: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    changeCurrentPage: (currentPage: number) => void
}

    const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
    users: state.usersPageReducer.users,
    pageSize: state.usersPageReducer.pageSize,
    totalUsersCount: state.usersPageReducer.totalUsersCount,
    currentPage: state.usersPageReducer.currentPage
}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickSub: (id: string) => dispatch(subscribeAC(id)),
        onClickUnSub: (id: string) => dispatch(unsubscribeAC(id)),
        setSub: (users: Array<UserType>) => dispatch(setSunscribersAC(users)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        changeCurrentPage: (currentPage: number) => dispatch(changeCurrentPageAC(currentPage))
    }
}

export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType

export const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users)