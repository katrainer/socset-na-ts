import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {Preloader} from "../../common/Preloader/Preloader";
import {AppRootStateType} from "../../redux/store";
import {
    getStatusTC,
    setProfileUserDataTC,
    updateStatusTC,
    userProfilePageType
} from "../../redux/reducer/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.thunkSetProfileUserData(this.props)
        this.props.thunkGETStatus(this.props)
    }

    render() {
        return <>
            {this.props.preloader && <Preloader/>}
            <Profile
                profileUserData={this.props.userProfilePage}
                status={this.props.status}
                thunkUpdateStatus={this.props.thunkUpdateStatus}/>;
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
    thunkSetProfileUserData: (param: any) => void
    thunkGETStatus: (param: any) => void
    thunkUpdateStatus: (status: string) => void
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
            thunkSetProfileUserData: setProfileUserDataTC, thunkGETStatus: getStatusTC,
            thunkUpdateStatus: updateStatusTC,
        }),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)