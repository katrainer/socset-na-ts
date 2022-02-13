import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/storeRedux";
import {
    thunkChangeCurrentPage,
    thunkSetUsers,
    thunkSubscribe,
    thunkUnSubscribe,
    toggleFollowingInProgress,
    UsersType
} from "../../redux/reducer/usersPageReducer";
import {Users} from './Users';
import {Preloader} from '../../common/Preloader';

export class UsersAPIComponent extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.thunkSetUsers(this.props.currentPage, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.preloader && <Preloader/>}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                thunkUnSubscribe={this.props.thunkUnSubscribe}
                thunkSubscribe={this.props.thunkSubscribe}
                thunkChangeCurrentPage={this.props.thunkChangeCurrentPage}
                followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

type MapStateToPropsType = UsersType

type MapDispatchToPropsType = {
    thunkSubscribe: (id: string) => void
    thunkUnSubscribe: (id: string) => void
    thunkSetUsers: (currentPage: number, pageSize: number) => void
    thunkChangeCurrentPage: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPageReducer.users,
        pageSize: state.usersPageReducer.pageSize,
        totalUsersCount: state.usersPageReducer.totalUsersCount,
        currentPage: state.usersPageReducer.currentPage,
        preloader: state.usersPageReducer.preloader,
        followingInProgress: state.usersPageReducer.followingInProgress,
    }
}

export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType
export const UsersContainer = connect(mapStateToProps, {
    thunkSetUsers, toggleFollowingInProgress,
    thunkChangeCurrentPage, thunkUnSubscribe, thunkSubscribe
})(UsersAPIComponent)
