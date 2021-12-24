import React from "react";
import {connect} from "react-redux";
import {Header} from "./Header";
import axios from "axios";
import {setAuthData} from "../../redux/reducer/authReducer";
import {AppStateType} from "../../redux/storeRedux";

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials:true}).then(response => {
            const {id, email, login} = response.data.data
            this.props.setAuthData(id, email, login)
        })
    }

    render() {
        return <Header isAuth={this.props.isAuth}/>
    }
}

type HeaderContainerType = mapDispatchToPropsType&mapStateToProps
type mapDispatchToPropsType = {
    setAuthData: (id: number, email: string, login: string) => void
}
type mapStateToProps = {
    isAuth: boolean
}
const mapStateToProps =(state: AppStateType)=> {
    return{
        isAuth: state.authReducer.isAuth
    }
}


export default connect(mapStateToProps, {setAuthData})(HeaderContainer)