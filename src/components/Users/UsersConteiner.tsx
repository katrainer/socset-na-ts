import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {AppStateType} from "../../redux/storeRedux";
import {UsersType, UserType} from "../../redux/reducer/usersPageReducer";
import {
    changeCurrentPageAC,
    preloaderAC,
    setSunscribersAC,
    setTotalUsersCountAC,
    subscribeAC,
    unsubscribeAC
} from "../../redux/ac";
import {Users} from './Users';
import axios from 'axios';
import {Preloader} from '../../common/Preloader';

export class UsersAPIComponent extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.changePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.changePreloader(false)
            this.props.setSub(response.data.items)
        })
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.changePreloader(false)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    changeCurrentPage = (currentPage: number) => {
        this.props.changePreloader(true)
        this.props.changeCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}
        &count=${this.props.pageSize}`).then(response => {
            this.props.changePreloader(false)
            this.props.setSub(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.preloader&&<Preloader/>}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onClickUnSub={this.props.onClickUnSub}
                onClickSub={this.props.onClickSub}
                changeCurrentPage={this.changeCurrentPage}/>
        </>
    }
}

type MapStateToPropsType = UsersType

type MapDispatchToPropsType = {
    onClickSub: (id: string) => void
    onClickUnSub: (id: string) => void
    setSub: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    changeCurrentPage: (currentPage: number) => void
    changePreloader: (preloader: boolean)=>void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPageReducer.users,
        pageSize: state.usersPageReducer.pageSize,
        totalUsersCount: state.usersPageReducer.totalUsersCount,
        currentPage: state.usersPageReducer.currentPage,
        preloader: state.usersPageReducer.preloader
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickSub: (id: string) => dispatch(subscribeAC(id)),
        onClickUnSub: (id: string) => dispatch(unsubscribeAC(id)),
        setSub: (users: Array<UserType>) => dispatch(setSunscribersAC(users)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        changeCurrentPage: (currentPage: number) => dispatch(changeCurrentPageAC(currentPage)),
        changePreloader: (preloader: boolean)=>dispatch(preloaderAC(preloader))
    }
}

export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType

export const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)