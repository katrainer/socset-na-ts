import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {
    changeCurrentPageTC,
    setUsersTC,
    subscribeTC,
    unSubscribeTC,
    UsersType
} from '../../redux/reducer/usersPageReducer';
import {Users} from './Users';
import {Preloader} from '../../common/Preloader/Preloader';
import {
    getCurrentPage, getFollowingInProgress,
    getPageSize,
    getPreloader,
    getTotalUsersCount,
    getUsers
} from '../../redux/reducer/selectors/user-selector';

export class UsersAPIComponent extends React.PureComponent<UserPropsType> {
    componentDidMount() {
        this.props.setUsersTC(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.preloader && <Preloader/>}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                thunkUnSubscribe={this.props.unSubscribeTC}
                thunkSubscribe={this.props.subscribeTC}
                thunkChangeCurrentPage={this.props.changeCurrentPageTC}
                followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

type MapStateToPropsType = UsersType

type MapDispatchToPropsType = {
    subscribeTC: (id: string) => void
    unSubscribeTC: (id: string) => void
    setUsersTC: (currentPage: number, pageSize: number) => void
    changeCurrentPageTC: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        preloader: getPreloader(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType
export const UsersContainer = connect(mapStateToProps, {
    setUsersTC,
    changeCurrentPageTC, unSubscribeTC, subscribeTC
})(UsersAPIComponent)
