import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {Preloader} from "../../common/Preloader";
import {AppStateType} from "../../redux/storeRedux";
import {thunkSetProfileUserData, userProfilePageType} from "../../redux/reducer/profilePageReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.thunkSetProfileUserData(this.props)
    }
    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>
        return <>
            {this.props.preloader && <Preloader/>}
            <Profile profileUserData={this.props.userProfilePage}/>;
        </>
    }
}

type PathParamsType = {
    userId: string,
}
type MapStateToPropsType = {
    preloader: boolean
    userProfilePage: userProfilePageType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    thunkSetProfileUserData: (param: any) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        preloader: state.usersPageReducer.preloader,
        userProfilePage: state.profilePageReducer.userProfilePage,
        isAuth: state.authReducer.isAuth,
    }
}
export default withRouter(connect(mapStateToProps,
    {thunkSetProfileUserData})(ProfileContainer))