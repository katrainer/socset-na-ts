import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Header} from './Header';
import {logOutTC} from '../../redux/reducer/authReducer';
import {AppRootStateType} from '../../redux/store';

class HeaderContainer extends React.Component<HeaderContainerType> {
    // componentDidMount() {
    //     this.props.thunkSetAuthData()
    // }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            ThunkLogOut={this.props.logOutTC}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.login.isAuth
    }
}

const connector = connect(mapStateToProps,
    {logOutTC})
type HeaderContainerType = ConnectedProps<typeof connector>

export default connector(HeaderContainer)