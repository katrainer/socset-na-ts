import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/storeRedux";
import {
    changeCurrentPage,
    changePreloader,
    setTotalUsersCount,
    setUsers,
    subscribe,
    unsubscribe,
    UsersType,
    UserType,
} from "../../redux/reducer/usersPageReducer";
import {Users} from './Users';
import {Preloader} from '../../common/Preloader';
import {usersAPI} from '../../API';

export class UsersAPIComponent extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.changePreloader(true)
        usersAPI.setUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.changePreloader(false)
            this.props.setUsers(data.items)
        })
        usersAPI.setTotalUsersCount().then(data => {
            this.props.changePreloader(false)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    changeCurrentPage = (currentPage: number) => {
        this.props.changePreloader(true)
        this.props.changeCurrentPage(currentPage)
        usersAPI.changeCurrentPage(currentPage, this.props.pageSize).then(data => {
            this.props.changePreloader(false)
            this.props.setUsers(data.items)
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
                unSubscribe={this.props.unsubscribe}
                subscribe={this.props.subscribe}
                changeCurrentPage={this.changeCurrentPage}/>
        </>
    }
}

type MapStateToPropsType = UsersType

type MapDispatchToPropsType = {
    subscribe: (id: string) => void
    unsubscribe: (id: string) => void
    setUsers: (users: Array<UserType>) => void
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
    subscribe, unsubscribe, setUsers, setTotalUsersCount,
    changeCurrentPage, changePreloader
})(UsersAPIComponent)
