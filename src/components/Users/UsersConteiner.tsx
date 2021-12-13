import React from 'react';
import {connect} from "react-redux";
import {Users} from './Users';
import {Dispatch} from 'redux';
import {AppStateType} from "../../redux/storeRedux";
import {UsersType, UserType} from "../../redux/reducer/usersPageReducer";
import {setSunscribersAC, subscribeAC, unsubscribeAC} from "../../redux/ac";

type MapStateToPropsType = {
    users: Array<UserType>
}

type MapDispatchToPropsType = {
    onClickSub: (id: string) => void
    onClickUnSub: (id: string) => void
    setSub: (users: UsersType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPageReducer,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickSub: (id: string) => dispatch(subscribeAC(id)),
        onClickUnSub: (id: string) => dispatch(unsubscribeAC(id)),
        setSub: (users: UsersType) => dispatch(setSunscribersAC(users)),
    }
}

export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType

export const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users)