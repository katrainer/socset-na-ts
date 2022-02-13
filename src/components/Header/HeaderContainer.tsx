import React from "react";
import {Connect, connect, ConnectedProps} from "react-redux";
import {Header} from "./Header";
import {thunkSetAuthData} from "../../redux/reducer/authReducer";
import {AppStateType} from "../../redux/storeRedux";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.thunkSetAuthData()
    }

    render() {
        return <Header isAuth={this.props.isAuth}/>
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
    {thunkSetAuthData})
type HeaderContainerType = ConnectedProps<typeof connector>


// export default connect(mapStateToProps,
//     {thunkSetAuthData})(HeaderContainer)
export default connector(HeaderContainer)