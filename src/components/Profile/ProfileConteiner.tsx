import React from 'react';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {Preloader} from '../../common/Preloader/Preloader';
import {AppRootStateType} from '../../redux/store';
import {
    getStatusTC,
    setProfileUserDataTC,
    updateStatusTC,
    userProfilePageType
} from '../../redux/reducer/profilePageReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.PureComponent<PropsType> {
    componentDidMount() {
        this.props.setProfileUserDataTC(this.props)
        this.props.getStatusTC(this.props)
    }

    render() {
        return <>
            {this.props.preloader && <Preloader/>}
            <Profile
                profileUserData={this.props.userProfilePage}
                status={this.props.status}
                updateStatusTC={this.props.updateStatusTC}/>
        </>
    }
}

type PathParamsType = {
    userId: string,
}
type MapStateToPropsType = {
    preloader: boolean
    userProfilePage: userProfilePageType | null
    status: string
}
type MapDispatchToPropsType = {
    setProfileUserDataTC: (param: any) => void
    getStatusTC: (param: any) => void
    updateStatusTC: (status: string) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppRootStateType) => {
    return {
        preloader: state.userPage.preloader,
        userProfilePage: state.profile.userProfilePage,
        status: state.profile.status
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            setProfileUserDataTC, getStatusTC,
            updateStatusTC,
        }),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)