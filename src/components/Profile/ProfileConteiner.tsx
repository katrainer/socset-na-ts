import React from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {Preloader} from "../../common/Preloader";
import {changePreloader, setProfileUserData} from "../../redux/ac";
import {AppStateType} from "../../redux/storeRedux";
import axios from "axios";
import {userProfilePageType} from "../../redux/reducer/profilePageReducer";
import {RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export class ProfileAPIComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.changePreloader(true)
        let userId = this.props.match.params.userId
        if (!userId){
            userId='3'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
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

type MapStateToPropsType = {
    preloader: boolean
    userProfilePage: userProfilePageType | null
    // userProfilePageId: number
}
const mapStateToProps = (state: AppStateType) => {
    return {
        preloader: state.usersPageReducer.preloader,
        userProfilePage: state.profilePageReducer.userProfilePage,
        // userProfilePageId: state.profilePageReducer.userProfilePageId,
    }
}
type MapDispatchToPropsType = {
    changePreloader: (preloader: boolean) => void
    setProfileUserData: (data: userProfilePageType) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


const WithUrlDataContainerComponent = withRouter(ProfileAPIComponent)

export const ProfileConteiner = connect(mapStateToProps,
    {changePreloader, setProfileUserData})(WithUrlDataContainerComponent)
