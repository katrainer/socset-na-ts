import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {setAuthData, thunkSetAuthData} from "../../redux/reducer/authReducer";
import {AppStateType} from "../../redux/storeRedux";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.thunkSetAuthData()
    }

    render() {
        return <Header isAuth={this.props.isAuth}/>
    }
}

type HeaderContainerType = mapDispatchToPropsType & mapStateToProps
type mapDispatchToPropsType = {
    thunkSetAuthData: () => void
}
type mapStateToProps = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}


export default connect(mapStateToProps,
    {thunkSetAuthData})(HeaderContainer)