import React from 'react';
import s from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import {AppRootStateType} from './redux/store';
import ProfileContainer from './components/Profile/ProfileConteiner';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeTC} from './redux/reducer/appReducer';
import {Preloader} from './common/Preloader/Preloader';
import {Header} from './components/Header/Header';
import {Friends} from './components/Friends/Friends';
import {Users} from './components/Users/Users';
import {Dialogs} from './components/Dialogs/Dialogs';

class App extends React.PureComponent<AppPropsType> {
    componentDidMount() {
        this.props.initializeTC()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className={s.allContainer}>
                <Header/>
                <div className={s.mainContainer}>
                    <Navbar/>
                    <div className={s.contentContainer}>
                        <Route path="/dialogs" render={() => <Dialogs/>}/>
                        <Route exact path="/" render={() => <ProfileContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/users" render={() => <Users/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="/friends" render={() => <Friends/>}/>
                    </div>
                </div>
            </div>
        )
    }
}

type AppPropsType = {
    initializeTC: () => void
    initialized: boolean
}
const mapStateToProps = (state: AppRootStateType) => {
    return {
        initialized: state.AppReducer.initialized,
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {initializeTC}), withRouter)(App);
