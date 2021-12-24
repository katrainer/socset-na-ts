import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/storeRedux";
import {
    UsersType, UserType, changeCurrentPage,
    changePreloader,
    setSubscribers,
    setTotalUsersCount,
    subscribe,
    unsubscribe,
} from "../../redux/reducer/usersPageReducer";
import {Users} from './Users';
import axios from 'axios';
import {Preloader} from '../../common/Preloader';

export class UsersAPIComponent extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.changePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.changePreloader(false)
            this.props.setSubscribers(response.data.items)
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
            this.props.setSubscribers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.preloader && <Preloader/>}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unsubscribe={this.props.unsubscribe}
                subscribe={this.props.subscribe}
                changeCurrentPage={this.changeCurrentPage}/>
        </>
    }
}

type MapStateToPropsType = UsersType

type MapDispatchToPropsType = {
    subscribe: (id: string) => void
    unsubscribe: (id: string) => void
    setSubscribers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    changeCurrentPage: (currentPage: number) => void
    changePreloader: (preloader: boolean) => void
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

export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType
export const UsersConteiner = connect(mapStateToProps, {
    subscribe, unsubscribe, setSubscribers, setTotalUsersCount,
    changeCurrentPage, changePreloader
})(UsersAPIComponent)
