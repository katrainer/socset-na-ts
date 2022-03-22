import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {AppRootStateType} from './redux/store';
import {UsersContainer} from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import LoginFormik from './components/Login/LoginFormik';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeTC} from './redux/reducer/appReducer';
import {Preloader} from './common/Preloader/Preloader';

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeTC()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar sitebar={this.props.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/news" render={News}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginFormik/>}/>
                </div>
            </div>
        );
    }
}

type AppPropsType = {
    sidebar: {
        id: string,
        img: string,
        name: string
    }[]
    initializeTC: () => void
    initialized: boolean
}
const mapStateToProps = (state: AppRootStateType) => {
    return {
        sidebar: state.sidebar,
        initialized: state.AppReducer.initialized,
    }
}

// export default connect(mapStateToProps, {})(App);
export default compose<React.ComponentType>(connect(mapStateToProps, {initializeTC}), withRouter)(App);
