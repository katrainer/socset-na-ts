import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {Preloader} from "../../common/Preloader";
import {AppStateType} from "../../redux/storeRedux";
import axios from "axios";
import {userProfilePageType, setProfileUserData} from "../../redux/reducer/profilePageReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {changePreloader} from "../../redux/reducer/usersPageReducer";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.changePreloader(true)
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
                this.props.changePreloader(false)
                this.props.setProfileUserData(response.data)
            })
    }
    render() {
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
}
type MapDispatchToPropsType = {
    changePreloader: (preloader: boolean) => void
    setProfileUserData: (data: userProfilePageType) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: AppStateType) => {
    return {
        preloader: state.usersPageReducer.preloader,
        userProfilePage: state.profilePageReducer.userProfilePage,
    }
}
export default withRouter(connect(mapStateToProps, {changePreloader, setProfileUserData})(ProfileContainer))