import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import {setAuthData} from "../../redux/reducer/authReducer";
import {AppStateType} from "../../redux/storeRedux";
import {headerAPI} from "../../API";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        headerAPI.setAuthData().then(data => {
            const {id, email, login} = data.data
            this.props.setAuthData(id, email, login)
        })
    }
    render() {
        return <Header isAuth={this.props.isAuth}/>
    }
}

type HeaderContainerType = mapDispatchToPropsType & mapStateToProps
type mapDispatchToPropsType = {
    setAuthData: (id: number, email: string, login: string) => void
}
type mapStateToProps = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}


export default connect(mapStateToProps, {setAuthData})(HeaderContainer)