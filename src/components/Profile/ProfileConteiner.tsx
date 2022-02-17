import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {Preloader} from "../../common/Preloader";
import {AppStateType} from "../../redux/storeRedux";
import {
    thunkGETStatus,
    thunkSetProfileUserData,
    thunkUpdateStatus,
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
        // if (!this.props.isAuth) return <Redirect to='/login'/>
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
    thunkUpdateStatus: (status:string)=>void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        preloader: state.usersPageReducer.preloader,
        userProfilePage: state.profilePageReducer.userProfilePage,
        status: state.profilePageReducer.status
    }
}
// export default withRouter(connect(mapStateToProps,
//     {thunkSetProfileUserData})(ProfileContainer))

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {thunkSetProfileUserData, thunkGETStatus,
            thunkUpdateStatus,}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)