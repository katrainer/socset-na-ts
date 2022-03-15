import React from "react";
import {Connect, connect, ConnectedProps} from "react-redux";
import {Header} from "./Header";
import {logOutTC, setAuthDataTC} from "../../redux/reducer/authReducer";
import {AppStateType} from "../../redux/store";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.thunkSetAuthData()
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            ThunkLogOut={this.props.ThunkLogOut}/>
    }
}

// type HeaderContainerType = mapDispatchToPropsType & mapStateToProps
// type mapDispatchToPropsType = {
//     thunkSetAuthData: () => void
// }
// type mapStateToProps = {
//     isAuth: boolean
// }
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

const connector = connect(mapStateToProps,
    {thunkSetAuthData: setAuthDataTC, ThunkLogOut: logOutTC})
type HeaderContainerType = ConnectedProps<typeof connector>


// export default connect(mapStateToProps,
//     {thunkSetAuthData})(HeaderContainer)
export default connector(HeaderContainer)