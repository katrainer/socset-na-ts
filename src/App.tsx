import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {AppStateType} from "./redux/storeRedux";
import {DialogsConteiner} from "./components/Dialogs/DialogsConteiner";
import {UsersConteiner} from './components/Users/UsersConteiner';
import ProfileContainer from './components/Profile/ProfileConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';

type AppPropsType = {
    storeData: AppStateType
    store: any
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar sitebar={props.storeData.sidebarPageReducer}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsConteiner/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/users' render={() => <UsersConteiner/>}/>
                    <Route path='/login' render={()=><Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
